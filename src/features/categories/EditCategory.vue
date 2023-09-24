<template>
  <form @submit.prevent="categoriesStore.createCategory()">
    <UiInput v-model="categoriesStore.category.title" placeholder="имя категории"/>
    <UiInput v-model="categoriesStore.category.urlImage" placeholder="url картинки"/>
    <PrimaryButton @click="categoriesStore.updateCategory()" title="Редактировать"/>
    <PrimaryButton @click="categoriesStore.cancel()" title="Отмена"/>
  </form>
</template>

<script setup lang="ts">
import UiInput from "@/shared/ui/UiInput/UiInput.vue";
import PrimaryButton from "@/shared/ui/PrimaryButton/PrimaryButton.vue";
import {useCategoriesStore} from "@/features/categories/categoriesStore";

const categoriesStore = useCategoriesStore();
</script>


<style scoped lang="scss">

</style>