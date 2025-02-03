import { SERVER_URI } from "@/constant/constant"

export async function GetUsers() {

    const URI = `${SERVER_URI}/api/v1/users`;

    try {
        const response = await fetch(URI!, { method: 'GET' });

        if (!response.ok) {
            throw new Error('Failed to fetch Users');
        }

        return await response.json();
    } catch (error) {
        console.error('Error fetching Users:', error);
        return [];
    }
}