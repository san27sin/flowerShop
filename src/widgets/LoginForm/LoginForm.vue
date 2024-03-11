<template>
  <form class="form" @submit.prevent="submitForm">
    <img class="form__logo" src="@/assets/Logo.svg" alt="">
    <UiInput placeholder="email" model-value=""/>
    <UiInput placeholder="password" model-value=""/>
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
  errMessages.value.splice(0,errMessages.value.length);

  const validation = new Validation([
    { type: Types.password, value: authStore.authorizationForm.password },
    { type: Types.email, value: authStore.authorizationForm.email },
  ])

  errMessages.value = validation.validate();

  if (!!errMessages.value.length) {
    return;
  }

  authStore.login()
}
</script>

<style lang="scss">
</style>