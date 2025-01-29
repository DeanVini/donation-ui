<template>
  <div class="relative overflow-x-auto">
    <table class="w-full text-left table-auto border-spacing-y-2">
      <thead>
        <tr>
          <th v-for="column in columns" scope="col" class="font-medium opacity-[60%] pb-1">
            {{ column.toUpperCase() }}
          </th>
        </tr>
      </thead>
      <tbody class="rounded-lg">
        <tr
          v-if="props.loading"
          class="border-gray-100 last:border-none even:bg-gray-100 even:bg-opacity-20"
        >
          <td v-for="column in props.columns.length + 1" class="px-4 py-4">
            <div class="animate-pulse flex space-x-4">
              <div class="h-2 w-2/4 bg-gray-100 rounded"></div>
            </div>
          </td>
        </tr>
        <slot v-else></slot>
      </tbody>
    </table>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  columns: {
    type: Array<String>,
    required: true,
  },
  loading: {
    type: Boolean,
    default: false,
  },
})
</script>

<style scoped></style>
