import { IconProps } from '@phosphor-icons/react'

export type Icon = React.ComponentType<IconProps>

export interface BaseSidebarNavItem {
  icon?: Icon
  url: string
  title: string
}

export interface SidebarNavCategory extends BaseSidebarNavItem {
  isActive?: boolean
  items: BaseSidebarNavItem[]
}

export interface SidebarNavProps {
  title?: string
  items: (BaseSidebarNavItem | SidebarNavCategory)[]
}

export interface SidebarUserProps {
  title: string
  fallback: string
  email: string
  avatar: string
  items: SidebarUserItems[]
}

export interface SidebarUserItems {
  title: string
  url: string
  icon: Icon
}
