import React from 'react';
import { GetOrders } from './_action';
import { Tooltip } from '@mui/material';
import DrawerNav from '@/components/DrawerNav';
import AddIcon from '@mui/icons-material/Add';


export default async function page() {

    const orders = await GetOrders();
    console.log("List of Orders:", orders);


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

                <div>Admin Home</div>
            </div>
        </div>
    )
}