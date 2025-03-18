import { Avatar, AvatarFallback, AvatarImage, DropdownMenu, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger, SidebarMenu, SidebarMenuButton, SidebarMenuItem } from '@/components/ui'
import { SidebarUserProps } from '@/types'
import { CaretUpDown } from '@phosphor-icons/react'
import React from 'react'
import { Link } from 'react-router-dom'

export const SidebarUser = ({ avatar, email, fallback, items, title, label }: SidebarUserProps) => {
  return (
    <SidebarMenu>
      <SidebarMenuItem>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <SidebarMenuButton className='data-[state=open]:bg-sidebar-accent' size='lg'>
              <Avatar className='h-8 w-8 rounded-full'>
                <AvatarImage src={avatar} alt={title} />
                <AvatarFallback className='rounded-full'>{fallback}</AvatarFallback>
              </Avatar>
              <div className='grid flex-1'>
                <span className='truncate font-semibold'>{title}</span>
                <span className='truncate text-xs text-muted-foreground'>{email}</span>
              </div>
              <CaretUpDown className='ml-auto shrink-0' />
            </SidebarMenuButton>
          </DropdownMenuTrigger>
          <DropdownMenuContent className='w-[--radix-dropdown-menu-trigger-width] min-w-56 rounded-lg' align='end' sideOffset={4} aria-label='User Actions'>
            <DropdownMenuLabel className='p-2'>{label}</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuGroup>
              {items.map((item, i) => (
                <React.Fragment key={item.url || i}>
                  {i === items.length - 1 && <DropdownMenuSeparator />}
                  <DropdownMenuItem asChild aria-label={item.title}>
                    <Link to={item.url}>
                      <item.icon className='shrink-0' weight='duotone' />
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
