import { getServerSession } from "next-auth/next";
import { NextAuthOptions,User } from "next-auth";
import { AdapterUser } from "next-auth/adapters";
import GoogleProvider from "next-auth/providers/google";
import jsonwebtoken from 'jsonwebtoken';
import {JWT} from 'next-auth/jwt'



export const authOptions : NextAuthOptions = {
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
theme:{
    colorScheme:'light',
    logo:'/'
},
callbacks: {
    async session({ session }) {
      return session
    },
    async signIn({ user}:{user:AdapterUser | User}) {
      try {
       
        return true;
      } catch (error) {
        return false
      }
    },
}


}
// export default NextAuth(authOptions)
