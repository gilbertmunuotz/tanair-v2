import { connectToMongo } from "@/config/dbconfig";
import { NextRequest, NextResponse } from 'next/server';
import userModel from "@/models/user";

// (DESC) Get Route Handler(All Users)
export async function GET() {

    try {
        // Connect To MongoDB
        await connectToMongo()

        // Query users from the MongoDD Collection
        const users = await userModel.find();

        // Return a response with the users
        return NextResponse.json(users, { status: 200 });
    } catch (error) {
        console.error("Error getting users:", error);

        // Return a 500 error if something goes wrong
        return NextResponse.json({ message: "Error Getting Users" }, { status: 500 });
    }
}