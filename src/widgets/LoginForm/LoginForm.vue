<template>
  <form class="form">
    <img class="form__logo" src="@/assets/Logo.svg" alt="">
    <UiInput placeholder="email" model-value=""/>
    <UiInput placeholder="password" model-value=""/>
    <PrimaryButton title="Войти"/>
  </form>
</template>

<script setup lang="ts">
import UiInput from "@/shared/ui/UiInput/UiInput.vue"
import PrimaryButton from "@/shared/ui/PrimaryButton/PrimaryButton.vue"
import {useAuthStore} from "@/features/auth/authStore"
import { useRouter, useRoute } from "vue-router"

const authStore = useAuthStore()
const router = useRouter()
const route = useRoute()
</script>

<style lang="scss">
</style>