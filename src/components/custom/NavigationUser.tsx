import { AvatarUser } from '@/components'
import { DropdownMenu, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from '@/components/ui/dropdown-menu'
import { SidebarMenu, SidebarMenuButton, SidebarMenuItem, useSidebar } from '@/components/ui/sidebar'
import { NavigationProps, UserProps } from '@/types'
import { CaretUpDown } from '@phosphor-icons/react'
import React from 'react'
import { Link } from 'react-router-dom'

export const NavigationUser = ({ user, navigations }: UserProps & NavigationProps) => {
  const { isMobile } = useSidebar()

  return (
    <SidebarMenu>
      <SidebarMenuItem>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <SidebarMenuButton size="lg">
              <AvatarUser user={user} />
              <CaretUpDown weight="duotone" className='ml-auto' />
            </SidebarMenuButton>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-[271px]" side={isMobile ? undefined : "right"} align="end" sideOffset={4}>
            <DropdownMenuLabel>
              <AvatarUser user={user} />
            </DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuGroup>
              {navigations.map((item, index) => (
                <React.Fragment key={index}>
                  {index === navigations.length - 1 && <DropdownMenuSeparator />}
                  <DropdownMenuItem asChild>
                    <Link to={item.url}>
                      <item.icon weight="duotone" /> {item.title}
                    </Link>
                  </DropdownMenuItem>
                </React.Fragment>
              ))}
            </DropdownMenuGroup>
          </DropdownMenuContent>
        </DropdownMenu>
      </SidebarMenuItem>
    </SidebarMenu>
  )
}
