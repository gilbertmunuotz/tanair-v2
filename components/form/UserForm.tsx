'use client'

import { useState } from "react";
import { Box, Button, TextField, } from "@mui/material";
import { OrderFormProp } from "@/interfaces/interface";

export default function UserForm({ setOpen }: OrderFormProp) {

    //Form States
    const [name, setName] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [role, setRole] = useState<string>("user");

    return (
        <div>
            <div className="mb-3">
                <TextField
                    required
                    fullWidth
                    value={name}
                    label="Enter Name"
                    placeholder="E.g John Doe"
                    sx={{ borderRadius: "8px" }}
                    onChange={(e) => setName(e.target.value)}
                />
            </div>

            <div className="mb-4">
                <TextField
                    required
                    fullWidth
                    value={email}
                    label="Enter Email"
                    placeholder="E.g johndoe@gmail.com"
                    sx={{ borderRadius: "8px" }}
                    onChange={(e) => setEmail(e.target.value)}
                />
            </div>

            <div className="mb-4">
                <TextField
                    required
                    fullWidth
                    value={password}
                    placeholder="*******"
                    label="Enter Password"
                    sx={{ borderRadius: "8px" }}
                    onChange={(e) => setPassword(e.target.value)}
                />
            </div>

            <div className="flex gap-6 mt-2">
                <label>
                    <input type="radio" checked={role === "user"} onChange={() => setRole("user")} />  User
                </label>
                <label>
                    <input type="radio" checked={role === "admin"} onChange={() => setRole("admin")} /> Admin
                </label>
            </div>

            <Box display="flex" justifyContent="flex-end" mt={2} gap={2}>
                <Button type="submit" fullWidth variant="contained" sx={{ mt: 2, backgroundColor: "#4f46e5" }}>
                    Create
                </Button>

                <Button variant="contained" color="primary" onClick={() => setOpen(false)} sx={{ mt: 2 }}>
                    Close
                </Button>
            </Box>
        </div>
    )
}