import type { GetServerSideProps, NextPage } from 'next';
import Head from 'next/head';

// This type defines the props structure for our page
interface TestPublicPageProps {
  currentTime: string;
  environment: string;
}

// Public server-side rendered page (no auth required)
const TestPublicPage: NextPage<TestPublicPageProps> = ({ currentTime, environment }) => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-6">
      <Head>
        <title>Public Server Page</title>
      </Head>
      
      <main className="flex w-full max-w-2xl flex-col items-center justify-center px-4 text-center">
        <h1 className="mb-6 text-3xl font-bold">Public Server Page</h1>
        
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
          
          <p className="mt-6 text-sm text-gray-600 dark:text-gray-400">
            This page is server-side rendered but doesn&apos;t require authentication.
          </p>
        </div>
      </main>
    </div>
  );
};

// GetServerSideProps function runs on each request
export const getServerSideProps: GetServerSideProps = async () => {
  // Get server-side data (accessible without authentication)
  const currentTime = new Date().toLocaleString();
  const environment = process.env.NODE_ENV || 'development';
  
  return {
    props: {
      currentTime,
      environment,
    },
  };
};

export default TestPublicPage;