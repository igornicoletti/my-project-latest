import { SidebarNavProps } from '@/types'
import { ChatCircle, Folder, MagnifyingGlass, Question, ShoppingCart, SquaresFour } from '@phosphor-icons/react'

export const sidebarNavData: SidebarNavProps[] = [
  {
    title: '',
    items: [
      {
        icon: MagnifyingGlass,
        url: '',
        isActive: false,
        title: 'Search',
        items: []
      },
    ]
  },
  {
    title: 'Analytics',
    items: [
      {
        icon: SquaresFour,
        url: '/dashboard',
        isActive: false,
        title: 'Dashboard',
        items: [
          {
            icon: ShoppingCart,
            url: '/dashboard/order',
            title: 'Order',
          },
          {
            icon: Folder,
            url: '/dashboard/projects',
            title: 'Projects',
          },
        ]
      },
    ]
  },
  {
    title: '',
    items: [
      {
        icon: Question,
        url: '/support',
        isActive: false,
        title: 'Support',
        items: []
      },
      {
        icon: ChatCircle,
        url: '/feedback',
        isActive: false,
        title: 'Feedback',
        items: []
      },
    ]
  },
]
