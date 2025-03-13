import { Gear, SignOut, UserCircle } from '@phosphor-icons/react'

export const sidebarUser = {
  name: 'Igor Nicoletti',
  email: 'igor93nicoletti@gmail.com',
  avatar: '/unnamed.jpg',
  items: [
    {
      title: 'Account',
      url: '/account',
      icon: UserCircle,
    },
    {
      title: 'Settings',
      url: '/settings',
      icon: Gear,
    },
    {
      title: 'Log out',
      url: '/',
      icon: SignOut,
    },
  ]
}
