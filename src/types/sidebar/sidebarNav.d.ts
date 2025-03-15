export interface SidebarNavProps {
  sidebarNav: {
    label: string
    categories: {
      title: string
      icon: Icon
      isActive: boolean
      navigations: {
        name: string
        path: string
      }[]
    }[]
  }[]
}
