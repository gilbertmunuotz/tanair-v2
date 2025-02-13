'use client'

import { useState } from "react";
import { Box, Button, TextField } from "@mui/material";
import { OrderFormProp } from "@/interfaces/interface";

export default function OrderForm({ setOpen }: OrderFormProp) {

    // Form States
    const [customerName, setcustomerName] = useState<string>('');
    const [productName, setproductName] = useState<string>('');
    const [quantity, setquantity] = useState<number>(0);
    const [price, setprice] = useState<number>(0);

    return (
        <div>
            <div className="mb-3">
                <TextField
                    required
                    fullWidth
                    value={customerName}
                    label="Client Name"
                    placeholder="E.g John Smith"
                    sx={{ borderRadius: "8px" }}
                    onChange={(e) => setcustomerName(e.target.value)}
                />
            </div>

            <div className="mb-4">
                <TextField
                    required
                    fullWidth
                    value={productName}
                    label="Product Name"
                    placeholder="E.g Sofa Bed"
                    sx={{ borderRadius: "8px" }}
                    onChange={(e) => setproductName(e.target.value)}
                />
            </div>

            <div className="mb-4">
                <TextField
                    required
                    fullWidth
                    value={quantity}
                    placeholder="E.g 5"
                    label="Enter quantity"
                    sx={{ borderRadius: "8px" }}
                    onChange={(e) => setquantity(Number(e.target.value))}
                />
            </div>

            <div className="mb-1">
                <TextField
                    required
                    fullWidth
                    value={price}
                    label="Enter Amount"
                    placeholder="E.g 1200"
                    sx={{ borderRadius: "8px" }}
                    onChange={(e) => setprice(Number(e.target.value))}
                />
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