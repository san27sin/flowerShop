<template>
  <div class="social_network">
    <h3>Ссылки соцсетей</h3>
    <form class="social_network__form">
      <template v-for="(socialNetwork, index) in socialNetworkStore.socialNetworks" :key="socialNetwork.id">
        <UiInput
            name="picture"
            v-model="socialNetwork.urlPicture"
            placeholder="Введите url картинки"
        />
        <UiInput
            name="social"
            v-model="socialNetwork.urlSocialNet"
            placeholder="Введите url соцсети"
        />
        <primary-button
            class="button button__add"
            type="button"
            @click="socialNetworkStore.createInput()"
            v-if="index === 0"
            title="+"/>
        <DangerButton
            class="button button__del"
            type="button"
            @click="socialNetworkStore.deleteInput(index)"
            v-else title="x"/>
      </template>
      <error-list :err-messages="errMessages"/>
      <primary-button
          class="button button__save"
          type="submit"
          @click="submitFormValidate"
          title="Сохранить"
      />
    </form>
  </div>
</template>

<script setup lang="ts">
import UiInput from "@/shared/ui/UiInput/UiInput.vue";
import PrimaryButton from "@/shared/ui/PrimaryButton/PrimaryButton.vue";
import DangerButton from "@/shared/ui/DangerButton/DangerButton.vue";
import { useSocialNetworkStore } from "@/features/socialNetwork/socialNetworkStore";
import { ref } from "vue";
import ErrorList from "@/shared/ui/ErrorList/ErrorList.vue";
import { Validation, Types } from "@/shared/validation";

const socialNetworkStore = useSocialNetworkStore();
socialNetworkStore.getAll()
const errMessages = ref<string[]>([]);
const submitFormValidate = () => {
  errMessages.value.splice(0,errMessages.value.length);

  socialNetworkStore.socialNetworks.forEach(net => {
    const validation = new Validation([
      {type: Types.url, value: net.urlPicture},
      {type: Types.url, value: net.urlSocialNet}
    ]);
    const error = validation.validate();
    if (!!error.length) {
      errMessages.value.push(error[0]);
      return;
    }
  })

  if (errMessages.value.length) return;
  socialNetworkStore.saveDateAndSendToDb();
}
</script>

<style scoped lang="scss">
.social_network {
  &__form {
    display: grid;
    gap: 10px;
    grid-template-columns: 1fr 1fr 0.2fr;
    grid-auto-rows: 5vh;
    margin-bottom: 10px;
  }

  .button {
    color: #FFF;
    font-style: normal;
    font-weight: 700;
    line-height: 100%; /* 32px */

    &__add {
      height: 100%;
      width: 3vw;
      font-size: 32px;
    }

    &__del {
      height: 100%;
      width: 2vw;
      font-size: 28px;
    }

    &__save {
      grid-column: 1/3;
    }
  }
}
</style>