<template>
  <RouterLink v-if="props.item?.i18nKey" :to="props.item.path">
    <div class="flex relative flex-col gap-2 w-full cursor-pointer">
      <div
        v-show="isActive()"
        :key="routerStore.currentRoute.fullPath"
        class="absolute bg-slate-900 dark:bg-slate-200 w-[2.5px] h-full rounded"
      ></div>
      <div
        class="p-1 ml-[0.5rem] flex gap-3 ease-in-out duration-300 hover:-translate-y-[3px] hover:shadow-md rounded-lg"
      >
        <component class="min-w-[1.55rem]" :is="props.item.icon" size="25" />
        <Transition name="fade" appear @before-enter="beforeEnter" @enter="enter" @leave="leave">
          <p v-if="props.showName" class="overflow-hidden whitespace-nowrap">
            {{ t(props.item.i18nKey) }}
          </p>
        </Transition>
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

const { t } = useI18n()
const routerStore = useRouterStore()

const isActive = () => {
  return routerStore.currentRoute.basePath === props.item.path
}

const beforeEnter = (el: Element) => {
  el.style.maxWidth = '5rem'
}

const enter = (el: Element) => {
  el.style.transition = 'all 0.3s ease-in-out'
  el.style.maxWidth = '12rem'
}

const leave = (el: Element) => {
  el.style.transition = 'all 0.3s ease-in-out'
  el.style.maxWidth = '5rem'
}
</script>

<style></style>
