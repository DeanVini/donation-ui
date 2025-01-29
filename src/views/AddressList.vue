<template>
  <div class="w-full h-full py-14 px-10 flex flex-col gap-10">
    <header class="w-full flex justify-between items-center">
      <h2>{{ t('addresses') }}</h2>
      <BaseButton>{{ `${t('create')} ${t('address')}` }}</BaseButton>
    </header>
    <BaseTable :columns="columns">
      <tr v-for="address in addresses" :key="address.id" class="table-body bg-default">
        <td>{{ address.state }}</td>
        <td>{{ address.city }}</td>
        <td>{{ address.neighborhood }}</td>
        <td>{{ address.street }}</td>
        <td>{{ address.number }}</td>
      </tr>
    </BaseTable>
  </div>
</template>

<script setup lang="ts">
import BaseTable from '@/components/BaseTable.vue'

import { useI18n } from 'vue-i18n'
import { computed, type ComputedRef, onMounted, type Ref, ref } from 'vue'
import useAddressService from '@/services/addressService'
import type { Address } from '@/interfaces/addressInterface'
import BaseButton from '@/components/BaseButton.vue'

const { t } = useI18n()

const columns: ComputedRef<Array<string>> = computed(() => [
  t('state'),
  t('city'),
  t('neighborhood'),
  t('street'),
  t('number'),
])
const addresses: Ref<Address[]> = ref([])

onMounted(async () => {
  addresses.value = await useAddressService().getAll()
})
</script>

<style scoped></style>
