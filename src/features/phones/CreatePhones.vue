<template>
  <div class="contacts">
    <h3>Номера телефонов</h3>
    <form action="" class="form">
      <template class="form_phone_list" v-for="(phone, index) of phoneStore.phones" :key="phone.id">
        <UiInput name="phone" v-model="phone.phone" placeholder="Введите номер телефона"/>
        <PrimaryButton class="button_add button_phones_common" @click="phoneStore.addInputPhone()" v-if="index === 0" title="+"/>
        <danger-button class="button_del button_phones_common" @click="phoneStore.deleteInputPhone(index)" v-else title="x"/>
      </template>
      <error-list :err-messages="errMessages"/>
      <primary-button class="button_save button_phones_common" title="Сохранить" @click="submitFormValidate"/>
    </form>
  </div>
</template>

<script setup lang="ts">
import UiInput from "@/shared/ui/UiInput/UiInput.vue";
import PrimaryButton from "@/shared/ui/PrimaryButton/PrimaryButton.vue";
import DangerButton from "@/shared/ui/DangerButton/DangerButton.vue";
import {usePhoneStore} from "@/features/phones/phonesStore";
import {ref} from "vue";
import ErrorList from "@/shared/ui/ErrorList/ErrorList.vue";
import {Types, Validation} from "@/shared/validation";

const phoneStore = usePhoneStore();
const errMessages = ref<string[]>([]);

const submitFormValidate = () => {
  errMessages.value.splice(0,errMessages.value.length);
  phoneStore.phones.forEach(phone => {
    const validation = new Validation([
      {type: Types.phone, value: phone.phone}
    ])
    const errors = validation.validate();
    if (!!errors.length) {
      errMessages.value = errors;
      return;
    }
  })

  if (!!errMessages.value.length) return;
  phoneStore.saveDateToDb();
}
</script>

<style scoped lang="scss">
.contacts {
  display: block;
}

.form {
  display: grid;
  grid-template-columns: 5fr 1fr;
  gap: 15px;
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