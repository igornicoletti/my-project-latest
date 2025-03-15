import { Avatar, AvatarFallback, AvatarImage, DropdownMenu, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger, SidebarMenu, SidebarMenuButton, SidebarMenuItem } from '@/components'
import { SidebarUserProps } from '@/types'
import { CaretUpDown } from '@phosphor-icons/react'
import React from 'react'
import { Link } from 'react-router-dom'

export const SidebarUser = ({ user }: SidebarUserProps) => {
  return (
    <SidebarMenu>
      <SidebarMenuItem>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <SidebarMenuButton size='lg' className='data-[state=open]:bg-sidebar-accent'>
              <Avatar className='h-8 w-8 rounded-full'>
                <AvatarImage src={user.avatar} alt={user.name} />
                <AvatarFallback className='rounded-full'>{user.fallback}</AvatarFallback>
              </Avatar>
              <div className='grid flex-1 text-left text-sm leading-tight'>
                <span className='truncate font-semibold'>{user.name}</span>
                <span className='truncate text-xs text-muted-foreground'>{user.email}</span>
              </div>
              <CaretUpDown className='ml-auto' />
            </SidebarMenuButton>
          </DropdownMenuTrigger>
          <DropdownMenuContent className='w-[--radix-dropdown-menu-trigger-width] min-w-56 rounded-lg' align='end' sideOffset={4} aria-label='User Actions'>
            <DropdownMenuLabel className='px-1 py-1.5 text-left text-sm leading-tight font-sidebar'>
              <span className='truncate'>My Account</span>
            </DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuGroup>
              {user.items.map((item, index) => (
                <React.Fragment key={item.url || index}>
                  {index === user.items.length - 1 && <DropdownMenuSeparator />}
                  <DropdownMenuItem asChild aria-label={item.title}>
                    <Link
                      to={item.url}
                      target={item.title === 'GitHub Repo' ? '_blank' : undefined}
                      rel={item.title === 'GitHub Repo' ? 'noopener noreferrer' : undefined}>
                      <item.icon weight='duotone' />
                      <span>{item.title}</span>
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
