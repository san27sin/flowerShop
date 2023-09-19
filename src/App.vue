<template>
  <div class="main">
    <Header class="header"/>
    <Menu/>
    <router-view />
  </div>
</template>

<script setup lang="ts">
import Header from "@/widgets/Header/Header.vue";
import Menu from "@/widgets/Menu/Menu.vue";
import Content from "@/widgets/Content/Content.vue";

const color = "#fff";
const getTitle = (): string => {
  return "title";
}
</script>

<style lang="scss" scoped>
@import '../src/shared/css/index.css';
.main {
  display: grid;
  grid-template-columns: 1fr 10fr;
  grid-template-rows: 1fr 5fr;
}

.header {
  grid-column-start: 1;
  grid-column-end: 3;
}
</style>
