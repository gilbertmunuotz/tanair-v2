'use client'

import { useState } from "react";
import { signIn } from "next-auth/react";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { formSchema } from "@/schema/formSchema"
import { yupResolver } from "@hookform/resolvers/yup"
import type { FormValues } from "../../../interfaces/interface"
import { TextField, Box, Typography, Button } from "@mui/material"
import { handleLogin } from "./_action";

export default function Form() {

    // Handle Error state Logic 
    const [serverError, setServerError] = useState<string | null>(null)

    // Destructure useRouter
    const router = useRouter();

    // Initialize React Hook Form with the Yup resolver
    const { register, handleSubmit, formState: { errors } } = useForm<FormValues>({
        resolver: yupResolver(formSchema),
    });

    // Handle Form Submission
    async function onSubmit(data: FormValues) {

        const formData = new FormData();
        formData.append("email", data.email);
        formData.append("password", data.password);

        const response = await handleLogin(formData);

        if (response.error) {
            setServerError(response.error)
        } else if (response.success) {
            // Manually update the session
            await signIn("credentials", {
                email: data.email,
                password: data.password,
                redirect: false
            })
            router.push("/admin/home");
        }
    };

    return (
        <div className="min-h-screen flex justify-center items-center bg-gray-100">
            <div className="bg-white rounded-lg shadow-md p-8 w-full max-w-lg">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <Box sx={{ width: "100%", maxWidth: 400, mx: "auto", p: 4, border: "1px solid #000" }}>
                        <Typography id="sign-in-modal-title" variant="h6" component="h2" className="text-3xl font-bold text-center mb-2">
                            Welcome Back.
                        </Typography>


                        {/* Display Server Errors  */}
                        {serverError && (
                            <Typography color="error" sx={{ mb: 2, textAlign: "center" }}>
                                {serverError}
                            </Typography>
                        )}

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
                            <Button variant="contained" type="submit" color="primary" sx={{ mt: 2, mb: 1, width: "100%" }}>
                                Sign In
                            </Button>
                        </div>

                        <hr className='my-3 border-y- border-black' />
                    </Box>
                </form>
            </div>
        </div>
    )
}