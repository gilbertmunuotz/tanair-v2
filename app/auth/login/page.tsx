import Form from "@/app/auth/login/form"
import { auth } from "@/auth"
import { redirect } from "next/navigation"

export default async function page() {

    const session = await auth()

    if (session) {
        redirect("/admin/home")
    }

    return (
        <Form />
    )
}