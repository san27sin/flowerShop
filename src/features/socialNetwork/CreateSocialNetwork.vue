<template>
  <div class="form_social_network">
    <h3>Ссылки соцсетей</h3>
    <div v-for="(socialNetworkStore, index) in socialNetworkStore.socialNetworks" class="form_social_network_list" action="">
      <UiInput name="picture" v-model="socialNetworkStore.urlImage" placeholder="Введите url картинки"/>
      <UiInput name="social" v-model="socialNetworkStore.urlSocialNetwork" placeholder="Введите url соцсети"/>
      <primary-button class="form_social_network_list_button" v-if="index === 0" title="+"/>
      <DangerButton class="form_social_network_list_button" v-else title="X"/>
    </div>
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
  height: 8vh;
}

.form_social_network_list_button {
  width: 3vw;
  color: #FFF;
  font-size: 32px;
  font-style: normal;
  font-weight: 700;
  line-height: 100%; /* 32px */
}
</style>