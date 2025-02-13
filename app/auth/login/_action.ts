"use server"

import { signIn } from "@/auth"

export async function handleLogin(formData: FormData) {
    const email = formData.get("email") as string
    const password = formData.get("password") as string

    if (!email || !password) {
        return { error: "Email and password are required." }
    }

    try {
        const result = await signIn("credentials", { email, password, redirect: false, });

        if (result?.error) {
            return { error: result.error }
        }

        return { success: true }
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
        return { error: error.message ? "Invalid Credentials!" : "Error, Try Again Later!" }
    }
}