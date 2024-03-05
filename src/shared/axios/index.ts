import axios from 'axios';
import router from "@/router";
import {useAuthStore} from "@/features/auth/authStore";

export const instance = axios.create({
    baseURL: 'http://localhost:3000/',
    timeout: 5000,
    withCredentials: true,
});

instance.interceptors.request.use(config => {
    config.headers.Authorization = `Bearer ${localStorage.getItem('accessToken')}`
    return config
})

instance.interceptors.response.use( response => {
    const authStore = useAuthStore()
    authStore.isAuth = true
    return response
}, async (error) => { // обновление refreshToken, если при ответе ошибка о не валидности accessToken
    const originalRequest = error.config
    originalRequest._isRetry = false // булевая переменная чтобы можно было только один раз проверить на валидность refreshToken
    if (error.response.status === 401 && !originalRequest._isRetry) {
        originalRequest._isRetry = true
        try {
            const { data } = await instance.get('auth/refresh')
            localStorage.setItem('accessToken', data.accessToken)
            originalRequest.headers.Authorization = `Bearer ${data.accessToken}`
            return instance(originalRequest) // используем instance как функцию чтобы
        } catch (e) {
            const authStore = useAuthStore()
            authStore.isAuth = false // уже не авторизованы
            return await router.push('/auth')
        }
    }
})