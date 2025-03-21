export interface SidebarNavProps {
  title?: string
  items: SidebarNavCategory[]
}

export interface SidebarNavCategory {
  icon: Icon
  url: string
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
  items: SidebarUserItems[]
}

export interface SidebarUserItems {
  title: string
  url: string
  icon: Icon
}
