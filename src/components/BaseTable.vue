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
        <tr v-if="props.loading" class="table-body bg-default">
          <td v-for="column in props.columns.length">
            <div class="animate-pulse flex">
              <div class="h-[2rem] w-2/4 bg-gray-100/40 dark:bg-neutral-800"></div>
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
