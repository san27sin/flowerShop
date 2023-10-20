<template>
  <form action="" class="form" @submit.prevent="submitValidateForm()">
    <div class="up">
      <UiInput class="input_advance_up" name="name" v-model="advantageStore.advantage.title" placeholder="Введите название преимущества"/>
      <UiInput class="input_advance_up" name="url" v-model="advantageStore.advantage.urlImage" placeholder="Введите url картинки"/>
      <PrimaryButton class="button_create" title="Создать"/>
    </div>
    <div class="down">
      <UiInput class="input_advance_down" name="desc" v-model="advantageStore.advantage.desc" placeholder="Введите описание"/>
    </div>
  </form>
  <ErrorList :err-messages="errMessages"/>
</template>

<script setup lang="ts">

import UiInput from "@/shared/ui/UiInput/UiInput.vue";
import PrimaryButton from "@/shared/ui/PrimaryButton/PrimaryButton.vue";
import { useAdvantageStore } from "@/features/advantage/advantagiesStore";
import { ref } from "vue";
import ErrorList from "@/shared/ui/ErrorList/ErrorList.vue";

const advantageStore = useAdvantageStore();
const errMessages = ref<string[]>([]);
const submitValidateForm = () => {
  errMessages.value.splice(0,errMessages.value.length);
  if (advantageStore.advantage.title.length <= 2) {
    errMessages.value.push("Название содержит меньше 2 символов!");
  } else if (advantageStore.advantage.title.length > 15) {
    errMessages.value.push("Название содержит больше 15 символов!");
  }

  if (advantageStore.advantage.desc.length < 10) {
    errMessages.value.push("Описание содержит меньше 10 символов!");
  } else if (advantageStore.advantage.desc.length > 200) {
    errMessages.value.push("Описание содержит больше 200 символов!");
  }

  // Паттерн для проверки ссылки
  const linkPattern = /^(http|https):\/\/([\w-]+(\.[\w-]+)+)(\/[\w-./?%&=]*)?$/;
  if (!linkPattern.test(advantageStore.advantage.urlImage)) {
    errMessages.value.push("Некорректная ссылка!")
  }

  if (errMessages.value.length != 0) {
    return;
  }

  advantageStore.addAdvantage()
}
</script>

<style scoped lang="scss">
.form {
  display: grid;
  grid-template-rows: 1fr 1fr;
  width: 64vw;
}

.up {
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-between;
}

.button_create {
  width: 18%;
  height: 70%;
}

.input_advance_up {
  width: 35%;
  height: 70%;
}

.input_advance_down {
  width: 100%;
  height: 70%;
}
</style>