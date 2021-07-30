import axios from "axios";
import { getSession } from "next-auth/client";


const api = axios.create({
    baseURL:process.env.API_URL
})

api.interceptors.request.use(async (config)=>{
    const session = await getSession();
    config.headers.Authorization = `Bearer ${session.accessToken}`;
     return config;
})

export default api;