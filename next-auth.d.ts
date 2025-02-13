import type { DefaultSession } from "next-auth"

declare module "next-auth" {
    interface Session extends DefaultSession {
        user: {
            id: string
            role: string
            accessToken: string
        }& DefaultSession["user"]
        accessToken: string
    }


    interface User {
        role: string
        accessToken: string
    }
}

declare module "next-auth/jwt" {
    interface JWT {
        id: string
        role: string
        accessToken: string
    }
}