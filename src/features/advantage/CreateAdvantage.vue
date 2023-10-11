<template>
  <form action="" class="form">
    <div class="up">
      <UiInput name="name" v-model="advantageStore.advantage.title" placeholder="Введите название преимущества"/>
      <UiInput name="url" v-model="advantageStore.advantage.urlImage" placeholder="Введите url картинки"/>
      <PrimaryButton title="Создать" @click="advantageStore.addAdvantage()"/>
    </div>
    <div class="down">
      <UiInput class="description" name="desc" v-model="advantageStore.advantage.desc" placeholder="Введите описание"/>
    </div>
  </form>
</template>

<script setup lang="ts">

import UiInput from "@/shared/ui/UiInput/UiInput.vue";
import PrimaryButton from "@/shared/ui/PrimaryButton/PrimaryButton.vue";
import { useAdvantageStore } from "@/features/advantage/advantageStore";

const advantageStore = useAdvantageStore();
</script>

<style scoped lang="scss">
.form {
  display: grid;
  grid-template-rows: 1fr 1fr;
  width: 64vw;
}

.description {
  width: 62vw;
}
</style>