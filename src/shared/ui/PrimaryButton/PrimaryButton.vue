<template>
    <button class="button" :disabled="isActive">
        {{ title }}
    </button>
</template>

<script setup lang="ts">
interface IProps {
    title: String
    isActive: boolean
}
const props = withDefaults(defineProps<IProps>(), {
  title: '',
  isActive: false,
})
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
