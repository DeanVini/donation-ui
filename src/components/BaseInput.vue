<template>
  <div class="w-fit">
    <label for="input" class="relative h-full">
      <span
        :class="{
          'translate-y-[-90%] translate-x-[-7px]': labelAbove,
          'dark:!text-zinc-400': focused,
        }"
        class="absolute ml-1 text-zinc-500 dark:text-zinc-500 p-1 pt-1.5 w-full transition-all h-max flex pointer-events-none items-center"
      >
        {{ props.label }}
      </span>
      <input
        ref="inputRef"
        class="autofill:!bg-yellow-500 appearance-none"
        v-model="value"
        :id="props.label"
        :type="props.type"
        @focusin="(event) => handleInputFocusIn((event.target as HTMLInputElement).value)"
        @focusout="(event) => handleInputFocusOut((event.target as HTMLInputElement).value)"
      />
    </label>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'

const props = defineProps({
  label: {
    type: String,
    default: '',
  },
  type: {
    type: String,
    default: 'text',
  },
  modelValue: {
    type: String,
    default: '',
  },
})

const value = defineModel()

const labelAbove = ref(false)
const focused = ref(false)
const inputRef = ref<HTMLInputElement | null>(null)
const isAutofilled = ref(false)

const handleInputFocusIn = (value: string) => {
  focused.value = true
  if (value !== '') {
    return
  }
  labelAbove.value = true
}

const handleInputFocusOut = (value: string) => {
  focused.value = false
  if (value !== '') {
    return
  }
  labelAbove.value = false
}

onMounted(() => {
  const input = inputRef.value
  if (input) {
    input.addEventListener('animationstart', (event: AnimationEvent) => {
      if (event.animationName.includes('autofill-detect')) {
        isAutofilled.value = true
        labelAbove.value = true
      }
    })

    if (input.value) {
      isAutofilled.value = true
      labelAbove.value = true
    }
  }
})
</script>

<style scoped>
input {
  @apply z-10 p-1.5 rounded-md border transition-all border-zinc-200 dark:border-zinc-700 dark:bg-neutral-800;
  @apply focus:shadow-md focus:border-zinc-400;
  @apply hover:border-zinc-500 hover:bg-slate-100 dark:hover:border-zinc-500 dark:hover:bg-neutral-700;
}

input:-webkit-autofill {
  animation-name: autofill-detect;
  animation-duration: 0.1s;
  animation-timing-function: ease-in-out;
}

@keyframes autofill-detect {
  from {
  }
  to {
  }
}
</style>
