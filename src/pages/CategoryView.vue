<template>
  <div class="page">
    <h1 class="title">Категории</h1>
    <category-form/>
    <categories-table/>
  </div>
</template>

<script setup lang="ts">
import CategoriesTable from "@/widgets/CategoriesTable/CategoriesTable.vue";
import CategoryForm from "@/widgets/CategoryForm/CategoryForm.vue";
</script>

<style scoped>
.page {
  display: flex;
  flex-direction: column;
  padding: 30px;
  gap: 50px;
}
</style>