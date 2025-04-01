import { Navigation } from '@/types'
import { BellSimple, Gear, SignOut, User } from '@phosphor-icons/react'

export const navigationData: Navigation[] = [
  {
    icon: User,
    title: 'Profile',
    url: '/account',
  },
  {
    icon: Gear,
    title: 'Settings',
    url: '/billing',
  },
  {
    icon: BellSimple,
    title: 'Notification',
    url: '/notify',
  },
  {
    icon: SignOut,
    title: 'Sign Out',
    url: '/',
  },
]
