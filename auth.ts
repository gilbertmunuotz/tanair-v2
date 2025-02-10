import bcrypt from "bcrypt";
import NextAuth from "next-auth"
import userModel from "@/models/user"
import { connectToMongo } from "@/config/dbconfig";
import CredentialsProvider from "next-auth/providers/credentials"

export const { handlers, signIn, signOut, auth } = NextAuth({
    providers: [
        CredentialsProvider({
            name: "Credentials",
            credentials: {
                email: { label: "Email", type: "email" },
                password: { label: "Password", type: "password" },
            },
            async authorize(credentials) {
                await connectToMongo()

                // ✅ Ensure credentials exist & are of correct type
                const email = credentials?.email as string;
                const password = credentials?.password as string;

                if (!email || !password) {
                    throw new Error("Missing email or password");
                }

                // ✅ Fix: Ensure `findOne` receives a valid string
                const user = await userModel.findOne({ email });

                if (!user) {
                    throw new Error("User not found");
                }

                // ✅ Fix: Ensure bcrypt.compare receives correct parameters
                const passwordMatch = await bcrypt.compare(password, user.password);

                if (!passwordMatch) {
                    throw new Error("Invalid password");
                }

                return { id: user.id, email: user.email };
            }
        })
    ],
    session: {
        strategy: "jwt" as const,
    },
    secret: process.env.AUTH_SECRET,
    pages: {
        signIn: "auth/login"
    },
    callbacks: {
        async jwt({ token, user }) {
            if (user) {
                token.id = user.id
            }
            return token
        },
        async session({ session, token }) {
            if (session.user) {
                session.user.id = token.id as string
            }
            return session
        },
    }
});

const handler = NextAuth;
export { handler as GET, handler as POST };