import { SidebarUserProps } from '@/types'
import { Gear, Question, SignOut } from '@phosphor-icons/react'
import { CreditCard } from 'lucide-react'

export const sidebarUserData: SidebarUserProps = {
  title: 'Igor Nicoletti',
  fallback: '2Ti',
  email: 'igor93nicoletti@gmail.com',
  avatar: '/unnamed.jpg',
  items: [
    {
      icon: Gear,
      title: 'Account Settings',
      url: '/settings',
    },
    {
      icon: CreditCard,
      title: 'Subscription & Billing',
      url: '/settings',
    },
    {
      icon: Question,
      title: 'Help & Suport',
      url: '/settings',
    },
    {
      icon: SignOut,
      title: 'Sign Out',
      url: '/',
    },
  ]
}
