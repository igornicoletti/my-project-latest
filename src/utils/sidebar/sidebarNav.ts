import { Briefcase } from '@phosphor-icons/react'

export const sidebarNav = [
  {
    label: 'Platform',
    nav: [
      {
        title: 'Documentation',
        icon: Briefcase,
        isActive: false,
        items: [
          {
            title: 'Introduction',
            url: '/tutorials'
          },
          {
            title: 'Get Started',
            url: '/tutorials'
          },
          {
            title: 'Tutorials',
            url: '/tutorials'
          },
          {
            title: 'Changelog',
            url: '/tutorials'
          },
          {
            title: 'Dashboard',
            url: '/dashboard'
          },
          {
            title: 'Projects',
            url: '/projects'
          }
        ]
      }
    ]
  }
]
