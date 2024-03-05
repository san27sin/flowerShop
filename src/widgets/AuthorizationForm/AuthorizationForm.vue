<template>
  <form
    class="form"
    @submit.prevent="submitForm"
  >
    <img src="@/assets/Logo.svg" alt="">
    <UiInput placeholder="email"  v-model="authStore.authorizationForm.email"/>
    <UiInput placeholder="nickname"  v-model="authStore.authorizationForm.nickname"/>
    <UiInput placeholder="password"  v-model="authStore.authorizationForm.password"/>
    <PrimaryButton title="Зарегистрироваться"/>
  </form>
  <ErrorList :err-messages="errMessages"/>
</template>

<script setup lang="ts">
import UiInput from "@/shared/ui/UiInput/UiInput.vue"
import PrimaryButton from "@/shared/ui/PrimaryButton/PrimaryButton.vue"
import {useAuthStore} from '@/features/auth/authStore'
import {ref} from "vue"
import {Types, Validation} from "@/shared/validation"
import ErrorList from "@/shared/ui/ErrorList/ErrorList.vue"

const authStore = useAuthStore()
const errMessages = ref<string[]>([])

function submitForm() {
  errMessages.value.splice(0,errMessages.value.length);

  const validation = new Validation([
    { type: Types.password, value: authStore.authorizationForm.password },
    { type: Types.email, value: authStore.authorizationForm.email },
    { type: Types.nickname, value: authStore.authorizationForm.nickname }
  ])

  errMessages.value = validation.validate();

  if (!!errMessages.value.length) {
    return;
  }

  authStore.register()
}
</script>

<style lang="scss">
</style>