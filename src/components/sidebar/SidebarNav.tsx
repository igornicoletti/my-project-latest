import { Collapsible, CollapsibleContent, CollapsibleTrigger, SidebarGroup, SidebarGroupLabel, SidebarMenu, SidebarMenuButton, SidebarMenuItem, SidebarMenuSub, SidebarMenuSubButton, SidebarMenuSubItem } from '@/components'
import { SidebarNavProps } from '@/types'
import { CaretRight } from '@phosphor-icons/react'
import { Link, useLocation } from 'react-router-dom'

export const SidebarNav = ({ data }: SidebarNavProps) => {
  const location = useLocation()
  const currentPath = location.pathname

  const isParentActive = (items: { title: string; url: string }[]) => {
    return items.some((item) => currentPath.startsWith(item.url))
  }

  return (
    <>
      {data.map((group) => (
        <SidebarGroup key={group.label}>
          <SidebarGroupLabel>{group.label}</SidebarGroupLabel>
          <SidebarMenu>
            {group.nav.map((item) => {
              return (
                <Collapsible asChild key={item.title} defaultOpen={isParentActive(item.items || [])} className='group/collapsible'>
                  <SidebarMenuItem>
                    <CollapsibleTrigger asChild>
                      <SidebarMenuButton tooltip={item.title} aria-label={item.title}>
                        <item.icon weight='duotone' />
                        <span>{item.title}</span>
                        <CaretRight className='ml-auto transform transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90' />
                      </SidebarMenuButton>
                    </CollapsibleTrigger>
                    <CollapsibleContent>
                      <SidebarMenuSub>
                        {item.items?.map((subItem) => (
                          <SidebarMenuSubItem key={subItem.title}>
                            <SidebarMenuSubButton asChild className={currentPath === subItem.url ? 'text-foreground' : 'text-muted-foreground'}>
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
              )
            })}
          </SidebarMenu>
        </SidebarGroup>
      ))}
    </>
  )
}
