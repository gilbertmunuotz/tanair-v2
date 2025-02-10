"use client"

import { useSession } from "next-auth/react"
import { useRouter } from "next/navigation"
import { useEffect } from "react"

export default function Protected({ children }: { children: React.ReactNode }) {
    const { data: session, status } = useSession()
    const router = useRouter()

    useEffect(() => {
        if (status === "loading") return // Do nothing while loading
        if (!session) router.push("/auth/login")
    }, [session, status, router])

    return session ? <>{children}</> : null
}