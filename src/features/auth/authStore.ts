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
	
	async function register() {
			try {
				const { data } = await instance.post('auth/register', authorizationForm)
				localStorage.setItem('accessToken', JSON.stringify(data.accessToken))
				await router.push('/')
			} catch (e) {
				console.log(e)
			}
	}
	
	async function login() {
		try {
			const { data } = await instance.post('/auth/login', {...loginForm})
			setLocalStorage(data.accessToken)
		} catch (e) {
			console.log(e)
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
	
	function setLocalStorage(token: string) {
		localStorage.setItem('accessToken', token)
	}
	
	return {
		isAuth,
		authorizationForm,
		loginForm,
		register,
		login,
		activateUser,
		message
	}
})