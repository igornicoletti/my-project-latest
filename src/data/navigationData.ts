import { CollapsibleNavCategory, DropdownNavItem, } from '@/types'
import { AppWindow, BellSimple, ChatText, Folder, Gear, Question, ShoppingCartSimple, SignOut, User } from '@phosphor-icons/react'

export const dropdownNavData: DropdownNavItem[] = [
  {
    icon: User,
    title: 'Profile',
    url: '/account',
  },
  {
    icon: Gear,
    title: 'Settings',
    url: '/billing',
  },
  {
    icon: BellSimple,
    title: 'Notification',
    url: '/notify',
  },
  {
    icon: SignOut,
    title: 'Sign Out',
    url: '/',
  },
]

export const collapsibleNavData: CollapsibleNavCategory[] = [
  {
    label: "App",
    items: [
      {
        title: "Dashboard",
        url: "/dashboard",
        icon: AppWindow,
        isActive: false,
        subitems: [],
      },
      {
        title: "Orders",
        url: "/orders",
        icon: ShoppingCartSimple,
        isActive: false,
        subitems: [
          {
            title: "Products",
            icon: Folder,
            url: "/orders/products",
          },
        ],
      },
    ],
  },
  {
    label: "",
    items: [
      {
        title: "Support",
        url: "/support",
        icon: Question,
        isActive: false,
        subitems: [],
      },
      {
        title: "Feedback",
        url: "/feedback",
        icon: ChatText,
        isActive: false,
        subitems: [],
      },
    ],
  },
]
