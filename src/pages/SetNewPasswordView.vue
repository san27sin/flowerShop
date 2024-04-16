<template>
  <div class="auth">
    <SetNewPasswordForm/>
  </div>
</template>

<script setup lang="ts">
import SetNewPasswordForm from "@/widgets/SetPasswordForm/SetNewPasswordForm.vue";
</script>

<style lang="scss">
.auth {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  border: 5px solid black;
  border-radius: 46px;
  padding: 10px;
  height: 60%;

  &__sign_up:hover {
    cursor: pointer;
  }
}

.form {
  display: flex;
  gap: 10px;
  flex-direction: column;
  width: 80%;
  height: auto;
}

@media screen and (max-width: 768px) {
  .auth {
    max-width: 300px;
  }
}

@media screen and (min-width: 3440px) {
  .auth {
    max-width: 600px;
  }
}
</style>