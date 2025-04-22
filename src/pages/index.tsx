import Image from "next/image";
import Navbar from "@/components/Navbar";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Next.js with Microsoft Entra ID Authentication</title>
        <meta name="description" content="Authentication example using Next.js and Microsoft Entra ID" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow container mx-auto p-8">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-3xl font-bold mb-6">Next.js with Microsoft Entra ID Authentication</h1>
            <p className="mb-4">
              This is a sample application demonstrating authentication with Next.js and Microsoft Entra ID (Azure AD).
            </p>
            <p className="mb-8">
              Use the Sign In button in the navigation bar to log in with your Microsoft account. Once logged in, you will be able to access the protected pages.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h2 className="text-xl font-semibold mb-4">Authentication Flow</h2>
                <p className="text-gray-700">
                  This app uses NextAuth.js with the Azure AD provider to handle authentication.
                  User credentials are securely managed through Microsoft Entra ID.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h2 className="text-xl font-semibold mb-4">Getting Started</h2>
                <p className="text-gray-700">
                  To set up this project, you need to configure your Microsoft Entra ID 
                  credentials in the .env.local file.
                </p>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}