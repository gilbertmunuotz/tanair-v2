import React from 'react';
// import { GetUsers } from './_action';
import { Tooltip } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import DrawerNav from '@/components/DrawerNav';


export default async function page() {

    // const users = await GetUsers();
    // console.log("List of Users:", users);

    return (
        <div>
            <DrawerNav />
            <div className="lg:ml-64 mx-6 my-4">
                <h1 className="flex justify-end font-serif text-lg">Welcome</h1>

                <div className="flex justify-end mt-4">
                    <button className="rounded-full bg-indigo-600 px-5 py-1.5 ml-4">
                        <Tooltip title={'New Order'}>
                            <div className="flex items-center space-x-2">
                                <AddIcon className="text-black" />
                                <h2 className="text-base text-black">New</h2>
                            </div>
                        </Tooltip>
                    </button>
                </div>

                <div>Admin users</div>
            </div>
        </div>
    )
}