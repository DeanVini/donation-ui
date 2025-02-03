import { Boxes, FileUser, House, MapPinned, UsersRound } from 'lucide-vue-next'

export const NAV_ITEMS = [
  {
    i18nKey: 'home',
    path: '/',
    icon: House,
  },
  {
    i18nKey: 'families',
    path: '/family',
    icon: UsersRound,
  },
  {
    i18nKey: 'people',
    path: '/person',
    icon: FileUser,
  },
  {
    i18nKey: 'addresses',
    path: '/address',
    icon: MapPinned,
  },
  {
    i18nKey: 'services',
    path: '/service',
    icon: Boxes,
  },
] as const
