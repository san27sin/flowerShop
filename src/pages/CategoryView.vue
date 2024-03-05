<template>
  <div class="page">
    <h1 class="title">Категории</h1>
    <preloader>
      <CategoriesTable/>
    </preloader>
    <category-form/>
    <popup>
      <edit-category/>
    </popup>
  </div>
</template>

<script setup lang="ts">
import CategoriesTable from "@/widgets/CategoriesTable/CategoriesTable.vue";
import CategoryForm from "@/widgets/CategoryForm/CategoryForm.vue";
import EditCategory from "@/features/categories/EditCategory.vue";
import Popup from "@/widgets/Popup/Popup.vue";

import { useCategoriesStore } from "@/features/categories/categoriesStore";
import Preloader from "@/features/preloader/Preloader.vue";
import { delay } from "@/shared/helpers"

const categoriesStore = useCategoriesStore();
await delay()
await categoriesStore.getAll();
</script>

<style scoped>
@import '@/shared/css/index.css';
</style>