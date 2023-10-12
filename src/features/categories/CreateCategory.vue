<template>
  <form class="form" @submit.prevent="categoriesStore.createCategory()">
    <UiInput class="input_category" v-model="categoriesStore.category.title" placeholder="Введите имя категории"/>
    <UiInput class="input_category" v-model="categoriesStore.category.urlImage" placeholder="Введите url картинки"/>
    <PrimaryButton class="button_primary" title="Создать"/>
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

.input_category {
  width: 35%;
  height: 70%;
}

.button_primary {
  width: 15%;
  height: 70%;
}
</style>