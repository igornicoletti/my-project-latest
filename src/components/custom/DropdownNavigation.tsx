import { AvatarUser } from '@/components'
import { DropdownMenu, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from '@/components/ui/dropdown-menu'
import { SidebarMenu, SidebarMenuButton, SidebarMenuItem, useSidebar } from '@/components/ui/sidebar'
import { userData } from '@/data'
import { DropdownNavProps } from '@/types'
import { CaretUpDown } from '@phosphor-icons/react'
import React from 'react'
import { Link } from 'react-router-dom'

export const DropdownNavigation = ({ navigations }: DropdownNavProps) => {
  const { isMobile } = useSidebar()

  return (
    <SidebarMenu>
      <SidebarMenuItem>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <SidebarMenuButton size='lg'>
              <AvatarUser user={userData} />
              <CaretUpDown weight='duotone' className='ml-auto' />
            </SidebarMenuButton>
          </DropdownMenuTrigger>
          <DropdownMenuContent className='w-[271px]' side={isMobile ? undefined : 'right'} align='end' sideOffset={4}>
            <DropdownMenuLabel>
              <AvatarUser user={userData} />
            </DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuGroup>
              {navigations.map((nav, index) => (
                <React.Fragment key={index}>
                  {index === navigations.length - 1 && <DropdownMenuSeparator />}
                  <DropdownMenuItem asChild>
                    <Link to={nav.url}>
                      <nav.icon weight='duotone' />
                      <span>{nav.title}</span>
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
