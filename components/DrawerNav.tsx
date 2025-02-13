'use client'

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Tooltip } from "@mui/material";
import tanair from "@/public/tanair.png";
import { handleLogout } from "./_action";
import { useRouter } from "next/navigation";
import HomeIcon from '@mui/icons-material/Home';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import LogoutIcon from '@mui/icons-material/Logout';


// Path: components/DrawerNav.tsx
const NavItems = [
    { name: "Home", path: "/admin/home", icon: <HomeIcon sx={{ color: 'black', fontSize: 30 }} /> },
]

export default function DrawerNav() {

    // Manage open and close state of the drawer
    const [isOpen, setOpen] = useState(false);;

    const toggleDrawer = () => setOpen(!isOpen);

    const router = useRouter();

    // Logout Logic
    async function logout() {
        await handleLogout();
        router.push("/auth/login"); // Redirect after logout
        router.refresh(); // Ensure session is cleared
    }

    return (
        <div>
            <button
                className="lg:hidden fixed top-4 left-4 z-50 p-2 bg-blue-500 text-white rounded-md"
                onClick={toggleDrawer}
                aria-label="Toggle Navigation Menu"
            >
                {isOpen ? (<CloseIcon />) : (<MenuIcon />)}
            </button>
            <div className={`fixed inset-y-0 left-0 transform ${isOpen ? "translate-x-0" : "-translate-x-full"} lg:translate-x-0 transition duration-200 ease-in-out z-30 w-64 bg-gray-200 shadow-lg`}>
                <div className="p-6 flex flex-col h-full">
                    <Image src={tanair} alt="DashBoard Image" className="rounded-full h-52 mt-3 mb-4 cursor-pointer object-fill bg-contain" />
                    <nav>
                        <ul className="space-y-2">
                            {NavItems.map((item) => (
                                <li key={item.path}>
                                    <Link href={item.path}
                                        className="flex items-center p-2 rounded-md transition-colors text-black"
                                        onClick={() => setOpen(false)}
                                    >
                                        {item.icon}
                                        <span className="ml-2">{item.name}</span>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </nav>


                    <Tooltip title={'Log Out'}>
                        <button
                            type="button"
                            onClick={logout}
                            className='mt-auto mx-2 py-3 bg-red-600/100 rounded-full text-white'>
                            <LogoutIcon /> Log Out
                        </button>
                    </Tooltip>
                </div>
            </div>

            {isOpen && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-50 z-20 lg:hidden"
                    onClick={toggleDrawer} >
                </div>
            )}
        </div>
    )
}