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
      <button @click="categoriesStore.deleteCategory(index)">
        <img src="@/assets/deleteButton.svg" alt="удалить">
      </button>
      <button class="delete" @click="categoriesStore.editCategory(index)">Х</button>
    </tr>
    </tbody>
  </table>
</template>

<script setup lang="ts">
import {useCategoriesStore} from "@/features/categories/categoriesStore";

const categoriesStore = useCategoriesStore();
</script>

<style scoped lang="scss">
.delete {
  border-radius: 12px;
  background: #E00;

}
</style>