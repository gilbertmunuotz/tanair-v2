import React from 'react';
// import { GetUsers } from './_action';
import DrawerNav from '@/components/DrawerNav';
import User from '@/components/order/NewUser';


export default async function page() {

    // const users = await GetUsers();
    // console.log("List of Users:", users);

    return (
        <div>
            <DrawerNav />
            <div className="lg:ml-64 mx-6 my-4">
                <h1 className="flex justify-end font-serif text-lg">Welcome</h1>

                <User />
            </div>
        </div>
    )
}