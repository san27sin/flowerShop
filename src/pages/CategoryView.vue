<template>
  <div class="page">
    <h1 class="title">Категории</h1>
    <category-form/>
    <categories-table/>
    <popup>
      <edit-category/>
    </popup>
  </div>
</template>

<script setup lang="ts">
import CategoriesTable from "@/widgets/CategoriesTable/CategoriesTable.vue";
import CategoryForm from "@/widgets/CategoryForm/CategoryForm.vue";
import TogglePopup from "@/features/popup/TogglePopup.vue";
import EditCategory from "@/features/categories/EditCategory.vue";
import Popup from "@/widgets/Popup/Popup.vue";
</script>

<style scoped>
@import '@/shared/css/index.css';
</style>