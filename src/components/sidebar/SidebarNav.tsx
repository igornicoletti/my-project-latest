import { Collapsible, CollapsibleContent, CollapsibleTrigger, } from '@/components/ui/collapsible'
import { SidebarGroup, SidebarGroupLabel, SidebarMenu, SidebarMenuAction, SidebarMenuButton, SidebarMenuItem, SidebarMenuSub, SidebarMenuSubButton, SidebarMenuSubItem } from '@/components/ui/sidebar'
import { BaseSidebarNavItem, SidebarNavCategory, SidebarNavProps } from '@/types'
import { CaretRight } from '@phosphor-icons/react'
import { Link, useLocation } from 'react-router-dom'

export const SidebarNav = ({ title, items }: SidebarNavProps) => {
  const location = useLocation()

  const isItemActive = (url: string) => location.pathname.startsWith(url)

  const isSidebarCategory = (item: BaseSidebarNavItem | SidebarNavCategory): item is SidebarNavCategory => {
    return 'items' in item
  }

  const isSubGroupActive = (subItems?: { url: string }[]) => {
    return subItems?.some(sub => isItemActive(sub.url))
  }

  return (
    <SidebarGroup className="last:mt-auto">
      {title && <SidebarGroupLabel>{title}</SidebarGroupLabel>}
      <SidebarMenu>
        {items.map((item) => (
          <Collapsible key={item.url || item.title} asChild defaultOpen={isItemActive(item.url) || (isSidebarCategory(item) && isSubGroupActive(item.items))}>
            <SidebarMenuItem>
              <SidebarMenuButton asChild tooltip={item.title} className={isItemActive(item.url) ? 'text-primary' : 'text-muted-foreground'}>
                <Link to={item.url} className="flex items-center space-x-2">
                  {item.icon && <item.icon weight='light' />} {item.title}
                </Link>
              </SidebarMenuButton>
              {isSidebarCategory(item) && item.items.length > 0 && (
                <>
                  <CollapsibleTrigger asChild>
                    <SidebarMenuAction className='data-[state=open]:rotate-90'>
                      <CaretRight weight='light' />
                    </SidebarMenuAction>
                  </CollapsibleTrigger>
                  <CollapsibleContent>
                    <SidebarMenuSub>
                      {item.items.map((subItem, subIndex) => (
                        <SidebarMenuSubItem key={subIndex}>
                          <SidebarMenuSubButton asChild className={isItemActive(subItem.url) ? 'text-primary' : 'text-muted-foreground'}>
                            <Link to={subItem.url}>{subItem.title}</Link>
                          </SidebarMenuSubButton>
                        </SidebarMenuSubItem>
                      ))}
                    </SidebarMenuSub>
                  </CollapsibleContent>
                </>
              )}
            </SidebarMenuItem>
          </Collapsible>
        ))}
      </SidebarMenu>
    </SidebarGroup>
  )
}
