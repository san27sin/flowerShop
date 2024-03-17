<template>
  <form class="form" @submit.prevent="submitForm">
    <img class="form__logo" src="@/assets/Logo.svg">
    <UiInput placeholder="email" v-model="authStore.loginForm.email"/>
    <UiInput placeholder="password" v-model="authStore.loginForm.password"/>
    <PrimaryButton title="Войти" type="submit"/>
  </form>
</template>

<script setup lang="ts">
import UiInput from "@/shared/ui/UiInput/UiInput.vue"
import PrimaryButton from "@/shared/ui/PrimaryButton/PrimaryButton.vue"
import { useAuthStore } from "@/features/auth/authStore"
import { useRouter, useRoute } from "vue-router"
import { Types, Validation } from "@/shared/validation"
import { ref } from "vue"

const authStore = useAuthStore()
const router = useRouter()
const route = useRoute()
const errMessages = ref<string[]>([])

function submitForm() {
  console.log('debbuger')
  debugger 
  errMessages.value.splice(0,errMessages.value.length);

  // const validation = new Validation([
  //   { type: Types.password, value: authStore.loginForm.password },
  //   { type: Types.email, value: authStore.loginForm.email },
  // ])
  //
  // errMessages.value = validation.validate();
  //
  // if (!!errMessages.value.length) {
  //   return;
  // }

  authStore.login()
  router.push('/')
}
</script>

<style lang="scss">
</style>