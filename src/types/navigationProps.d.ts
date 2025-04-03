import { Icon } from '@phosphor-icons/react'

/* DropdownNavigation */
export interface DropdownNavItem {
  title: string
  url: string
  icon: Icon
}

export type DropdownNavProps = {
  navigations: DropdownNavItem[]
}

/* CollapsibleNavigation */
interface CollapsibleNavSubitem {
  title: string
  icon: Icon
  url: string
  isActive?: boolean
}

interface CollapsibleNavItem {
  title: string
  url: string
  icon: Icon
  isActive?: boolean
  subitems?: CollapsibleNavSubitem[]
}

export interface CollapsibleNavCategory {
  label: string
  items: CollapsibleNavItem[]
}

export type CollapsibleNavProps = {
  navigations: CollapsibleNavCategory[]
}
