import { Collapsible, CollapsibleContent, CollapsibleTrigger, } from '@/components/ui/collapsible'
import { SidebarGroup, SidebarGroupLabel, SidebarMenu, SidebarMenuAction, SidebarMenuButton, SidebarMenuItem, SidebarMenuSub, SidebarMenuSubButton, SidebarMenuSubItem } from '@/components/ui/sidebar'
import { SidebarNavCategory, SidebarNavItem, SidebarNavProps } from '@/types'
import { CaretRight } from '@phosphor-icons/react'
import { Link, useLocation } from 'react-router-dom'

export const SidebarNav = ({ title, items }: SidebarNavProps) => {
  const location = useLocation()

  const isItemActive = (url: string) =>
    location.pathname.startsWith(url)

  const isSidebarCategory = (item: SidebarNavItem | SidebarNavCategory): item is SidebarNavCategory =>
    !!(item as SidebarNavCategory).items

  const isSubGroupActive = (subItems?: { url: string }[]) =>
    subItems?.some(sub => isItemActive(sub.url))

  return (
    <SidebarGroup className="last:mt-auto">
      {title && <SidebarGroupLabel>{title}</SidebarGroupLabel>}
      <SidebarMenu>
        {items.map((item, index) => (
          <Collapsible key={index} asChild defaultOpen={isItemActive(item.url) || (isSidebarCategory(item) && item.items.length > 0 && isSubGroupActive(item.items))}>
            <SidebarMenuItem>
              <SidebarMenuButton asChild tooltip={item.title} className={isItemActive(item.url) ? '' : 'text-muted-foreground'}>
                <Link to={item.url}>
                  <item.icon weight='light' /> {item.title}
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
                          <SidebarMenuSubButton asChild className={isItemActive(subItem.url) ? '' : 'text-muted-foreground'}>
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
