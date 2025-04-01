import { Icon } from '@phosphor-icons/react'

export interface Navigation {
  title: string
  url: string
  icon: Icon
}

export type NavigationProps = {
  navigations: Navigation[]
}
