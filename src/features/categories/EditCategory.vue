<template>
  <div class="modal-backdrop">
    <div class="modal">
      <div class="flowers">
        <img src="@/assets/flowers.svg" alt="flowers">
      </div>
      <UiInput v-model="categoriesStore.category.title" placeholder="имя категории"/>
      <UiInput v-model="categoriesStore.category.urlImage" placeholder="url картинки"/>
      <PrimaryButton @click="categoriesStore.updateCategory()" title="Редактировать"/>
      <PrimaryButton @click="categoriesStore.cancel()" title="Отмена"/>
    </div>
  </div>
</template>

<script setup lang="ts">
import UiInput from "@/shared/ui/UiInput/UiInput.vue";
import PrimaryButton from "@/shared/ui/PrimaryButton/PrimaryButton.vue";
import {useCategoriesStore} from "@/features/categories/categoriesStore";
import {ref} from "vue";
interface IPropse {
  bOpenModel: boolean,
}
const test = ref(false);
const props = defineProps<IPropse>();
const categoriesStore = useCategoriesStore();
</script>

<style scoped lang="scss">
.flowers {
  display: flex;
  width: 282px;
  height: 314px;
  padding: 33px 17px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  border-radius: 21px;
  border: 1px solid #030319;
  box-shadow: 2px 2px 5px 0px #000;
}

.modal-backdrop {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.3);
}

.modal {
  overflow-x: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 300px;
  width: 400px;
  background: #FFFFFF;
  box-shadow: 2px 2px 20px 1px;
}
</style>