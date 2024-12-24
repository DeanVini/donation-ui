<template>
  <div class="w-full h-screen flex justify-center items-center transition-all">
    <BaseSection class="min-w-[50vh]">
      <form
        class="w-full h-[80vh] flex items-center justify-center flex-col gap-6"
        @submit.prevent="authHandler()"
      >
        <h1 class="mb-2">Login</h1>
        <transition name="fade">
          <SystemMessage v-if="error" class="mb-2" type="error" :icon="XCircle">
            Usário ou senha inválidos
          </SystemMessage>
        </transition>
        <TextInput
          label="Usuário"
          autocomplete="username"
          :model-value="loginForm.username"
          :error="error"
          @update:model-value="(value: string) => (loginForm.username = value)"
        />
        <PasswordInput
          label="Senha"
          :model-value="loginForm.password"
          @update:model-value="(value: string) => (loginForm.password = value)"
        />
        <div class="mt-2">
          <BaseButton class="w-24 font-semibold" color="mantis" type="solid">
            <span v-if="isPending" class="flex justify-center">
              <LoaderCircle class="animate-spin" />
            </span>
            <span v-else>Entrar</span>
          </BaseButton>
        </div>
      </form>
      {{ loginForm }}
    </BaseSection>
  </div>
</template>

<script setup lang="ts">
import TextInput from '@/components/TextInput.vue'
import { onMounted, ref, watch } from 'vue'
import PasswordInput from '@/components/PasswordInput.vue'
import BaseSection from '@/components/BaseSection.vue'
import BaseButton from '@/components/BaseButton.vue'
import { useAuth } from '@/hooks/useAuth'
import { useAuthState } from '@/composables/useAuthState'
import router from '@/router'
import { XCircle, LoaderCircle } from 'lucide-vue-next'
import SystemMessage from '@/components/SystemMessage.vue'

const loginForm = ref({
  username: '',
  password: '',
})

const { mutate, error, isPending } = useAuth()
const { saveToken } = useAuthState()

const authHandler = () => {
  mutate(
    { login: loginForm.value.username, senha: loginForm.value.password },
    {
      onSuccess: (token) => {
        saveToken(token)
        router.push('/')
      },
      onError: (error) => {
        console.error('Erro ao fazer login:', error)
      },
    },
  )
}
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
