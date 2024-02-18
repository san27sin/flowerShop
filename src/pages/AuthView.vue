<template>
  <div class="auth">
    <component :is="component"/>
    <p v-if="title === 'AuthorizationForm'">Уже имеете аккаунт? Можете <strong class="auth__sign_up" @click="setTitle('LoginForm')">войти</strong></p>
    <p v-else>Еще не зарегистрированы? Тогда можете <strong class="auth__sign_up" @click="setTitle('AuthorizationForm')">зарегистрироваться</strong></p>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import AuthorizationForm from '@/widgets/AuthorizationForm/AuthorizationForm.vue'
import LoginForm from '@/widgets/LoginForm/LoginForm.vue'
import { useAuthStore } from '@/features/auth/authStore'
import { useRouter } from 'vue-router'
const router = useRouter()
const title = ref('LoginForm')

const component = computed(() => {
  if (title.value === 'AuthorizationForm')
    return AuthorizationForm
  return LoginForm
})

function setTitle(aTitle: string) {
  title.value = aTitle
}
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
  width: 40%;
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
</style>