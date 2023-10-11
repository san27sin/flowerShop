<template>
  <div class="page">
    <h1 class="title">Преимущества</h1>
    <advantage-form/>
    <advantage-table/>
  </div>
</template>

<script setup lang="ts">

import AdvantageForm from "@/widgets/AdvantageForm/AdvantageForm.vue";
import AdvantageTable from "@/widgets/AdvantageTable/AdvantageTable.vue";
</script>

<style scoped lang="scss">
.page { /* сделать один глобальный класс */
  display: flex;
  flex-direction: column;
  gap: 50px;
  padding: 30px;
}
</style>