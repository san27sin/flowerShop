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
      <td>
        <div class="buttons">
          <button class="edit" @click="categoriesStore.editCategory(index)">
            <img src="@/assets/deleteButton.svg" alt="">
          </button>
          <button class="delete" @click="categoriesStore.deleteCategory(index)">Х</button>
        </div>
      </td>
    </tr>
    </tbody>
  </table>
</template>

<script setup lang="ts">
import {useCategoriesStore} from "@/features/categories/categoriesStore";

const categoriesStore = useCategoriesStore();
</script>

<style scoped lang="scss">
.edit {
  width: 37px;
  height: 37px;
  border: none;
  background: #FFFFFF;
}

.delete {
  width: 37px;
  height: 37px;
  border: none;
  border-radius: 12px;
  background: #E00;
}

.align__right {
  text-align: right;
}
.buttons {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 20px;
}
</style>