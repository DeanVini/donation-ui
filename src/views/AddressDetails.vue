<template>
  <div class="px-10 py-14">
    <TransitionGroup name="list">
      <div v-if="data?.latitude" :key="data?.latitude">
        <BaseButton class="absolute z-[5] right-0 mr-12 my-2">Editar Posição</BaseButton>
        <MapLocation class="!h-[15rem]" :latitude="data.latitude" :longitude="data.longitude" />
      </div>
      <BaseSection
        :key="data?.id"
        class="w-full h-fit rounded-t-none min-h-[11rem]"
        :class="{ 'animate-pulse bg-default': isFetching }"
      >
        <transition name="fade">
          <div v-if="!isFetching" :key="data?.id" class="px-5 p-5">
            <div
              :key="data?.id"
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
                class="w-5/12 border-r border-slate-200/60 dark:border-neutral-900/50 border-t lg:border-t-0"
              >
                <Flicking
                  :options="{ panelsPerView: -1, align: 'prev' }"
                  :plugins="plugins"
                  class="h-full w-fit"
                  @changed="
                    ({ index }) => {
                      currentFamilyIndex = index
                    }
                  "
                >
                  <div
                    v-for="family in data?.families"
                    :key="family.id"
                    class="w-full w-full px-5 pt-5 lg:pt-0"
                  >
                    <div class="pl-5">
                      <div class="font-medium text-center lg:text-left lg:mt-3">
                        {{ $t('contactDetails', { name: family.name }) }}
                      </div>
                      <div class="flex flex-col justify-center items-center lg:items-start mt-4">
                        <div class="truncate sm:whitespace-normal flex items-center">
                          <Phone class="w-4 h-4 mr-2" /> {{ family.leader.telephone }}
                        </div>
                        <div class="truncate sm:whitespace-normal flex items-center mt-3">
                          <Mail class="w-4 h-4 mr-2" />
                          email@email.com
                        </div>
                      </div>
                    </div>
                  </div>
                  >
                  <template #viewport>
                    <div class="flicking-arrow-prev is-thin"></div>
                    <div class="flicking-arrow-next is-thin"></div>
                    <div class="flicking-pagination"></div>
                  </template>
                </Flicking>
              </div>
              <div
                class="mt-6 lg:mt-0 flex-1 flex items-center justify-center px-5 border-t lg:border-0 border-slate-200/60 dark:border-neutral-900/50 pt-5 lg:pt-0"
              >
                <div class="text-center rounded-md w-20 py-3">
                  <div class="font-medium text-primary text-xl">
                    {{ data?.peopleCount || 0 }}
                  </div>
                  <div class="text-secondary">Moradores</div>
                </div>
                <div class="text-center rounded-md w-20 py-3">
                  <div class="font-medium text-primary text-xl">
                    {{ data?.families?.length || 0 }}
                  </div>
                  <div class="text-secondary">{{ t('families') }}</div>
                </div>
                <div class="text-center rounded-md w-20 py-3">
                  <div class="font-medium text-primary text-xl">
                    {{ data?.families?.services?.length || 0 }}
                  </div>
                  <div class="text-secondary">{{ t('services') }}</div>
                </div>
              </div>
            </div>
          </div>
        </transition>
      </BaseSection>
      <div class="max-w-full relative" :key="data?.id">
        <TransitionGroup name="list">
          <BaseSection v-if="data?.families" class="w-full mt-4 p-4" :key="currentFamilyIndex">
            Família {{ data?.families[currentFamilyIndex].name }}
          </BaseSection>
        </TransitionGroup>
      </div>
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
import BaseButton from '@/components/BaseButton.vue'
import { Fade, Arrow, Pagination } from '@egjs/flicking-plugins'
import Flicking from '@egjs/vue3-flicking'
import '@egjs/flicking-plugins/dist/arrow.css'
import '@egjs/vue3-flicking/dist/flicking.css'
import '@egjs/flicking-plugins/dist/flicking-plugins.css'
import '@egjs/flicking-plugins/dist/pagination.css'

const props = defineProps({
  addressId: {
    type: String,
    required: true,
  },
})

const { t } = useI18n()

const plugins = [new Fade(), new Arrow(), new Pagination()]
const addressData = ref({})
const zoom = ref(2)
const currentFamilyIndex = ref(0)

const { error, isPending, data, isFetching } = useAddressQuery().getById(props.addressId, {
  includePeople: true,
})

watch(error, () => {
  if (error) {
    useToaster().error('Erro ao consulta')
  }
})
</script>

<style scoped>
.flicking-arrow-prev {
  @apply !-translate-x-6 -translate-y-1/2;
}

.flicking-arrow-next {
  @apply !translate-x-6 -translate-y-1/2;
}

.flicking-pagination {
  @apply top-0 h-fit;
}
</style>
