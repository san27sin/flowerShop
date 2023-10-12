<template>
  <input
      @input="($event) => onInput($event.target.value)"
      :value="modelValue"
      :placeholder="placeholder"
      :name="name"
      class="input"
      type="text"
  >
</template>

<script setup lang="ts">
interface IProps {
  placeholder: string
  modelValue: string // зарезервированное св-ство
  name: string
}
const props = defineProps<IProps>()
const emit = defineEmits(['update:modelValue'])

function onInput(text: string) {
  emit('update:modelValue', text)
}
</script>

<style scoped lang="scss">
  .input {
    border: 1px solid #04041A;
    padding: 20px;
    border-radius: 31px;
  }
</style>