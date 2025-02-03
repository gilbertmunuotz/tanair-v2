import { SERVER_URI } from "@/constant/constant";

export async function GetOrders() {

    const URI = `${SERVER_URI}/api/v1/orders`;

    try {
        const response = await fetch(URI!, { method: 'GET' });

        if (!response.ok) {
            throw new Error('Failed to fetch Orders');
        }

        return await response.json();
    } catch (error) {
        console.error('Error fetching Orders:', error);
        return [];
    }
}