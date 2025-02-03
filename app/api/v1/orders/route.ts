import orderModel from "@/models/order";
import { connectToMongo } from "@/config/dbconfig";
import { NextRequest, NextResponse } from 'next/server';

// (DESC) Get Route Handler(All Orders)
export async function GET() {

    try {

        // Connect To MongoDB
        await connectToMongo()

        // Query Orders from the MongoDD Collection
        const orders = await orderModel.find();

        // Return a response with the orders
        return NextResponse.json(orders, { status: 200 });
    } catch (error) {
        console.error("Error getting orders:", error);

        // Return a 500 error if something goes wrong
        return NextResponse.json({ message: "Error Getting Orders" }, { status: 500 });
    }
}