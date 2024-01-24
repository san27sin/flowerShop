<template>
  <form
      action=""
      class="form"
      @submit.prevent="submitValidateForm()"
  >
    <div class="form__top">
      <UiInput
          class="form__top__input"
          name="name"
          v-model="advantageStore.advantage.title"
          placeholder="Введите название преимущества"
      />
      <UiInput
          class="form__top__input"
          name="url"
          v-model="advantageStore.advantage.url"
          placeholder="Введите url картинки"
      />
      <PrimaryButton
          class="button"
          title="Создать"
          type="submit"
      />
    </div>
    <div class="form__bottom">
      <UiInput
          class="form__bottom__input"
          name="desc"
          v-model="advantageStore.advantage.description"
          placeholder="Введите описание"
      />
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
    {type: Types.url, value: advantageStore.advantage.url},
    {type: Types.desc, value: advantageStore.advantage.description},
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

  &__top {
    display: flex;
    flex-wrap: nowrap;
    justify-content: space-between;

    &__input {
      width: 35%;
      height: 70%;
    }
  }

  &__bottom {
    &__input {
      width: 100%;
      height: 70%;
    }
  }

  .button {
    width: 18%;
    height: 70%;
  }
}
</style>