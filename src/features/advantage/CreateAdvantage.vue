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
import {useAdvantageStore} from "@/features/advantage/advantagiesStore";
import {ref} from "vue";
import ErrorList from "@/shared/ui/ErrorList/ErrorList.vue";
import {Types, Validation} from "@/shared/validation";

const advantageStore = useAdvantageStore();
const errMessages = ref<string[]>([]);
const submitValidateForm = () => {
  errMessages.value.splice(0,errMessages.value.length);
  const validation = new Validation([
    {type: Types.title, value: advantageStore.advantage.title},
    {type: Types.url, value: advantageStore.advantage.urlImage},
    {type: Types.desc, value: advantageStore.advantage.desc},
  ]);

  errMessages.value = validation.validate();

  if (!!errMessages.value.length) {
    return;
  }

  advantageStore.addAdvantage();
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