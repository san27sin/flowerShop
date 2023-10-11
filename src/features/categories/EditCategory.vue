<template>
  <div class="modal-backdrop">
    <div class="modal">
      <div class="modal-photo">
        <img class="modal-photo-flower" src="@/assets/flowers.svg" alt="flowers">
      </div>
      <div class="modal-form">
        <UiInput v-model="categoriesStore.category.title" placeholder="имя категории"/>
        <UiInput v-model="categoriesStore.category.urlImage" placeholder="url картинки"/>
        <div class="buttons">
          <success-button class="success-button" @click="categoriesStore.updateCategory()" title="Сохранить"/>
          <DangerButton class="danger-button" @click="categoriesStore.deleteEditedCategory()" title="Удалить"/>
          <PrimaryButton class="primary-button" @click="categoriesStore.cancel()" title="Закрыть"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import UiInput from "@/shared/ui/UiInput/UiInput.vue";
import PrimaryButton from "@/shared/ui/PrimaryButton/PrimaryButton.vue";
import {useCategoriesStore} from "@/features/categories/categoriesStore";
import {ref} from "vue";
import DangerButton from "@/shared/ui/DangerButton/DangerButton.vue";
import SuccessButton from "@/shared/ui/SuccessButton/SuccessButton.vue";
interface IPropse {
  bOpenModel: boolean,
}

const test = ref(false);
const props = defineProps<IPropse>();
const categoriesStore = useCategoriesStore();
</script>

<style scoped lang="scss">
.success-button {
  width: 133px;
  height: 46px;
}

.danger-button {
  width: 133px;
  height: 46px;
}

.primary-button {
  width: 112px;
  height: 46px;
  font-size: 19px;
}

.modal-photo {
  display: flex;
  overflow: hidden;
}

.modal-form {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.modal-backdrop {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.3);
}

.modal-photo-flower {
  display: flex;
  align-items: center;
  width: 15vw;
  height: auto;
  box-shadow: 1px 1px 10px #000;
  margin: 28px;
  border: 2px solid;
  border-radius: 12px;
}

.modal {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 26px;
  background: #FFF;
  width: 50vw;
  height: 50vh;
  flex-shrink: 0;
  overflow-x: auto;
  display: grid;
  grid-template-columns: 1fr 2fr;
  box-shadow: 2px 2px 20px 1px;
}

</style>