"use server";

import { signOut } from "@/auth";

export async function handleLogout() {
    await signOut({ redirect: false }); // Prevents immediate redirect
    return { success: true };
}