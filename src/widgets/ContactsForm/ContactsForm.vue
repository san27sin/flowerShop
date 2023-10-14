<template>
  <div class="form_contacts">
      <create-phones class="form_phones"/>
      <create-social-network class="form_social_network"/>
  </div>
</template>

<script setup lang="ts">
import CreatePhones from "@/features/phones/CreatePhones.vue";
import CreateSocialNetwork from "@/features/socialNetwork/CreateSocialNetwork.vue";
</script>

<style scoped lang="scss">
.form_contacts {
  display: flex;
  gap: 50px;
}
</style>