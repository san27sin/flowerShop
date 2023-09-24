<template>
  <table class="table">
    <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Название категории</th>
    </tr>
    </thead>
    <tbody>
    <tr v-for="(category, index) of categoriesStore.categories" :key="category.title">
      <th scope="row">{{ index + 1 }}</th>
      <td>{{category.title}}</td>
      <button @click="categoriesStore.deleteCategory(index)">Удалить</button>
      <button @click="categoriesStore.editCategory(index)">Редактировать</button>
    </tr>
    </tbody>
  </table>
</template>

<script setup lang="ts">
import {useCategoriesStore} from "@/features/categories/categoriesStore";

const categoriesStore = useCategoriesStore();
</script>

<style scoped lang="scss">

</style>