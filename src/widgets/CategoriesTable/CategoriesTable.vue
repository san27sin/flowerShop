<template>
  <table class="table">
    <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Название категории</th>
    </tr>
    </thead>
    <transition-group name="list" tag="tbody">
      <tr v-for="(category, index) of categoriesStore.categories" :key="category.title" class="table__tr">
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
    </transition-group>
  </table>
</template>

<script setup lang="ts">
import { useCategoriesStore } from "@/features/categories/categoriesStore";

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

.table__tr {
  animation-name: showTableRow;
  animation-duration: 1s;
}

// анимация в css
@keyframes showTableRow {
  0% {
    opacity: 0; // прозрачность
    transform: translateX(-20%);
  }

  100% {
    opacity: 1;
    transform: translateX(0);
  }
}

// анимация в vue
.list-enter-active, .list-leave-active {
  transition: all 1s;
}

.list-enter-from, .list-leave-to {
  opacity: 0; // прозрачность
  transform: translateX(-20%);
}

.list-enter-to, .list-leave-from  {
  opacity: 1; // прозрачность
  transform: translateX(0);
}
</style>