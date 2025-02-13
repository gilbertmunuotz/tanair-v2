// This file Intercepts all API requests including the Bearer token.
import axios from "axios";
import { auth } from "@/auth";
import { BACKEND_URI } from "@/constant/constant";

const axiosInstance = axios.create({
    baseURL: `${BACKEND_URI}`,
    headers: {
        "Content-Type": "application/json",
    }
});

axiosInstance.interceptors.request.use(async (config) => {
    const session = await auth();
    if (session?.accessToken) {
        config.headers.Authorization = `Bearer ${session.accessToken}`;
    }
    return config;
});

export default axiosInstance;