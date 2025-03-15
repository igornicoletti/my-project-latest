import { Gear, GithubLogo, SignOut, User } from '@phosphor-icons/react'

export const sidebarUser = {
  name: 'Igor Nicoletti',
  fallback: 'IN',
  email: '@igor93nicoletti',
  avatar: '/unnamed.jpg',
  items: [
    {
      title: 'Profile',
      url: '/profile',
      icon: User,
    },
    {
      title: 'Settings',
      url: '/settings',
      icon: Gear,
    },
    {
      title: 'GitHub Repo',
      url: 'https://github.com/igornicoletti?tab=repositories',
      icon: GithubLogo,
    },
    {
      title: 'Log out',
      url: '/',
      icon: SignOut,
    },
  ]
}
