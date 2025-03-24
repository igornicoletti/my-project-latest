export interface SidebarNavProps {
  title?: string
  items: (SidebarNavItem | SidebarNavCategory)[]
}

export interface SidebarNavCategory {
  icon: Icon
  url: string
  title: string
  isActive?: boolean
  items: SidebarNavItem[]
}

export interface SidebarNavItem {
  icon?: Icon
  url: string
  title: string
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
