import NextAuth, { DefaultSession } from "next-auth";
import { JWT } from "next-auth/jwt";

declare module "next-auth" {
  interface Session {
    user: {
      /** The user's id from Azure AD. */
      id?: string;
      /** The Azure AD access token */
      accessToken?: string;
    } & DefaultSession["user"];
  }
  
  interface User {
    id?: string;
    accessToken?: string;
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    /** The user's id from Azure AD. */
    id?: string;
    /** The Azure AD access token */
    accessToken?: string;
  }
}