<template>
  <div class="w-full h-screen flex justify-center items-center">
    <SecaoBase class="min-w-[50vh]">
      <form
        class="w-full h-[80vh] flex items-center justify-center flex-col gap-6"
        @submit.prevent="handleAutenticar()"
      >
        <h1 class="mb-2">Login</h1>
        <InputTexto
          label="Usuário"
          autocomplete="username"
          :valor-input="formLogin.login"
          @atualizar:valor-input="(valor: string) => (formLogin.login = valor)"
        />
        <InputSenha
          label="Senha"
          :valor-input="formLogin.senha"
          @atualizar:valor-input="(valor: string) => (formLogin.senha = valor)"
        />
        <div class="mt-2">
          <BotaoBase class="w-24 font-semibold" cor="mantis" tipo="solido">Logar</BotaoBase>
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

const formLogin = ref({
  login: '',
  senha: '',
})

const { mutate } = useAutenticacao()
const handleAutenticar = () => {
  mutate(
    { login: formLogin.value.login, senha: formLogin.value.senha },
    {
      onSuccess: (token) => {
        localStorageService.setItem('token', token)
      },
      onError: (error) => {
        console.error('Erro ao fazer login:', error)
      },
    },
  )
}
</script>

<style scoped></style>
