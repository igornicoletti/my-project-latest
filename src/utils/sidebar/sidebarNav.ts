import { Code } from '@phosphor-icons/react'

export const sidebarNav = [
  {
    label: 'Platform',
    nav: [
      {
        title: 'Playground',
        icon: Code,
        isActive: false,
        items: [
          {
            title: 'Dashboard',
            url: '/dashboard'
          },
          {
            title: 'Projects',
            url: '/all/projects'
          },
        ]
      }
    ]
  }
]
