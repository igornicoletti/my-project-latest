export interface SidebarNavProps {
  title: string
  navigations?: SidebarNavItem[]
  categories?: SidebarNavCategory[]
}

export interface SidebarNavCategory {
  icon: Icon
  isActive: boolean
  title: string
  items: SidebarNavItem[]
}

export interface SidebarNavItem {
  icon?: Icon
  title: string
  url: string
}

export interface SidebarUserProps {
  title: string
  fallback: string
  email: string
  avatar: string
  label: string
  items: SidebarUserItems[]
}

export interface SidebarUserItems {
  title: string
  url: string
  icon: Icon
}
