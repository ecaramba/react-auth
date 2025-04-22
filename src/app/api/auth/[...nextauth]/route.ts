import NextAuth from "next-auth";
import AzureAD from "next-auth/providers/azure-ad";
import { JWT } from "next-auth/jwt";
import { Session } from "next-auth";

export const authOptions = {
  providers: [
    AzureAD({
      clientId: process.env.AZURE_AD_CLIENT_ID as string,
      clientSecret: process.env.AZURE_AD_CLIENT_SECRET as string,
      tenantId: process.env.AZURE_AD_TENANT_ID as string,
      authorization: {
        params: {
          scope: "openid profile email User.Read",
        },
      },
    }),
  ],
  callbacks: {
    async jwt({ token, account, profile }: any): Promise<JWT> {
      // Initial sign in
      if (account && profile) {
        token.id = profile.oid || profile.sub;
        token.accessToken = account.access_token;
      }
      return token;
    },
    async session({ session, token }: { session: Session; token: JWT }): Promise<Session> {
      if (session.user) {
        session.user.id = token.id;
        session.user.accessToken = token.accessToken;
      }
      return session;
    },
  },
  pages: {
    signIn: "/api/auth/signin",
    signOut: "/api/auth/signout",
    error: "/api/auth/error",
  },
  session: {
    strategy: "jwt",
  },
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };