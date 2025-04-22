import { signIn, signOut, useSession } from "next-auth/react";
import Link from "next/link";

export default function Navbar() {
  const { data: session, status } = useSession();
  const loading = status === "loading";

  return (
    <nav className="bg-white shadow-sm p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-xl font-bold">
          Next.js Auth Demo
        </Link>
        <div className="flex items-center gap-4">
          <Link href="/" className="hover:underline">
            Home
          </Link>
          <Link href="/relatorio" className="hover:underline">
            Relatório
          </Link>
          {session && (
            <>
              <Link href="/cadastro" className="hover:underline">
                Cadastro
              </Link>
              <Link href="/protected" className="hover:underline">
                Protected
              </Link>
            </>
          )}
          {!loading && !session && (
            <button
              onClick={() => signIn("azure-ad")}
              className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded"
            >
              Sign in
            </button>
          )}
          {session && (
            <div className="flex items-center gap-4">
              <span className="text-gray-700">
                {session.user?.name || session.user?.email}
              </span>
              <button
                onClick={() => signOut({ callbackUrl: "/" })}
                className="bg-red-600 hover:bg-red-700 text-white py-2 px-4 rounded"
              >
                Sign out
              </button>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}