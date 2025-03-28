import { SidebarNavProps } from '@/types'
import { AppWindow, Folder, Headset, PaperPlaneTilt, ShoppingCartSimple } from '@phosphor-icons/react'

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
        icon: ShoppingCartSimple,
        items: [
          {
            title: 'Products',
            url: '/app/order/products',
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
        icon: Headset,
        isActive: false,
        items: []
      },
      {
        title: 'Feedback',
        url: '/app/feedback',
        icon: PaperPlaneTilt,
        isActive: false,
        items: []
      },
    ]
  },
]
