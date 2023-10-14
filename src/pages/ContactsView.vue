<template>
  <div class="page">
    <h1 class="title">Контакты</h1>
    <ContactsForm/>
  </div>
</template>

<script setup lang="ts">

import CreatePhones from "@/features/phones/CreatePhones.vue";
import ContactsForm from "@/widgets/ContactsForm/ContactsForm.vue";
</script>

<style scoped lang="scss">
@import '@/shared/css/index.css';
</style>