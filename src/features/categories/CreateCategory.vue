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

const categoriesStore = useCategoriesStore();
const errMessages = ref<string[]>([]);
const submitValidateForm = () => {
  errMessages.value.splice(0,errMessages.value.length);
  if (categoriesStore.category.title.length <= 2) {
    errMessages.value.push("Название содержит меньше 2 символов!");
  } else if (categoriesStore.category.title.length > 15) {
    errMessages.value.push("Название содержит больше 15 символов!");
  }

  // Паттерн для проверки ссылки
  const linkPattern = /^(http|https):\/\/([\w-]+(\.[\w-]+)+)(\/[\w-./?%&=]*)?$/;
  if (!linkPattern.test(categoriesStore.category.urlImage)) {
    errMessages.value.push("Некорректная ссылка!")
  }

  if (errMessages.value.length != 0) {
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