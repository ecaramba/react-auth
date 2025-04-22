import type { GetServerSideProps, NextPage } from 'next';
import { getSession } from 'next-auth/react';
import Head from 'next/head';

// This type defines the props structure for our page
interface TestProtectedPageProps {
  currentTime: string;
  environment: string;
  user: {
    name?: string;
    email?: string;
    id?: string;
  };
}

// Protected server-side rendered page (auth required)
const TestProtectedPage: NextPage<TestProtectedPageProps> = ({ currentTime, environment, user }) => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-6">
      <Head>
        <title>Protected Server Page</title>
      </Head>
      
      <main className="flex w-full max-w-2xl flex-col items-center justify-center px-4 text-center">
        <h1 className="mb-6 text-3xl font-bold">Protected Server Page</h1>
        
        <div className="w-full rounded-lg bg-white p-6 shadow-md dark:bg-gray-800">
          <h2 className="mb-4 text-xl font-semibold">Server Data:</h2>
          
          <div className="mb-4 grid grid-cols-1 gap-2 text-left">
            <div className="rounded-md bg-gray-100 p-3 dark:bg-gray-700">
              <span className="font-medium">Server Time:</span> {currentTime}
            </div>
            <div className="rounded-md bg-gray-100 p-3 dark:bg-gray-700">
              <span className="font-medium">Environment:</span> {environment}
            </div>
          </div>
          
          <h2 className="mb-4 mt-6 text-xl font-semibold">User Data:</h2>
          
          <div className="grid grid-cols-1 gap-2 text-left">
            <div className="rounded-md bg-gray-100 p-3 dark:bg-gray-700">
              <span className="font-medium">Name:</span> {user.name || 'Not provided'}
            </div>
            <div className="rounded-md bg-gray-100 p-3 dark:bg-gray-700">
              <span className="font-medium">Email:</span> {user.email || 'Not provided'}
            </div>
            <div className="rounded-md bg-gray-100 p-3 dark:bg-gray-700">
              <span className="font-medium">ID:</span> {user.id || 'Not provided'}
            </div>
          </div>
          
          <p className="mt-6 text-sm text-gray-600 dark:text-gray-400">
            This page is server-side rendered and requires authentication.
          </p>
        </div>
      </main>
    </div>
  );
};

// GetServerSideProps function runs on each request
export const getServerSideProps: GetServerSideProps = async (context) => {
  // Get the user's session
  const session = await getSession(context);
  
  // If no session exists, redirect to login page
  if (!session) {
    return {
      redirect: {
        destination: '/401',
        permanent: false,
      },
    };
  }
  
  // Get server-side data (only accessible when authenticated)
  const currentTime = new Date().toLocaleString();
  const environment = process.env.NODE_ENV || 'development';
  
  return {
    props: {
      currentTime,
      environment,
      user: {
        name: session.user?.name || null,
        email: session.user?.email || null,
        id: (session.user as any)?.id || null,
      },
    },
  };
};

export default TestProtectedPage;