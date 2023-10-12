<template>
  <button class="button">
    {{title}}
  </button>
</template>

<script setup lang="ts">
interface IProps {
  title?: string
}

const props = withDefaults(defineProps<IProps>(), {
  title: 'X'
})
</script>

<style scoped>
.button {
  display: flex;
  align-items: center;
  justify-content: center;
  background: #EE0000;
  border-radius: 12px;
  color: #fff;
  border: none;
  padding: 10px;
  font-size: 19px;
}
</style>