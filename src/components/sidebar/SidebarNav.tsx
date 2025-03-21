import { Collapsible, CollapsibleContent, CollapsibleTrigger, SidebarGroup, SidebarGroupLabel, SidebarMenu, SidebarMenuAction, SidebarMenuButton, SidebarMenuItem, SidebarMenuSub, SidebarMenuSubButton, SidebarMenuSubItem } from '@/components/ui'
import { SidebarNavProps } from '@/types'
import { CaretRight } from '@phosphor-icons/react'
import { Link, useLocation } from 'react-router-dom'

export const SidebarNav = ({ title, items }: SidebarNavProps) => {
  const location = useLocation()

  const isItemActive = (url: string) => location.pathname.startsWith(url)

  const isSubGroupActive = (subItems?: { url: string }[]) =>
    subItems?.some(sub => isItemActive(sub.url))

  return (
    <SidebarGroup className="last:mt-auto">
      {title && <SidebarGroupLabel>{title}</SidebarGroupLabel>}
      <SidebarMenu>
        {items.map((item, index) => (
          <Collapsible key={index} asChild defaultOpen={isItemActive(item.url) || isSubGroupActive(item.items)}>
            <SidebarMenuItem>
              <SidebarMenuButton asChild tooltip={item.title} className={isItemActive(item.url) ? '' : 'text-muted-foreground'}>
                <Link to={item.url}>
                  <item.icon className='shrink-0' weight='thin' /> {item.title}
                </Link>
              </SidebarMenuButton>
              {item.items?.length ? (
                <>
                  <CollapsibleTrigger asChild>
                    <SidebarMenuAction className='data-[state=open]:rotate-90'>
                      <CaretRight className='shrink-0' weight='thin' />
                    </SidebarMenuAction>
                  </CollapsibleTrigger>
                  <CollapsibleContent>
                    <SidebarMenuSub>
                      {item.items.map((subItem, index) => (
                        <SidebarMenuSubItem key={index}>
                          <SidebarMenuSubButton asChild className={isItemActive(subItem.url) ? '' : 'text-muted-foreground'}>
                            <Link to={subItem.url}>{subItem.title}</Link>
                          </SidebarMenuSubButton>
                        </SidebarMenuSubItem>
                      ))}
                    </SidebarMenuSub>
                  </CollapsibleContent>
                </>
              ) : null}
            </SidebarMenuItem>
          </Collapsible>
        ))}
      </SidebarMenu>
    </SidebarGroup>
  )
}
