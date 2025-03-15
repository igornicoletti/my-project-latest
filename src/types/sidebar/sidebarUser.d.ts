export interface SidebarUserProps {
  user: {
    name: string
    fallback: string
    email: string
    avatar: string
    items: {
      title: string
      url: string
      icon: Icon
    }[]
  }
}
