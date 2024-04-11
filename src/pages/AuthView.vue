<template>
  <div class="auth">
    <component :is="component"/>
    <p v-if="title === 'AuthorizationForm'">Уже имеете аккаунт? Можете <strong class="auth__sign_up" @click="setTitle('LoginForm')">войти</strong></p>
    <p v-else>Еще не зарегистрированы? Тогда можете <strong class="auth__sign_up" @click="setTitle('AuthorizationForm')">зарегистрироваться</strong></p>
    <p v-if="title !== 'ResetPasswordForm'">Забыли пароль? Можете его <strong class="auth__sign_up" @click="setTitle('ResetPasswordForm')">сбросить</strong>.</p>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import AuthorizationForm from '@/widgets/AuthorizationForm/AuthorizationForm.vue'
import LoginForm from '@/widgets/LoginForm/LoginForm.vue'
import ResetPasswordForm from '@/widgets/ResetPasswordForm/ResetPasswordForm.vue'

import { useRouter } from 'vue-router'
const router = useRouter()
const title = ref('LoginForm')

const component = computed(() => {
  if (title.value === 'AuthorizationForm')
    return AuthorizationForm
  if (title.value === 'LoginForm')
    return LoginForm
  return ResetPasswordForm
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