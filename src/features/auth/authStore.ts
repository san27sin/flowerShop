import { defineStore } from 'pinia'
import { reactive, ref } from 'vue'
import { instance } from '@/shared/axios'
import { useRouter } from "vue-router"

export const useAuthStore = defineStore('auth', () => {
	const isAuth = ref(false)
	const router = useRouter()
	const message = ref('')
	const authorizationForm = reactive({
		email: '',
		nickname: '',
		password: '',
	})
	const loginForm = reactive({
		email: '',
		password: ''
	})
	const resetPasswordForm = reactive({
		email: '',
	})

	const newPassword = ref('')
	
	async function register() {
		try {
			const { data } = await instance.post('auth/register', authorizationForm)
			localStorage.setItem('accessToken', JSON.stringify(data.accessToken))
			await router.push('/')
		} catch (e) {
			console.log(e)
		}
	}
	
	async function login(): Promise<string | undefined> {
		const response = await instance.post('/auth/login', {...loginForm})
		if (response.status === 401)
			return 'Пароль введен неверный!'
		setLocalStorage(response.data.accessToken)
		isAuth.value = true
	}

	async function resetPassword(): Promise<string> {
		try {
			const response = await instance.post(`/auth/set-password/${resetPasswordForm.email}`)
			return response.data
		} catch (e) {
			return 'Все сломали'
		}
	}

	async function activateUser(key: string) {
		try {
			await instance.patch(`/auth/activate/${key}`)
			message.value = 'Активация прошла успешна, можете войти в свой ЛК'
		} catch (e) {
			message.value = 'Активация не удалась'
		}
	}

	async function logout() {
		isAuth.value = false // сделать запрос на сервес чтобы куки обнулились (рефреш токен)
		await instance.get(`/auth/logout`)
		localStorage.removeItem('accessToken')
		await router.push('/auth')
	}
	
	function setLocalStorage(token: string) {
		localStorage.setItem('accessToken', token)
	}

	function sendNewPassword() {
		// отправить новый пароль на бэк
		return 'привет'
	}

	async function checkAuth() {
		const response = await instance.get('auth/check')
		isAuth.value = response.status <= 300;
	}
	
	return {
		isAuth,
		authorizationForm,
		loginForm,
		register,
		login,
		activateUser,
		message,
		logout,
		resetPasswordForm,
		resetPassword,
		newPassword,
		sendNewPassword,
		checkAuth,
	}
})