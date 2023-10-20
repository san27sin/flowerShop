<template>
  <ul v-if="errMessages.length" class="errorList">
    <li v-for="errMes in errMessages">{{ errMes }}</li>
  </ul>
</template>

<script setup lang="ts">
interface IProps {
  errMessages: string[];
}

const props = defineProps<IProps>();
</script>

<style scoped lang="scss">
.errorList {
  color: #e3241e;
  font-weight: bold;
}
</style>