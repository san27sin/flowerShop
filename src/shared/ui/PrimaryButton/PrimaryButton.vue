<template>
    <button>
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
    padding: 19px 38px;
}
</style>
