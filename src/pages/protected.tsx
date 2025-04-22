import { useSession } from "next-auth/react";
import Navbar from "@/components/Navbar";
import { useRouter } from "next/router";
import { useEffect } from "react";
import Head from "next/head";

export default function ProtectedPage() {
  const { data: session, status } = useSession();
  const router = useRouter();
  const loading = status === "loading";

  useEffect(() => {
    if (!loading && !session) {
      router.push("/401");
    }
  }, [session, loading, router]);

  if (loading) {
    return (
      <>
        <Head>
          <title>Protected Page | Next.js Auth</title>
        </Head>
        <div className="min-h-screen flex flex-col">
          <Navbar />
          <main className="flex-grow container mx-auto p-8 flex items-center justify-center">
            <div className="text-xl">Loading...</div>
          </main>
        </div>
      </>
    );
  }

  if (!session) {
    return null; // Will redirect in useEffect
  }

  return (
    <>
      <Head>
        <title>Protected Page | Next.js Auth</title>
        <meta name="description" content="Protected page that requires authentication" />
      </Head>
      
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow container mx-auto p-8">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-3xl font-bold mb-6">Protected Page</h1>
            <div className="bg-white p-6 rounded-lg shadow-md mb-6">
              <h2 className="text-xl font-semibold mb-4">Welcome, {session.user?.name || session.user?.email}!</h2>
              <p className="text-gray-700 mb-4">
                This page is protected and can only be accessed by authenticated users.
              </p>
              <p className="text-gray-700">
                You are currently signed in with your Microsoft account.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-xl font-semibold mb-4">User Session Information</h2>
              <pre className="bg-gray-100 p-4 rounded overflow-auto">
                {JSON.stringify(session, null, 2)}
              </pre>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}