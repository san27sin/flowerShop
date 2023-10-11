<template>
  <form class="form" @submit.prevent="categoriesStore.createCategory()">
    <UiInput v-model="categoriesStore.category.title" placeholder="Введите имя категории"/>
    <UiInput v-model="categoriesStore.category.urlImage" placeholder="Введите url картинки"/>
    <PrimaryButton title="Создать"/>
  </form>
</template>

<script setup lang="ts">
import UiInput from "@/shared/ui/UiInput/UiInput.vue"
import PrimaryButton from "@/shared/ui/PrimaryButton/PrimaryButton.vue";
import {useCategoriesStore} from "@/features/categories/categoriesStore";

const categoriesStore = useCategoriesStore();
</script>

<style scoped>
.form {
  display: flex;
  gap: 23px;
}
</style>