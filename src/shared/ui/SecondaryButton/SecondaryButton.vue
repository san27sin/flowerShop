<template>
  <button class="button">
    {{title}}
  </button>
</template>

<script setup lang="ts">
interface IProps {
  title: string;
}

const props = defineProps<IProps>();
</script>

<style lang="scss" scoped>
  .button {
    background: #fff;
    padding: 19px 38px;
    color: #030319;
    border-radius: 24px;// скосить углы
    border: 1px solid #030319;// ширина вид цвет
    font-size: 24px;
  }
</style>