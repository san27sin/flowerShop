<template>
  <div v-if="authStore.isAuth" class="app">
    <Header class="app__header"/>
    <Menu/>
    <RouterView class="app__content"/>
  </div>
  <div v-else class="login">
    <RouterView class="app__content"/>
  </div>
</template>

<script setup lang="ts">
import Header from '@/widgets/Header/Header.vue'
import Menu from '@/widgets/Menu/Menu.vue'
import { useAuthStore } from '@/features/auth/authStore'
import AuthView from '@/pages/AuthView.vue'
import SetPasswordView from "@/pages/SetPasswordView.vue";
import SetNewPasswordView from "@/pages/[token].vue";

const authStore = useAuthStore()
const getTitle = (): string => {
  return 'title';
}
</script>

<style lang="scss" scoped>
@import '../src/shared/css/index.css';
.app {
  min-height: 100vh;
  display: grid;
  grid-template-columns: 1fr 10fr;
  grid-template-rows: max-content 5fr;

  &__header {
    grid-column-start: 1;
    grid-column-end: 3;
  }

  &__content {
    padding: 20px;
  }
}

.login {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  min-height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
}
</style>
