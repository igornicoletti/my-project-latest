import { Collapsible, CollapsibleContent, CollapsibleTrigger, SidebarGroup, SidebarGroupLabel, SidebarMenu, SidebarMenuButton, SidebarMenuItem, SidebarMenuSub, SidebarMenuSubButton, SidebarMenuSubItem } from '@/components/ui'
import { SidebarNavProps } from '@/types'
import { CaretRight } from '@phosphor-icons/react'
import { Link, useLocation } from 'react-router-dom'

export const SidebarNav = ({ title, categories, navigations }: SidebarNavProps) => {
  const location = useLocation()
  const currentPath = location.pathname

  return (
    <SidebarGroup>
      <SidebarGroupLabel>{title}</SidebarGroupLabel>
      <SidebarMenu>
        {navigations?.map((navigate, i) => (
          <SidebarMenuItem key={i}>
            <SidebarMenuButton asChild tooltip={navigate.title} aria-label={navigate.title}>
              <Link to={navigate.url}>
                <navigate.icon className='shrink-0' weight='thin' />
                <span>{navigate.title}</span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        ))}
        {categories?.map((category, i) => (
          <Collapsible asChild key={i} className='group/collapsible'>
            <SidebarMenuItem>
              <CollapsibleTrigger asChild>
                <SidebarMenuButton tooltip={category.title} aria-label={category.title}>
                  <category.icon className='shrink-0' weight='thin' />
                  <span>{category.title}</span>
                  <CaretRight weight='thin' className='shrink-0 ml-auto transform transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90' />
                </SidebarMenuButton>
              </CollapsibleTrigger>
              <CollapsibleContent>
                <SidebarMenuSub>
                  {category.items?.map((item) => (
                    <SidebarMenuSubItem key={item.title}>
                      <SidebarMenuSubButton asChild className={currentPath === item.url ? '' : 'text-muted-foreground'}>
                        <Link to={item.url}>{item.title}</Link>
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
