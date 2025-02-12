<template>
  <BaseModal v-model="modalState">
    <header class="border-b bg-default pb-1">
      <h2>{{ `${t('create')} ${t('address')}` }}</h2>
    </header>

    <div class="w-full grid grid-cols-2 py-6 gap-6">
      <TextInput
        v-model="addressData.postalCode"
        name="postalCode"
        autocomplete="postal-code"
        class="order-1"
        :label="t('postalCode')"
      ></TextInput>
      <TextInput
        v-model="addressData.state"
        name="state"
        autocomplete="state"
        class="order-3"
        :label="t('state')"
      ></TextInput>
      <TextInput v-model="addressData.city" class="order-5" :label="t('city')"></TextInput>
      <TextInput
        v-model="addressData.neighborhood"
        name="neighborhood"
        autocomplete="neighborhood"
        class="order-7"
        :label="t('neighborhood')"
      ></TextInput>
      <TextInput
        v-model="addressData.street"
        name="street"
        autocomplete="street"
        class="order-2"
        :label="t('street')"
      ></TextInput>
      <TextInput
        v-model="addressData.number"
        name="number"
        autocomplete="number"
        class="order-4"
        :label="t('number')"
      ></TextInput>
      <TextInput
        v-model="addressData.additionalInfo"
        name="additionalInfo"
        autocomplete="additionalInfo"
        class="order-6"
        :label="t('additionalInfo')"
      ></TextInput>
    </div>
    <footer class="flex w-full justify-end gap-4">
      <BaseButton :disabled="isPending" @click="addAddress()">
        <span v-if="isPending" class="flex justify-center">
          <LoaderCircle class="animate-spin" />
        </span>
        <span v-else>
          {{ t('confirm') }}
        </span>
      </BaseButton>
    </footer>
  </BaseModal>
</template>

<script setup lang="ts">
import BaseModal from '@/components/BaseModal.vue'
import { useI18n } from 'vue-i18n'
import TextInput from '@/components/TextInput.vue'
import BaseButton from '@/components/BaseButton.vue'
import { reactive } from 'vue'
import { useAddressMutation } from '@/hooks/address/useAddressMutation'
import { LoaderCircle } from 'lucide-vue-next'
import type { AddressInput } from '@/interfaces/addressInterface'
import { Field } from 'vee-validate'
import * as yup from 'yup'

const { postAddress } = useAddressMutation()
const { mutate, error, isPending } = postAddress()
const { t } = useI18n()

const modalState = defineModel({
  type: Boolean,
  default: false,
})

const addressData: AddressInput = reactive({
  postalCode: '',
  state: '',
  city: '',
  neighborhood: '',
  street: '',
  number: '',
  additionalInfo: '',
})

const schema = yup.object().shape({
  state: yup.string().required(),
  city: yup.string().required(),
  neighborhood: yup.string().required(),
  street: yup.string().required(),
})

const addAddress = async () => {
  if (!schema.isValidSync(addressData)) {
    return
  }

  mutate(addressData)
  modalState.value = false
}
</script>

<style scoped></style>
