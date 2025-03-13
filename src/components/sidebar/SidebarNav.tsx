import { Collapsible, CollapsibleContent, CollapsibleTrigger, SidebarGroup, SidebarGroupLabel, SidebarMenu, SidebarMenuButton, SidebarMenuItem, SidebarMenuSub, SidebarMenuSubButton, SidebarMenuSubItem } from '@/components'
import { CaretRight, Icon } from '@phosphor-icons/react'
import { Link } from 'react-router-dom'

type SidebarNavProps = {
  nav: {
    title: string
    url: string
    icon: Icon
    isActive: boolean
    items: {
      title: string
      url: string
    }[]
  }[]
}

export const SidebarNav = ({ nav }: SidebarNavProps) => {
  return (
    <SidebarGroup>
      <SidebarGroupLabel>Application</SidebarGroupLabel>
      <SidebarMenu>
        {nav.map((item) => (
          <Collapsible asChild key={item.title} defaultOpen={item.isActive} className='group/collapsible'>
            <SidebarMenuItem>
              <CollapsibleTrigger asChild>
                <SidebarMenuButton tooltip={item.title}>
                  <item.icon weight='duotone' />
                  <span>{item.title}</span>
                  <CaretRight className='ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90' />
                </SidebarMenuButton>
              </CollapsibleTrigger>
              <CollapsibleContent>
                <SidebarMenuSub>
                  {item.items?.map((subItem) => (
                    <SidebarMenuSubItem key={subItem.title}>
                      <SidebarMenuSubButton asChild>
                        <Link to={subItem.url}>
                          <span>{subItem.title}</span>
                        </Link>
                      </SidebarMenuSubButton>
                    </SidebarMenuSubItem>
                  ))}
                </SidebarMenuSub>
              </CollapsibleContent>
            </SidebarMenuItem>
          </Collapsible>
        ))}
      </SidebarMenu>
    </SidebarGroup>
  )
}
