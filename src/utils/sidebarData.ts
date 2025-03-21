import { SidebarNavProps, SidebarUserProps } from '@/types'
import { Folder, Gear, Lifebuoy, PaperPlaneTilt, SignOut, SquaresFour, User } from '@phosphor-icons/react'

export const sidebarNavData: SidebarNavProps[] = [
  {
    title: 'App',
    items: [
      {
        icon: SquaresFour,
        url: '/dashboard',
        isActive: false,
        title: 'Dashboard',
        items: []
      },
      {
        icon: Folder,
        url: '/projects',
        isActive: false,
        title: 'Projects',
        items: []
      },
    ]
  },
  {
    items: [
      {
        icon: Lifebuoy,
        url: '/support',
        isActive: false,
        title: 'Support',
        items: []
      },
      {
        icon: PaperPlaneTilt,
        url: '/feedback',
        isActive: false,
        title: 'Feedback',
        items: []
      },
    ]
  },
]

export const sidebarUserData: SidebarUserProps = {
  title: 'Igor Nicoletti',
  fallback: '2Ti',
  email: 'igor93nicoletti@gmail.com',
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
