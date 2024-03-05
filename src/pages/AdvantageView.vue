<template>
  <div class="page">
    <h1 class="title">Преимущества</h1>
    <advantage-form/>
    <preloader>
      <advantage-table/>
    </preloader>
  </div>
</template>

<script setup lang="ts">
import AdvantageForm from "@/widgets/AdvantageForm/AdvantageForm.vue"
import AdvantageTable from "@/widgets/AdvantageTable/AdvantageTable.vue"
import Preloader from "@/features/preloader/Preloader.vue"
import { useAdvantageStore } from "@/features/advantage/advantagiesStore"
import {delay} from "@/shared/helpers"

const advantageStore = useAdvantageStore();
await delay()
await advantageStore.getAll()
</script>

<style scoped lang="scss">
@import '@/shared/css/index.css';
</style>