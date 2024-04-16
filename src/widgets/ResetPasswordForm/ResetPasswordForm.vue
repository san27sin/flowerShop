<template>
  <form class="form" @submit.prevent="submitForm">
    <img class="form__logo" src="@/assets/Logo.svg">
    <UiInput placeholder="email" v-model="authStore.resetPasswordForm.email"/>
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

async function submitForm() {
  errMessages.value.splice(0,errMessages.value.length);

  const validation = new Validation([{ type: Types.email, value: authStore.resetPasswordForm.email }])

  errMessages.value = validation.validate();

  console.log(errMessages.value)
  if (errMessages.value.length) {
    return;
  }

  const response = await authStore.resetPassword()
  if (response)
    errMessages.value.push(response)
  router.push('/login')
}
</script>

<style lang="scss">
</style>