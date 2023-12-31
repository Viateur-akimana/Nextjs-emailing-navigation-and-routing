import NextAuth, { NextAuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { PrismaClient } from "@prisma/client";
export const AuthOptions:NextAuthOptions ={
    adapter: PrismaAdapter(PrismaClient),
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID!,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET!
        })
    ],
    session:{
        strategy:"jwt"
    }
}
const handler = NextAuth(AuthOptions);
export {handler as GET, handler as POST};