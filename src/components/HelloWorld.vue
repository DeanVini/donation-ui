<template>
  <div class="w-full h-screen flex justify-center items-center">
    <div class="p-2 w-fit min-w-[80vh] min-h-[80vh] rounded-lg bg-neutral-800 flex flex-col gap-6">
      <InputTexto
        label="Usuário"
        :valor-input="formLogin.usuario"
        @atualizar:valor-input="(valor: string) => (formLogin.usuario = valor)"
      />
      <InputSenha label="Senha" :valor-input="formLogin.senha" />
    </div>
  </div>
</template>

<script setup lang="ts">
import InputTexto from '@/components/InputTexto.vue'
import { ref } from 'vue'
import InputBase from '@/components/InputBase.vue'
import InputSenha from '@/components/InputSenha.vue'

const formLogin = ref({
  usuario: '',
  senha: '',
})
</script>

<style scoped></style>
