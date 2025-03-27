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
      url: '/account',
    },
    {
      icon: CreditCard,
      title: 'Subscription & Billing',
      url: '/subscription',
    },
    {
      icon: Question,
      title: 'Help & Support',
      url: '/help',
    },
    {
      icon: SignOut,
      title: 'Sign Out',
      url: '/',
    },
  ]
}
