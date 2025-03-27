import { SidebarNavProps } from '@/types'
import { AppWindow, ChatCircle, Folder, Lifebuoy, ShoppingCart } from '@phosphor-icons/react'

export const sidebarNavData: SidebarNavProps[] = [
  {
    title: 'App',
    items: [
      {
        title: 'Dashboard',
        url: '/app/dashboard',
        isActive: false,
        icon: AppWindow,
        items: []
      },
      {
        title: 'Order',
        url: '/app/order',
        isActive: false,
        icon: ShoppingCart,
        items: [
          {
            title: 'Projects',
            url: '/app/order/projects',
            icon: Folder,
          },
        ]
      },
    ]
  },
  {
    title: '',
    items: [
      {
        title: 'Support',
        url: '/app/support',
        icon: Lifebuoy,
        isActive: false,
        items: []
      },
      {
        title: 'Feedback',
        url: '/app/feedback',
        icon: ChatCircle,
        isActive: false,
        items: []
      },
    ]
  },
]
