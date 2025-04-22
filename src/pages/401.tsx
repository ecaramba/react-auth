import Navbar from "@/components/Navbar";
import Link from "next/link";
import Head from "next/head";
import { signIn } from "next-auth/react";

export default function UnauthorizedPage() {
  return (
    <>
      <Head>
        <title>Unauthorized Access | Next.js Auth</title>
        <meta name="description" content="You must be logged in to access this page" />
      </Head>
      
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow container mx-auto p-8 flex items-center justify-center">
          <div className="max-w-2xl w-full text-center">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h1 className="text-4xl font-bold text-red-600 mb-4">401</h1>
              <h2 className="text-2xl font-semibold mb-6">Acesso Não Autorizado</h2>
              
              <div className="border-t border-b border-gray-200 py-6 my-6">
                <p className="text-gray-700 mb-4">
                  Você precisa estar autenticado para acessar esta página.
                </p>
                <p className="text-gray-700 mb-4">
                  Por favor, faça login para continuar.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  href="/"
                  className="bg-gray-500 hover:bg-gray-600 text-white py-2 px-6 rounded-md font-medium"
                >
                  Ir para Home
                </Link>
                <button
                  onClick={() => signIn("azure-ad")}
                  className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-6 rounded-md font-medium"
                >
                  Fazer Login
                </button>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}