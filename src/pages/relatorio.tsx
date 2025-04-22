import Navbar from "@/components/Navbar";
import Link from "next/link";
import Head from "next/head";

export default function RelatorioPage() {
  return (
    <>
      <Head>
        <title>Relatório Público | Next.js Auth</title>
        <meta name="description" content="Página de relatório público" />
      </Head>
      
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow container mx-auto p-8">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-3xl font-bold mb-6">Relatório Público</h1>
            <div className="bg-white p-6 rounded-lg shadow-md mb-6">
              <h2 className="text-xl font-semibold mb-4">Conteúdo Público</h2>
              <p className="text-gray-700 mb-4">
                Esta página é pública e pode ser acessada sem autenticação.
              </p>
              <p className="text-gray-700 mb-4">
                Relatórios públicos e informações gerais podem ser exibidos aqui.
              </p>
              <Link 
                href="/protected" 
                className="inline-block mt-4 bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded"
              >
                Ver conteúdo protegido
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h2 className="text-xl font-semibold mb-4">Relatório Mensal</h2>
                <p className="text-gray-700">
                  Informações estatísticas e resumo de atividades do mês atual.
                </p>
                <ul className="mt-4 list-disc list-inside">
                  <li>Item 1</li>
                  <li>Item 2</li>
                  <li>Item 3</li>
                </ul>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h2 className="text-xl font-semibold mb-4">Documentos Recentes</h2>
                <p className="text-gray-700">
                  Lista de documentos públicos disponíveis para visualização.
                </p>
                <ul className="mt-4 space-y-2">
                  <li>
                    <a href="#" className="text-blue-600 hover:underline">Documento 1</a>
                  </li>
                  <li>
                    <a href="#" className="text-blue-600 hover:underline">Documento 2</a>
                  </li>
                  <li>
                    <a href="#" className="text-blue-600 hover:underline">Documento 3</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}