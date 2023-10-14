<template>
  <div class="form_phone">
    <h3>Номера телефонов</h3>
    <div class="form_phone_list" v-for="(input, index) of inputs" :key="input.id">
      <UiInput name="phone" v-model="input.text" @click.prevent.native="createInput" placeholder="Введите номер телефона"/>
      <PrimaryButton class="button_add" v-if="index === 0" title="+"/>
      <danger-button class="button_del" v-else title="x"/>
    </div>
  </div>
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
.form_phone {

}

.form_phone_list {
  display: flex;
  gap: 10px;
  margin: 10px;
  height: 7vh;
}

.button_add {
  width: 3vw;
  font-size: 32px;
}

.button_del {
  width: 2vw;
  height: 6vh;
  font-size: 28px;
}
</style>