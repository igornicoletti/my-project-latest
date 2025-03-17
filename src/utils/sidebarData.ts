import { SidebarNavProps, SidebarUserProps } from '@/types'
import { AppWindow, GameController, Gear, GithubLogo, SignOut, User } from '@phosphor-icons/react'

export const sidebarNavData: SidebarNavProps[] = [
  {
    title: 'Navigations',
    navigations: [
      {
        icon: AppWindow,
        title: 'Dashboard',
        url: '/dashboard'
      },
    ]
  },
  {
    title: 'Categories',
    categories: [
      {
        icon: GameController,
        isActive: false,
        title: 'Playground',
        items: [
          {
            title: 'Projects',
            url: '/projects'
          },
        ]
      }
    ]
  },
]

export const sidebarUserData: SidebarUserProps = {
  title: 'Igor Nicoletti',
  fallback: '2Ti',
  email: '@igor93nicoletti',
  avatar: '/unnamed.jpg',
  label: 'My account',
  items: [
    {
      icon: User,
      title: 'Profile',
      url: '/profile',
    },
    {
      icon: Gear,
      title: 'Settings',
      url: '/settings',
    },
    {
      icon: GithubLogo,
      title: 'GitHub Repo',
      url: 'https://github.com/igornicoletti?tab=repositories',
    },
    {
      icon: SignOut,
      title: 'Log Out',
      url: '/',
    },
  ]
}
