<template>
  <header class="header">
    <div class="container d-grid">
      <router-link to="/" class="logo">
        <img src="@/assets/Logo.svg" alt="">
      </router-link>

      <LogoutUser/>
    </div>
  </header>
</template>

<script>
import SecondaryButton from "@/shared/ui/SecondaryButton/SecondaryButton.vue";
import {defineComponent} from "vue";
import LogoutUser from "@/features/auth/components/LogoutUser.vue";

export default defineComponent({
  components: {LogoutUser, SecondaryButton}
})


</script>

<style lang="scss" scoped>
  .header {
    background: linear-gradient(94deg, rgba(4,4,26,1) 0%, rgba(21,22,77,1) 100%);
    padding: 20px 0;
  }

  .d-grid {
    display: grid;
    grid-template-columns: 175px max-content;
    align-items: center;
    justify-content: space-between;
  }

  .button_exit {
    width: 10vw;
    height: 4hw;
  }
</style>