<template>
  <form class="form" @submit.prevent="submitForm">
    <img class="form__logo" src="@/assets/Logo.svg">
    <UiInput placeholder="email" v-model="authStore.loginForm.email"/>
    <UiInput placeholder="password" type="password" v-model="authStore.loginForm.password"/>
    <PrimaryButton title="Войти" type="submit"/>
  </form>
  <ErrorList :err-messages="errMessages"/>
</template>

<script setup lang="ts">
import UiInput from "@/shared/ui/UiInput/UiInput.vue"
import PrimaryButton from "@/shared/ui/PrimaryButton/PrimaryButton.vue"
import { useAuthStore } from "@/features/auth/authStore"
import { useRouter, useRoute } from "vue-router"
import { Types, Validation } from "@/shared/validation"
import { ref } from "vue"
import ErrorList from "@/shared/ui/ErrorList/ErrorList.vue";

const authStore = useAuthStore()
const router = useRouter()
const route = useRoute()
const errMessages = ref<string[]>([])

async function submitForm() {
  errMessages.value.splice(0,errMessages.value.length);

  const validation = new Validation([
    { type: Types.password, value: authStore.loginForm.password },
    { type: Types.email, value: authStore.loginForm.email },
  ])

  errMessages.value = validation.validate();

  console.log(errMessages.value)
  if (errMessages.value.length) {
    return;
  }

  const response = await authStore.login()
  if (response)
    errMessages.value.push(response)
  router.push('/')
}
</script>

<style lang="scss">
</style>