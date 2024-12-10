<template>
  <div class="w-full h-screen flex justify-center items-center">
    <SecaoBase class="min-w-[50vh]">
      <div class="w-full h-[80vh] flex items-center justify-center flex-col gap-6">
        <h1 class="mb-2">Login</h1>
        <InputTexto
          label="Usuário"
          :valor-input="formLogin.usuario"
          @atualizar:valor-input="(valor: string) => (formLogin.usuario = valor)"
        />
        <InputSenha
          label="Senha"
          :valor-input="formLogin.senha"
          @atualizar:valor-input="(valor: string) => (formLogin.senha = valor)"
        />
        <div class="mt-2">
          <span>Logar</span>
        </div>
      </div>
    </SecaoBase>
  </div>
</template>

<script setup lang="ts">
import InputTexto from '@/components/InputTexto.vue'
import { ref } from 'vue'
import InputSenha from '@/components/InputSenha.vue'
import SecaoBase from '@/components/SecaoBase.vue'

const formLogin = ref({
  usuario: '',
  senha: '',
})
</script>

<style scoped></style>
