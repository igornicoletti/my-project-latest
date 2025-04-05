import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible'
import { ScrollArea } from '@/components/ui/scroll-area'
import { SidebarGroup, SidebarGroupLabel, SidebarMenu, SidebarMenuAction, SidebarMenuButton, SidebarMenuItem, SidebarMenuSub, SidebarMenuSubButton, SidebarMenuSubItem } from '@/components/ui/sidebar'
import { useActive } from '@/hooks'
import { CollapsibleNavProps } from '@/types'
import { CaretRight } from '@phosphor-icons/react'
import { Link } from 'react-router-dom'

export const CollapsibleNavigation = ({ navigations }: CollapsibleNavProps) => {
  const navigationsActive = useActive(navigations)

  return (
    <ScrollArea className='h-full'>
      {navigationsActive.map((nav, navIndex) => (
        <SidebarGroup key={navIndex} className='last:mt-auto'>
          <SidebarGroupLabel>{nav.label}</SidebarGroupLabel>
          <SidebarMenu>
            {nav.items.map((item, itemIndex) => (
              <Collapsible key={itemIndex} asChild defaultOpen={item.isActive}>
                <SidebarMenuItem>
                  <SidebarMenuButton asChild tooltip={item.title} isActive={item.isActive}>
                    <Link to={item.url}>
                      <item.icon weight='duotone' />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                  {item.subitems?.length ? (
                    <>
                      <CollapsibleTrigger asChild>
                        <SidebarMenuAction className='data-[state=open]:rotate-90'>
                          <CaretRight />
                        </SidebarMenuAction>
                      </CollapsibleTrigger>
                      <CollapsibleContent>
                        <SidebarMenuSub>
                          {item.subitems?.map((subItem, subIndex) => (
                            <SidebarMenuSubItem key={subIndex}>
                              <SidebarMenuSubButton asChild isActive={subItem.isActive}>
                                <Link to={subItem.url}>
                                  <span>{subItem.title}</span>
                                </Link>
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
      ))}
    </ScrollArea>
  )
}
