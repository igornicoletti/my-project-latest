import { SidebarNavProps, SidebarUserProps } from '@/types'
import { AppWindow, Folder, GameController, Gear, SignOut, User } from '@phosphor-icons/react'

export const sidebarNavData: SidebarNavProps[] = [
  {
    title: 'Platform',
    items: [
      {
        icon: GameController,
        url: '/playground',
        isActive: false,
        title: 'Playground',
        items: [
          {
            icon: AppWindow,
            title: 'Dashboard',
            url: '/playground/dashboard'
          },
          {
            icon: Folder,
            title: 'Projects',
            url: '/playground/projects'
          }
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
      icon: SignOut,
      title: 'Sign Out',
      url: '/',
    },
  ]
}
