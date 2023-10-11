<template>
  <form action="" class="form">
    <template v-for="(input, index) of inputs" :key="input.id">
      <UiInput name="phone" v-model="input.text" @click.prevent.native="createInput" placeholder="Введите номер телефона"/>
      <PrimaryButton v-if="index === 0" title="+"/>
      <danger-button v-else title="X"/>
    </template>
  </form>
</template>

<script setup lang="ts">

import UiInput from "@/shared/ui/UiInput/UiInput.vue";
import PrimaryButton from "@/shared/ui/PrimaryButton/PrimaryButton.vue";
import {ref} from "vue";
import DangerButton from "@/shared/ui/DangerButton/DangerButton.vue";

const inputs = ref ([
  {
    id: new Date().getTime(),
    text: ''
  }
])

const createInput = () => {
  inputs.value.push({
    id: new Date().getTime(),
    text: ''
  })
}

</script>

<style scoped lang="scss">

</style>