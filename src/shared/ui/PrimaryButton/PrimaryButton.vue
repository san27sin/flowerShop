<template>
    <button class="button">
        {{ title }}
    </button>
</template>

<script setup lang="ts">
interface IProps {
    title: String;
}
const props = defineProps<IProps>();
</script>

<style lang="scss" scoped>
.button {
  background: #030319;
  color: #fff;
  border-radius: 24px;
  font-size: 24px;
  width: 169px;
  height: 62px;
  margin: 10px;
}
</style>
