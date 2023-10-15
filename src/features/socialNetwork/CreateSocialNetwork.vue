<template>
  <div class="form_social_network">
    <h3>Ссылки соцсетей</h3>
    <div v-for="(socialNetwork, index) in socialNetworkStore.socialNetworks" :key="socialNetwork.id" class="form_social_network_list">
      <UiInput name="picture" v-model="socialNetwork.urlImage" placeholder="Введите url картинки"/>
      <UiInput name="social" v-model="socialNetwork.urlSocialNetwork" placeholder="Введите url соцсети"/>
      <primary-button class="button_add button_social_network_common" @click="socialNetworkStore.createInput()" v-if="index === 0" title="+"/>
      <DangerButton class="button_del button_social_network_common" @click="socialNetworkStore.deleteInput(index)" v-else title="x"/>
    </div>
    <primary-button class="button_save button_social_network_common" @click="socialNetworkStore.saveDateAndSendToDb()" title="Сохранить"/>
  </div>
</template>

<script setup lang="ts">
import UiInput from "@/shared/ui/UiInput/UiInput.vue";
import PrimaryButton from "@/shared/ui/PrimaryButton/PrimaryButton.vue";
import DangerButton from "@/shared/ui/DangerButton/DangerButton.vue";
import { useSocialNetworkStore } from "@/features/socialNetwork/socialNetworkStore";

const socialNetworkStore = useSocialNetworkStore();
</script>

<style scoped lang="scss">
.form_social_network_list {
  display: flex;
  gap: 10px;
  height: 7vh;
  margin-bottom: 10px;
}
.button_social_network_common {
  color: #FFF;
  font-style: normal;
  font-weight: 700;
  line-height: 100%; /* 32px */
}

.form_social_network_list_button {
  width: 3vw;
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
</style>