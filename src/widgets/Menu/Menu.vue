<template>
  <nav class="menu" v-for="name in buttonNames" :key="name">
    <SecondaryButton :title="name"/>
  </nav>
</template>

<script setup lang="ts">
import SecondaryButton from "@/shared/ui/SecondaryButton/SecondaryButton.vue";

const buttonNames = [
    "Категории",
    "Преимущества",
    "Контакты",
    "Подписки",
    "Новости",
    "Заявки",
    "Вопросы/ответы",
    "Клиенты",
    "Отзывы",
    "Заказы",
    "Черный список"
]
</script>

<style scoped lang="scss">
  .menu {
    display: block;
    background: linear-gradient(94deg, rgba(4,4,26,1) 0%, rgba(21,22,77,1) 100%);
  }
</style>