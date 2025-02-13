import axios from "axios";
import NextAuth from "next-auth"
import { BACKEND_URI } from "./constant/constant";
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

                try {
                    // Make call to API
                    const response = await axios.post(`${BACKEND_URI}/v1/auth/login`, {
                        email: credentials.email,
                        password: credentials.password
                    });

                    if (response.data?.jwtToken) {
                        return {
                            id: response.data.user.id,
                            email: response.data.user.email,
                            name: response.data.user.name,
                            role: response.data.role,
                            accessToken: response.data.jwtToken,
                        };
                    }

                    return null;

                    // eslint-disable-next-line @typescript-eslint/no-explicit-any
                } catch (error: any) {
                    // Get the error message from the API response
                    const errorMessage = error.response?.data?.message

                    throw new Error(errorMessage)
                }
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
                if (user) {
                    token.id = user.id!;
                    token.email = user.email;
                    token.name = user.name;
                    token.role = user.role;
                    token.accessToken = user.accessToken;
                }
            }
            return token
        },
        async session({ session, token }) {
            if (session.user) {
                if (token) {
                    session.user.id = token.id as string;
                    session.user.email = token.email as string;
                    session.user.name = token.name;
                    session.user.role = token.role as string;
                    session.accessToken = token.accessToken as string;
                }
            }
            return session
        },
    },
});

const handler = NextAuth;
export { handler as GET, handler as POST };