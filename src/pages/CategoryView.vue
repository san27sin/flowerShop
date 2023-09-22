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

</style>