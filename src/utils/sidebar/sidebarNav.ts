import { Briefcase, Compass } from '@phosphor-icons/react'

export const sidebarNav = [
  {
    title: 'Overview',
    url: '#',
    icon: Compass,
    isActive: false,
    items: [
      {
        title: 'Dashboard',
        url: '/dashboard'
      },
      {
        title: 'Analytics',
        url: '/analytics'
      },
    ],
  },
  {
    title: 'Management',
    url: '#',
    icon: Briefcase,
    isActive: false,
    items: [
      {
        title: 'Projects',
        url: '/projects'
      },
      {
        title: 'Teams',
        url: '/teams'
      },
      {
        title: 'Tasks',
        url: '/tasks'
      },
    ],
  },
]
