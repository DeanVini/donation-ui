<template>
  <RouterLink v-if="props.item?.i18nKey" :to="props.item.path">
    <div class="flex relative flex-col gap-2 w-full cursor-pointer" @mouseover="console.log('aa')">
      <div
        v-show="isActive()"
        :key="routerStore.currentRoute.fullPath"
        class="absolute bg-slate-900 dark:bg-slate-200 w-[2.5px] h-full rounded"
      ></div>
      <div
        class="p-1 ml-3 flex gap-3 ease-in-out duration-300 hover:-translate-y-[3px] hover:shadow-md"
      >
        <component :is="props.item.icon" size="25" />
        <p v-show="props.showName">{{ t(props.item.i18nKey) }}</p>
      </div>
    </div>
  </RouterLink>
</template>

<script setup lang="ts">
import { type PropType, ref } from 'vue'
import { useI18n } from 'vue-i18n'
import { useRouterStore } from '@/stores/router'
import router from '@/router'

const props = defineProps({
  item: {
    type: Object as PropType<{
      i18nKey: string
      icon: object
      path: string
    }>,
    required: true,
  },
  showName: {
    type: Boolean,
    default: true,
  },
})

const routerStore = useRouterStore()

const isActive = () => {
  return routerStore.currentRoute.basePath === props.item.path
}

const { t } = useI18n()
</script>
