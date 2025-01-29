import { useState } from "react";
import { toast } from "react-toastify";
import Photo from "../public/tanair.png";
import { Tooltip } from "@mui/material";
import HomeIcon from '@mui/icons-material/Home';
import MenuIcon from '@mui/icons-material/Menu';
import GroupIcon from '@mui/icons-material/Group';
import CloseIcon from '@mui/icons-material/Close';
import LogoutIcon from '@mui/icons-material/Logout';


// Path: components/DrawerNav.tsx
const NavItems = [
    { name: "Home", path: "/admin/home", icon: <HomeIcon sx={{ color: 'black', fontSize: 30 }} /> },
    { name: "Users", path: "/admin/users", icon: <GroupIcon sx={{ color: 'black', fontSize: 30 }} /> }
]

export default function DrawerNav() {

    // Manage open and close state of the drawer
    const [isOpen, setOpen] = useState(false);;

    const toggleDrawer = () => setOpen(!isOpen);

    return (
        <div>
            <button
                className="lg:hidden fixed top-4 left-4 z-50 p-2 bg-blue-500 text-white rounded-md"
                onClick={toggleDrawer}
                aria-label="Toggle Navigation Menu"
            >
                {isOpen ? (<CloseIcon />) : (<MenuIcon />)}
            </button>
        </div>
    )
}