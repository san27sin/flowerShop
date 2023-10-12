<template>
  <button :class="{'button-icon': !title}" class="button">{{title}}</button>
</template>

<script setup lang="ts">
interface IProps {
  title?: string
}
const props = withDefaults(defineProps<IProps>(), {
  title: ''
})
</script>

<style scoped>
.button-icon {
  background-image: url('../../../assets/edit.svg');
  background-repeat: no-repeat;
  background-position: center;
}
.button {
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 19px;
  border-radius: 12px;
  color: #fff;
  background-color: #1A8509;
  border: none;
}
</style>