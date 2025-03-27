import { SidebarNavProps } from '@/types'
import { ChatCircle, Folder, Lifebuoy, ShoppingCart, SquaresFour } from '@phosphor-icons/react'

export const sidebarNavData: SidebarNavProps[] = [
  {
    title: 'Analytics',
    items: [
      {
        title: 'Dashboard',
        url: '/dashboard',
        isActive: false,
        icon: SquaresFour,
        items: []
      },
      {
        title: 'Order',
        url: '/order',
        isActive: false,
        icon: ShoppingCart,
        items: [
          {
            title: 'Projects',
            url: '/order/projects',
            icon: Folder,
          },
        ]
      },
      {
        title: 'Projects',
        url: '/projects',
        icon: Folder,
        isActive: false,
        items: []
      },
    ]
  },
  {
    title: '',
    items: [
      {
        title: 'Support',
        url: '/support',
        icon: Lifebuoy,
        isActive: false,
        items: []
      },
      {
        title: 'Feedback',
        url: '/feedback',
        icon: ChatCircle,
        isActive: false,
        items: []
      },
    ]
  },
]
