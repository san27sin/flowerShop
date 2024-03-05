<template>
  <form
    class="form"
    @submit.prevent="submitForm"
  >
    <img class="form__logo" src="@/assets/Logo.svg">
    <UiInput placeholder="email" v-model="authStore.loginForm.email"/>
    <UiInput placeholder="password" v-model="authStore.loginForm.password"/>
    <PrimaryButton title="Войти"/>
  </form>
  <ErrorList :err-messages="errMessages"/>
</template>

<script setup lang="ts">
import UiInput from "@/shared/ui/UiInput/UiInput.vue"
import PrimaryButton from "@/shared/ui/PrimaryButton/PrimaryButton.vue"
import {useAuthStore} from "@/features/auth/authStore"
import { useRouter } from "vue-router"
import ErrorList from "@/shared/ui/ErrorList/ErrorList.vue"
import {ref} from "vue"
import {Types, Validation} from "@/shared/validation"

const authStore = useAuthStore()
const router = useRouter()

const errMessages = ref<string[]>([])

function submitForm() {
  errMessages.value.splice(0,errMessages.value.length);

  const validation = new Validation([
    { type: Types.password, value: authStore.loginForm.password },
    { type: Types.email, value: authStore.loginForm.email },
  ])

  errMessages.value = validation.validate();

  if (!!errMessages.value.length)
    return

  authStore.register()
  router.push('/') // перекидывает на страницу
}
</script>

<style lang="scss">
</style>