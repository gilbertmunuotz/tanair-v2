import React from 'react';
import Order from '@/components/order/NewOrder';
import DrawerNav from '@/components/DrawerNav';
import { auth } from "@/auth"
import Protected from '@/components/protected';

export default async function page() {

    const session = await auth();

    return (
        <Protected>
            <div>
                <DrawerNav />
                <div className="lg:ml-64 mx-6 my-4">
                    <h1 className="flex justify-end font-serif text-lg">Welcome {session?.user?.email}</h1>

                    <Order />

                </div>
            </div>
        </Protected>
    )
}