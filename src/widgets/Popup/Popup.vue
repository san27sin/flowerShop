<template>
  <transition name="appear">
    <div v-show="popupStore.isVisible" :class="{'popup__active': popupStore.isVisible }" class="popup">
      <div @click="popupStore.togglePopup()" class="bg"></div>
      <div class="window">
        <slot/>
      </div>
    </div>
  </transition>
</template>

<script setup lang="ts">
import {usePopupStore} from "@/features/popup/popupStore";

const popupStore = usePopupStore()
</script>

<style lang="scss" scoped>
  .popup {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    opacity: 0;
    transition: 0.3s;
    visibility: hidden;
  }

  .popup__active {
    opacity: 1;
    visibility: visible;
  }

  .bg {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(10, 10, 30, 0.52);
  }

  .window {
    background-color: #fff;
    padding: 60px;
    position: relative;
  }

  .appear-enter-active,
  .appear-leave-active {
    transition: transform 1s;
    transform: scale(1.25);
  }

  .appear-enter-from,
  .appear-leave-to {
    transform: scale(0.25);
  }
</style>