<template>
  <header class="header">
    <div class="container">
      <router-link to="/" class="container__logo">
        <img src="@/assets/Logo.svg" alt="">
      </router-link>
      <secondary-button title="Выйти" class="container__button" @click="authStore.logout()"/>
    </div>
  </header>
</template>

<script setup lang="ts">
import { useAuthStore } from '@/features/auth/authStore'
import SecondaryButton from "@/shared/ui/SecondaryButton/SecondaryButton.vue";

const authStore = useAuthStore()
</script>

<style lang="scss" scoped>
  .header {
    background: linear-gradient(94deg, rgba(4,4,26,1) 0%, rgba(21,22,77,1) 100%);
    padding: 20px 0;
  }

  .container {
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;
    padding: 0 10px; /* Добавляем небольшой отступ от краев */

    &__logo {
      margin-right: auto; /* Логотип прижимается к левому краю */
    }

    &__button {
      margin-left: auto; /* Кнопка прижимается к правому краю */
      margin-right: 5px; /* Небольшой отступ между кнопкой и логотипом */
      width: 100px;
    }
  }
</style>