<template>
  <div class="px-10 py-14">
    <TransitionGroup name="list">
      <div v-if="data?.latitude">
        <MapLocation class="!h-[15rem]" :latitude="data.latitude" :longitude="data.longitude" />
      </div>
      <BaseSection
        class="w-full h-fit rounded-t-none min-h-[11rem]"
        :class="{ 'animate-pulse bg-default': isFetching }"
      >
        <transition name="fade">
          <div v-if="!isFetching" class="px-5 p-5">
            <div
              class="flex flex-col lg:flex-row border-b border-slate-200/60 dark:border-neutral-900/50 pb-5 -mx-5"
            >
              <div
                class="flex flex-col mt-6 lg:mt-0 flex-1 px-5 border-l border-r border-slate-200/60 dark:border-neutral-900/50 border-t lg:border-t-0 pt-5 lg:pt-0"
              >
                <div class="font-medium text-center lg:text-left lg:mt-3">{{ t('address') }}</div>
                <div class="w-full truncate sm:whitespace-normal font-medium text-nowrap mt-4">
                  {{ data?.street }}, {{ data?.neighborhood }}, {{ data?.number }},
                  {{ data?.city }} -
                  {{ data?.state }}
                </div>
                <div class="text-secondary">{{ data?.additionalInfo }}</div>
              </div>
              <div
                class="mt-6 lg:mt-0 flex-1 px-5 border-l border-r border-slate-200/60 dark:border-neutral-900/50 border-t lg:border-t-0 pt-5 lg:pt-0"
              >
                <div class="font-medium text-center lg:text-left lg:mt-3">
                  Family Name Contact Details
                </div>
                <div class="flex flex-col justify-center items-center lg:items-start mt-4">
                  <div class="truncate sm:whitespace-normal flex items-center">
                    <Phone class="w-4 h-4 mr-2" /> +55 (00) 00000-0000
                  </div>
                  <div class="truncate sm:whitespace-normal flex items-center mt-3">
                    <Mail class="w-4 h-4 mr-2" />
                    email@email.com
                  </div>
                </div>
              </div>
              <div
                class="mt-6 lg:mt-0 flex-1 flex items-center justify-center px-5 border-t lg:border-0 border-slate-200/60 dark:border-neutral-900/50 pt-5 lg:pt-0"
              >
                <div class="text-center rounded-md w-20 py-3">
                  <div class="font-medium text-primary text-xl">
                    {{ data?.people?.length || 0 }}
                  </div>
                  <div class="text-secondary">Moradores</div>
                </div>
                <div class="text-center rounded-md w-20 py-3">
                  <div class="font-medium text-primary text-xl">0</div>
                  <div class="text-secondary">{{ t('families') }}</div>
                </div>
                <div class="text-center rounded-md w-20 py-3">
                  <div class="font-medium text-primary text-xl">0</div>
                  <div class="text-secondary">{{ t('services') }}</div>
                </div>
              </div>
            </div>
          </div>
        </transition>
      </BaseSection>
    </TransitionGroup>
  </div>
</template>

<script setup lang="ts">
import 'leaflet/dist/leaflet.css'
import useAddressQuery from '@/hooks/address/useAddressQuery'
import { ref, watch } from 'vue'
import { useToaster } from '@/composables/useToaster'
import BaseSection from '@/components/BaseSection.vue'
import { useI18n } from 'vue-i18n'
import MapLocation from '@/components/MapLocation.vue'
import { Mail, Phone } from 'lucide-vue-next'

const props = defineProps({
  addressId: {
    type: Number,
    required: true,
  },
})

const { t } = useI18n()

const addressData = ref({})
const zoom = ref(2)

const { error, isPending, data, isFetching } = useAddressQuery().getById(props.addressId, {
  includePeople: true,
})

watch(error, () => {
  if (error) {
    useToaster().error('Erro ao consulta')
  }
})
</script>

<style scoped></style>
