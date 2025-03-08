import { Boxes, FileUser, House, MapPinned, UsersRound } from 'lucide-vue-next'

export const NAV_ITEMS = [
  {
    i18nKey: 'home',
    path: '/',
    icon: House,
  },
  {
    i18nKey: 'families',
    path: '/families',
    icon: UsersRound,
  },
  {
    i18nKey: 'people',
    path: '/people',
    icon: FileUser,
  },
  {
    i18nKey: 'addresses',
    path: '/addresses',
    icon: MapPinned,
  },
  {
    i18nKey: 'services',
    path: '/services',
    icon: Boxes,
  },
] as const
