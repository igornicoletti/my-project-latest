export interface SidebarNavProps {
  data: {
    label: string
    nav: {
      title: string
      icon: Icon
      isActive: boolean
      items: {
        title: string
        url: string
      }[]
    }[]
  }[]
}
