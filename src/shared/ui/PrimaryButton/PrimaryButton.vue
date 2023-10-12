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
  display: flex;
  align-items: center;
  justify-content: center;
  background: #030319;
  color: #fff;
  border-radius: 24px;
  font-size: 24px;
}
</style>
