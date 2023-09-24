<template>
  <CreateCategory v-if="bEdited"/>
  <edit-category v-else/>
</template>

<script setup lang="ts">
import CreateCategory from "@/features/categories/CreateCategory.vue";
import EditCategory from "@/features/categories/EditCategory.vue";
import {useCategoriesStore} from "@/features/categories/categoriesStore";

const { bEdited } = useCategoriesStore();
</script>

<style scoped lang="scss">

</style>