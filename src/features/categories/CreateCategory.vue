<template>
  <form class="form" @submit.prevent="submitValidateForm()">
    <UiInput class="input_category" v-model="categoriesStore.category.title" placeholder="Введите имя категории"/>
    <UiInput class="input_category" v-model="categoriesStore.category.urlImage" placeholder="Введите url картинки"/>
    <PrimaryButton class="button_primary" title="Создать"/>
  </form>
  <error-list :err-messages="errMessages"/>
</template>

<script setup lang="ts">
import UiInput from "@/shared/ui/UiInput/UiInput.vue"
import PrimaryButton from "@/shared/ui/PrimaryButton/PrimaryButton.vue";
import {useCategoriesStore} from "@/features/categories/categoriesStore";
import {ref} from "vue";
import ErrorList from "@/shared/ui/ErrorList/ErrorList.vue";
import {Types, Validation} from "@/shared/validation";

const categoriesStore = useCategoriesStore();
const errMessages = ref<string[]>([]);
const submitValidateForm = () => {
  errMessages.value.splice(0,errMessages.value.length);
  const validation = new Validation([
    {type: Types.title, value: categoriesStore.category.title},
    {type: Types.url, value: categoriesStore.category.urlImage}
  ]);
  errMessages.value = validation.validate();

  if (!!errMessages.value.length) {
    return;
  }

  categoriesStore.createCategory();
}
</script>

<style scoped>
.form {
  display: flex;
  gap: 23px;
}

.input_category {
  width: 35%;
  height: 70%;
}

.button_primary {
  width: 15%;
  height: 70%;
}
</style>