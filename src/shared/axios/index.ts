import axios from 'axios';
import router from "@/router";
import { useAuthStore } from "@/features/auth/authStore";

export const instance = axios.create({
    baseURL: 'http://localhost:3000/',
    timeout: 5000,
    withCredentials: true,
});

instance.interceptors.request.use((config) => {
    config.headers.Authorization = `Bearer ${localStorage.getItem('accessToken')}`
    return config
})

instance.interceptors.response.use((response) => {
    return response
}, async (error) => {
    const originalRequest = error.config
    if(error.response?.status === 401) { // костыль
        const response = instance.get('/auth/refresh')
            .then((res) => {
                const { accessToken } = res.data
                localStorage.setItem('accessToken', accessToken)
                originalRequest.headers['Authorization'] = `Bearer ${accessToken}`
                return instance(originalRequest)
            })
            .catch(e => { router.push({name: 'auth'}) })
    }
})
