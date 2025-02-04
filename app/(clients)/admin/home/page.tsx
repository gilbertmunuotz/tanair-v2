import React from 'react';
// import { GetOrders } from './_action';
import Order from '@/components/NewOrder';
import DrawerNav from '@/components/DrawerNav';

export default async function page() {

    return (
        <div>
            <DrawerNav />
            <div className="lg:ml-64 mx-6 my-4">
                <h1 className="flex justify-end font-serif text-lg">Welcome</h1>

                <Order />

            </div>
        </div>
    )
}