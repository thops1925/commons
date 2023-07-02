import { getServerSession } from "next-auth/next";
import { NextAuthOptions, User } from "next-auth";
import { AdapterUser } from "next-auth/adapters";
import GoogleProvider from "next-auth/providers/google";
import jsonwebtoken from 'jsonwebtoken';
import { JWT } from 'next-auth/jwt'
import { SessionInterface, UserProfile } from "@/common";
import { getUser } from "./actions";



export const authOptions: NextAuthOptions = {
  // Configure one or more authentication providers
  providers: [
    GoogleProvider({
      clientId: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID!,
      clientSecret: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_SECRET!
    })
  ],

  // jwt : {
  //     async encode({secret,token}) {},
  //     async decode({secret,token}) {},
  // },

  theme: {
    colorScheme: 'light',
    logo: '/thops2.png'
  },

  callbacks: {

    async session({ session }) {

      const email = session?.user?.email as string;

      try {
        const data = await getUser(email) as { user?: UserProfile }

        const newSession = {
          ...session, user: { ...session.user, ...data?.user, },
        };

        return newSession;

      } catch (error: any) {
        console.error("Error retrieving user data: ", error.message);
        return session;

      }

    },

    async signIn({ user }: { user: AdapterUser | User }) {

      try {

        return true;
      } catch (error) {
        return false
      }
    },
  }

}

export async function getCurrentUser() {
  const session = await getServerSession(authOptions) as SessionInterface;
  return session
}