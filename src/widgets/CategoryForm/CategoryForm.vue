<template>
  <CreateCategory/>
  <edit-category :b-open-model="categoriesStore.bEdited"/>
</template>

<script setup lang="ts">
import CreateCategory from "@/features/categories/CreateCategory.vue";
import EditCategory from "@/features/categories/EditCategory.vue";
import {useCategoriesStore} from "@/features/categories/categoriesStore";

const categoriesStore = useCategoriesStore();
</script>

<style scoped lang="scss">

</style>