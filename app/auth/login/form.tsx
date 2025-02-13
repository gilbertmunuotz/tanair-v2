'use client'

import { useState } from "react";
import { handleLogin } from "./_action";
import { signIn } from "next-auth/react";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { formSchema } from "@/schema/formSchema"
import { yupResolver } from "@hookform/resolvers/yup"
import type { FormValues } from "../../../interfaces/interface"
import { TextField, Box, Typography, Button, Alert } from "@mui/material"

export default function Form() {

    // Handle Error state Logic 
    const [serverError, setServerError] = useState<string | null>(null)

    // Track Loading State
    const [loading, setLoading] = useState(false);

    // Destructure useRouter
    const router = useRouter();

    // Initialize React Hook Form with the Yup resolver
    const { register, handleSubmit, formState: { errors } } = useForm<FormValues>({
        resolver: yupResolver(formSchema),
    });

    // Handle Form Submission
    async function onSubmit(data: FormValues) {
        setLoading(true);
        const formData = new FormData()
        formData.append("email", data.email)
        formData.append("password", data.password)

        const response = await handleLogin(formData)


        if (response?.error) {
            setServerError(response.error)
        } else if (response?.success) {
            // Manually update the session
            const result = await signIn("credentials", {
                email: data.email,
                password: data.password,
                redirect: false,
            });

            if (result?.error) {
                setServerError(result.error)
            } else {
                router.push("/admin/home")
            }
        }
        setLoading(false);
    };

    return (
        <div className="min-h-screen flex justify-center items-center bg-gray-100">
            <div className="bg-white rounded-lg shadow-md p-8 w-full max-w-lg">
                <form onSubmit={handleSubmit(onSubmit)}>

                    {/* Display Server Errors  */}
                    {serverError && <Alert severity="error" variant="filled" onClose={() => { setServerError(null) }} sx={{ mb: 2 }}>{serverError}</Alert>}
                    <Box sx={{ width: "100%", maxWidth: 400, mx: "auto", p: 4, border: "1px solid #000" }}>

                        <Typography id="sign-in-modal-title" variant="h6" component="h2" className="text-3xl font-bold text-center mb-2">
                            Welcome Back.
                        </Typography>

                        {/* Email Field */}
                        <TextField
                            fullWidth
                            margin="normal"
                            label="Email"
                            {...register("email")}
                            error={!!errors.email}
                            placeholder="johndoe@gmail.com"
                            helperText={errors.email?.message}
                        />

                        {/* Password Field */}
                        <TextField
                            fullWidth
                            margin="normal"
                            label="Password"
                            type="password"
                            {...register("password")}
                            error={!!errors.password}
                            placeholder="********"
                            helperText={errors.password?.message}
                        />

                        {/* Submit Button */}
                        <div className="buttons">
                            {loading ? (
                                <Button loading fullWidth variant="contained" color="primary" disabled sx={{ mt: 2, mb: 1, width: "100%" }}>
                                    Signin In....
                                </Button>

                            ) : (
                                <Button variant="contained" type="submit" color="primary" sx={{ mt: 2, mb: 1, width: "100%" }}>
                                    Sign In
                                </Button>
                            )}
                        </div>

                        <hr className='my-3 border-y- border-black' />
                    </Box>
                </form>
            </div>
        </div>
    )
}