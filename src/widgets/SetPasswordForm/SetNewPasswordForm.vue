<template>
  <form class="form" @submit.prevent="submitForm">
    <img class="form__logo" src="@/assets/Logo.svg">
    <UiInput placeholder="password" v-model="authStore.newPassword"/>
    <UiInput placeholder="password" v-model="confirmNewPassword"/>
    <PrimaryButton title="Сбросить пароль" type="submit"/>
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
const confirmNewPassword = ref('')
async function submitForm() {
  if (authStore.newPassword === confirmNewPassword.value) {
    errMessages.value.push('Пароли не совпадают!')
    return
  }

  const response = await authStore.sendNewPassword()
  if (response) {
    errMessages.value.push(response)
    return
  }
  router.push('/login')
}
</script>

<style lang="scss">
</style>