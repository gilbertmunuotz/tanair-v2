'use client'

// import { useState } from "react";
import { Box, Button, } from "@mui/material";
import { OrderFormProp } from "@/interfaces/interface";

export default function UserForm({ setOpen }: OrderFormProp) {
    return (
        <div>
            <h1>User form</h1>

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