<template>
  <div class="w-full h-screen flex justify-center items-center transition-all">
    <SecaoBase class="min-w-[50vh]">
      <form
        class="w-full h-[80vh] flex items-center justify-center flex-col gap-6"
        @submit.prevent="handleAutenticar()"
      >
        <h1 class="mb-2">Login</h1>
        <transition name="fade">
          <MensagemSistema v-if="error" class="mb-2" tipo="erro" :icone="XCircle">
            Usário ou senha inválidos
          </MensagemSistema>
        </transition>
        <InputTexto
          label="Usuário"
          autocomplete="username"
          :valor-input="formLogin.login"
          :tem-erro="error"
          @atualizar:valor-input="(valor: string) => (formLogin.login = valor)"
        />
        <InputSenha
          label="Senha"
          :valor-input="formLogin.senha"
          @atualizar:valor-input="(valor: string) => (formLogin.senha = valor)"
        />
        <div class="mt-2">
          <BotaoBase class="w-24 font-semibold" cor="mantis" tipo="solido">
            <span v-if="isPending" class="flex justify-center"
              ><LoaderCircle class="animate-spin"
            /></span>
            <span v-else>Entrar</span>
          </BotaoBase>
        </div>
      </form>
    </SecaoBase>
  </div>
</template>

<script setup lang="ts">
import InputTexto from '@/components/InputTexto.vue'
import { ref } from 'vue'
import InputSenha from '@/components/InputSenha.vue'
import SecaoBase from '@/components/SecaoBase.vue'
import BotaoBase from '@/components/BotaoBase.vue'
import { useAutenticacao } from '@/hooks/useAutenticacao'
import { useEstadoAutenticacao } from '@/composables/useEstadoAutenticacao'
import router from '@/router'
import { XCircle, LoaderCircle } from 'lucide-vue-next'
import MensagemSistema from '@/components/MensagemSistema.vue'

const formLogin = ref({
  login: '',
  senha: '',
})

const { mutate, error, isPending } = useAutenticacao()
const { salvarToken } = useEstadoAutenticacao()
const handleAutenticar = () => {
  mutate(
    { login: formLogin.value.login, senha: formLogin.value.senha },
    {
      onSuccess: (token) => {
        salvarToken(token)
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
