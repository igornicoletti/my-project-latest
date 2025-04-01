import { SidebarNavProps } from '@/types'
import { AppWindow, ChatText, Folder, Question, ShoppingCartSimple } from '@phosphor-icons/react'

export const sidebarNavData: SidebarNavProps[] = [
  {
    title: 'App',
    items: [
      {
        title: 'Dashboard',
        url: '/dashboard',
        isActive: false,
        icon: AppWindow,
        items: []
      },
      {
        title: 'Order',
        url: '/order',
        isActive: false,
        icon: ShoppingCartSimple,
        items: [
          {
            title: 'Products',
            url: '/order/products',
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
        url: '/support',
        icon: Question,
        isActive: false,
        items: []
      },
      {
        title: 'Feedback',
        url: '/feedback',
        icon: ChatText,
        isActive: false,
        items: []
      },
    ]
  },
]
