<template>
  <div class="w-full h-screen flex justify-center items-center transition-all">
    <BaseSection class="min-w-[50vh]">
      <form
        class="w-full h-[80vh] flex items-center justify-center flex-col gap-6"
        @submit.prevent="authHandler()"
      >
        <h1 class="mb-2">CareOn</h1>
        <transition name="fade">
          <SystemMessage v-if="error" class="mb-2" type="error" :icon="XCircle">
            {{ t('invalidPasswordOrUsername') }}
          </SystemMessage>
        </transition>
        <TextInput
          :label="t('emailOrUsername')"
          autocomplete="username"
          v-model="loginForm.username"
          :error="error"
        />
        <PasswordInput :label="t('password')" v-model="loginForm.password" />
        <div class="mt-2">
          <BaseButton class="w-24 font-semibold" color="mantis" type="solid" :disabled="isPending">
            <span v-if="isPending" class="flex justify-center">
              <LoaderCircle class="animate-spin" />
            </span>
            <span v-else>{{ t('logIn') }}</span>
          </BaseButton>
        </div>
      </form>
    </BaseSection>
  </div>
</template>

<script setup lang="ts">
import TextInput from '@/components/TextInput.vue'
import { onMounted, ref, onUnmounted } from 'vue'
import PasswordInput from '@/components/PasswordInput.vue'
import BaseSection from '@/components/BaseSection.vue'
import BaseButton from '@/components/BaseButton.vue'
import { useAuth } from '@/hooks/useAuth'
import { useAuthState } from '@/composables/useAuthState'
import router from '@/router'
import { XCircle, LoaderCircle } from 'lucide-vue-next'
import SystemMessage from '@/components/SystemMessage.vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

const loginForm = ref({
  username: '',
  password: '',
})

const { mutate, error, isPending } = useAuth()
const { saveToken } = useAuthState()

const authHandler = () => {
  mutate(
    { username: loginForm.value.username, password: loginForm.value.password },
    {
      onSuccess: (token) => {
        saveToken(token)
        router.push('/')
      },
      onError: (error) => {
        console.error(t('serverConnectionFailed'), error)
      },
    },
  )
}

onMounted(() => {
  window.addEventListener('keydown', handleEnter)
})

onUnmounted(() => {
  window.removeEventListener('keydown', handleEnter)
})

const handleEnter = (event: KeyboardEvent) => {
  if (event.key === 'Enter') {
    authHandler()
  }
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
