import { Avatar, AvatarFallback, AvatarImage, } from '@/components/ui/avatar'
import { DropdownMenu, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from '@/components/ui/dropdown-menu'
import { SidebarMenu, SidebarMenuButton, SidebarMenuItem, useSidebar } from '@/components/ui/sidebar'
import { SidebarUserProps } from '@/types'
import { CaretUpDown } from '@phosphor-icons/react'
import React from 'react'
import { Link } from 'react-router-dom'

export const SidebarUser = ({ avatar, email, fallback, items, title }: SidebarUserProps) => {
  const { isMobile } = useSidebar()

  return (
    <SidebarMenu>
      <SidebarMenuItem>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <SidebarMenuButton size='lg' className='data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground'>
              <Avatar className='h-8 w-8 rounded-full'>
                <AvatarImage src={avatar} alt={title} />
                <AvatarFallback className='rounded-full'>{fallback}</AvatarFallback>
              </Avatar>
              <div className='grid flex-1 text-left text-sm leading-tight'>
                <span className='truncate font-semibold'>{title}</span>
                <span className='truncate text-xs'>{email}</span>
              </div>
              <CaretUpDown className='ml-auto shrink-0' />
            </SidebarMenuButton>
          </DropdownMenuTrigger>
          <DropdownMenuContent className='w-[--radix-dropdown-menu-trigger-width] min-w-56 rounded-lg' align='end' sideOffset={4} side={isMobile ? 'bottom' : 'right'}>
            <DropdownMenuLabel className='flex items-center gap-2'>
              <Avatar className='h-8 w-8 rounded-full'>
                <AvatarImage src={avatar} alt={title} />
                <AvatarFallback className='rounded-full'>{fallback}</AvatarFallback>
              </Avatar>
              <div className='grid flex-1 text-left text-sm leading-tight'>
                <span className='truncate font-semibold'>{title}</span>
                <span className='truncate text-xs'>{email}</span>
              </div>
            </DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuGroup>
              {items.map((item, index) => (
                <React.Fragment key={item.url || index}>
                  {index === items.length - 1 && <DropdownMenuSeparator />}
                  <DropdownMenuItem asChild>
                    <Link to={item.url}>
                      <item.icon weight='light' /> {item.title}
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
