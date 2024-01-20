<template>
  <div class="modal-backdrop">
    <div class="modal">
      <div class="modal-photo">
        <img class="modal-photo-flower" src="@/assets/flowers.svg" alt="flowers">
      </div>
      <div class="modal-form">
        <UiInput class="modal_form_input" v-model="categoriesStore.editedCategory.title" placeholder="имя категории"/>
        <UiInput class="modal_form_input" v-model="categoriesStore.editedCategory.url" placeholder="url картинки"/>
        <div class="buttons">
          <success-button class="buttons_success" @click="submit()" title="Сохранить"/>
          <DangerButton class="buttons_danger" @click="categoriesStore.deleteEditedCategory()" title="Удалить"/>
          <PrimaryButton class="buttons_close" @click="categoriesStore.cancel()" title="Закрыть"/>
        </div>
        <error-list :err-messages="errMessages"/>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import UiInput from "@/shared/ui/UiInput/UiInput.vue";
import PrimaryButton from "@/shared/ui/PrimaryButton/PrimaryButton.vue";
import {useCategoriesStore} from "@/features/categories/categoriesStore";
import DangerButton from "@/shared/ui/DangerButton/DangerButton.vue";
import SuccessButton from "@/shared/ui/SuccessButton/SuccessButton.vue";
import ErrorList from "@/shared/ui/ErrorList/ErrorList.vue";
import {ref} from "vue";
import {Types, Validation } from "@/shared/validation";

const categoriesStore = useCategoriesStore();
const errMessages = ref<string[]>([]);

const submit = () => {
  errMessages.value.splice(0,errMessages.value.length);
  const validation = new Validation([
    {type: Types.title, value: categoriesStore.editedCategory.title},
    {type: Types.url, value: categoriesStore.editedCategory.url}
  ]);
  errMessages.value = validation.validate();

  if (!!errMessages.value.length) {
    return;
  }

  categoriesStore.updateCategory();
}
</script>

<style scoped lang="scss">
.modal-backdrop {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.3);
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

.modal-photo {
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
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

.modal-form {
  display: flex;
  gap: 5%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.modal_form_input {
  width: 90%;
  height: 20%;
}

.buttons {
  display: flex;
  gap: 5%;
  justify-content: flex-end;
  width: 90%;
}

@media (max-width: 1024px) {
  .modal {
    width: 70vw;
  }
}
</style>