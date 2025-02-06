'use client'

import { useState } from "react";
import UserForm from "../form/UserForm";
import AddIcon from '@mui/icons-material/Add';
import { Box, Typography, Tooltip } from "@mui/material";

export default function User() {

    const [open, setOpen] = useState(false);

    return (
        <div className="flex justify-end mt-4">
            <button className="rounded-full bg-indigo-600 px-5 py-1.5 ml-4" onClick={() => setOpen(true)}>
                <Tooltip title={'New User'}>
                    <div className="flex items-center space-x-2">
                        <AddIcon className="text-black" />
                        <h2 className="text-base text-black">New</h2>
                    </div>
                </Tooltip>
            </button>

            {/* Modal */}
            {open && (
                <Box sx={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: 400, border: '1px solid #000', p: 4, backgroundColor: 'background.paper', boxShadow: 24, maxHeight: '80vh', overflow: 'auto', }}>
                    <Typography className="text-center mb-2">
                        Create New User
                    </Typography>

                    {/* Render the form Passing open state to it  */}
                    <UserForm setOpen={setOpen} />

                </Box>
            )}
        </div>
    )
}