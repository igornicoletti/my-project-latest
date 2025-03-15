import { Planet } from '@phosphor-icons/react'

export const sidebarNav = [
  {
    label: 'Platform',
    categories: [
      {
        title: 'Playground',
        icon: Planet,
        isActive: false,
        navigations: [
          {
            name: 'Dashboard',
            path: '/dashboard'
          },
          {
            name: 'Projects',
            path: '/projects'
          },
        ]
      }
    ]
  }
]
