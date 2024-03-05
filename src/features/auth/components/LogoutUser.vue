<template>
  <secondary-button class="button_exit" title="Выйти" @click="onClick"/>
</template>

<script setup lang="ts">
import SecondaryButton from "@/shared/ui/SecondaryButton/SecondaryButton.vue";
import {useAuthStore} from "@/features/auth/authStore";
import {useRouter} from "vue-router"

const router = useRouter()
const authStore = useAuthStore()

function onClick() {
  authStore.logoutUser()
  router.push('/auth')
}
</script>

<style scoped lang="scss">

</style>