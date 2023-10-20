<template>
  <div class="form_phone">
    <h3>Номера телефонов</h3>
    <div class="form_phone_list" v-for="(phone, index) of phoneStore.phones" :key="phone.id">
      <UiInput name="phone" v-model="phone.phone" placeholder="Введите номер телефона"/>
      <PrimaryButton class="button_add button_phones_common" @click="phoneStore.addInputPhone()" v-if="index === 0" title="+"/>
      <danger-button class="button_del button_phones_common" @click="phoneStore.deleteInputPhone(index)" v-else title="x"/>
    </div>
    <error-list :err-messages="errMessages"/>
    <primary-button class="button_save button_phones_common" title="Сохранить" @click="submitFormValidate"/>
  </div>
</template>

<script setup lang="ts">
import UiInput from "@/shared/ui/UiInput/UiInput.vue";
import PrimaryButton from "@/shared/ui/PrimaryButton/PrimaryButton.vue";
import DangerButton from "@/shared/ui/DangerButton/DangerButton.vue";
import {usePhoneStore} from "@/features/phones/phonesStore";
import { ref } from "vue";
import ErrorList from "@/shared/ui/ErrorList/ErrorList.vue";

const phoneStore = usePhoneStore();
const errMessages = ref<string[]>([]);

const submitFormValidate = () => {
  errMessages.value.splice(0,errMessages.value.length);
  const regex = /^((\+7|7|8)+([0-9]){10})$/;
  const incorrectPhone = phoneStore.phones.find(phone => !regex.test(phone.phone));
  if (incorrectPhone) {
    errMessages.value.push('Некорректный номер телефона!');
    return;
  }

  phoneStore.saveDateToDb();
}
</script>

<style scoped lang="scss">
.form_phone_list {
  display: flex;
  gap: 10px;
  margin-bottom: 10px;
  height: 7vh;
}

.button_add {
  height: 100%;
  width: 3vw;
  font-size: 32px;
}

.button_del {
  height: 100%;
  width: 2vw;
  font-size: 28px;
}

.button_save {
  width: 100%;
  height: 6vh;
}

.button_phones_common {
  color: #FFF;
  font-style: normal;
  font-weight: 700;
  line-height: 100%; /* 32px */
}
</style>