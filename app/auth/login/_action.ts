"use server"

import { connectToMongo } from "@/config/dbconfig"
import userModel from "@/models/user"
import bcrypt from "bcrypt"
import { signIn } from "@/auth"

export async function handleLogin(formData: FormData) {
    const email = formData.get("email") as string
    const password = formData.get("password") as string

    // Perform some Validation
    if (!email || !password) {
        return { error: "Email and password are required." }
    }

    try {
        // Connect to Mongo
        await connectToMongo()

        // Check if User Exists
        const user = await userModel.findOne({ email })
        if (!user) {
            return { error: "user not found!" }
        }

        // Compare password with hashed password in the database
        const isPasswordValid = await bcrypt.compare(password, user.password)
        if (!isPasswordValid) {
            return { error: "Invalid credentials." }
        }

        // Sign in the user
        const result = await signIn("credentials", { email, password, redirect: false })

        if (result?.error) {
            return { error: result.error }
        }

        return { success: true }
    } catch (error) {
        console.error("Error during login:", error)
        return { error: "Internal server error." }
    }
}