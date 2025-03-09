<template>
  <div class="w-full h-full py-14 px-10 flex flex-col gap-10">
    <header class="w-full flex justify-between items-center">
      <h2>{{ t('addresses') }}</h2>
      <BaseButton color="medium-purple" @click="addAddressModalStateHandler()">
        {{ `${t('create')} ${t('address')}` }}
      </BaseButton>
    </header>
    <BaseTable :columns="columns" :loading="isLoading">
      <tr
        v-for="address in addresses"
        :key="address.id"
        class="bg-default cursor-pointer ease-in-out duration-300 hover:-translate-y-[3px]"
        @click="routeToAddressDetails(address.id)"
      >
        <td>{{ address.state }}</td>
        <td>{{ address.city }}</td>
        <td>{{ address.neighborhood }}</td>
        <td>{{ address.street }}</td>
        <td>{{ address.number }}</td>
      </tr>
    </BaseTable>
  </div>
  <AddAddressModal v-model="openAddAddressModal" />
</template>

<script setup lang="ts">
import BaseTable from '@/components/BaseTable.vue'

import { useI18n } from 'vue-i18n'
import { computed, type ComputedRef, onMounted, ref } from 'vue'
import BaseButton from '@/components/BaseButton.vue'
import useAddressQuery from '@/hooks/address/useAddressQuery'
import AddAddressModal from '@/components/AddAddressModal.vue'
import router from '@/router'

const { getAll } = useAddressQuery()

const { data: addresses, isLoading } = getAll()
const { t } = useI18n()

const openAddAddressModal = ref(false)

const columns: ComputedRef<Array<string>> = computed(() => [
  t('state'),
  t('city'),
  t('neighborhood'),
  t('street'),
  t('number'),
])

const addAddressModalStateHandler = () => {
  openAddAddressModal.value = true
}

const routeToAddressDetails = (id) => {
  router.push(`address/${id}`)
}

onMounted(async () => {})
</script>

<style scoped></style>
