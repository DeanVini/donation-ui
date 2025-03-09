<template>
  <ul>
    <li></li>
  </ul>
  <slot></slot>
</template>

<script setup lang="ts">
import { useSlots } from 'vue'

const slot = useSlots()
</script>
>
