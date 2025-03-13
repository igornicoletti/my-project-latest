import { Avatar, AvatarFallback, AvatarImage, DropdownMenu, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger, SidebarMenu, SidebarMenuButton, SidebarMenuItem } from '@/components'
import { CaretUpDown, Icon } from '@phosphor-icons/react'
import { Link } from 'react-router-dom'

type SidebarUserProps = {
  user: {
    name: string
    email: string
    avatar: string
    items: {
      title: string
      url: string
      icon: Icon
    }[]
  }
}

export const SidebarUser = ({ user }: SidebarUserProps) => {
  return (
    <SidebarMenu>
      <SidebarMenuItem>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <SidebarMenuButton className='data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground' size='lg'>
              <Avatar className='h-8 w-8 rounded-lg'>
                <AvatarImage src={user.avatar} alt={user.name} />
                <AvatarFallback className='rounded-lg'>IN</AvatarFallback>
              </Avatar>
              <div className='grid flex-1 text-left text-sm leading-tight'>
                <span className='truncate font-semibold'>{user.name}</span>
                <span className='truncate text-xs'>{user.email}</span>
              </div>
              <CaretUpDown className='ml-auto' weight='duotone' />
            </SidebarMenuButton>
          </DropdownMenuTrigger>
          <DropdownMenuContent className='w-[--radix-dropdown-menu-trigger-width] min-w-56 rounded-lg' align='end' sideOffset={4}>
            <DropdownMenuLabel className='p-0 font-normal'>
              <div className='flex items-center gap-2 px-1 py-1.5 text-left text-sm'>
                <Avatar className='h-8 w-8 rounded-lg'>
                  <AvatarImage src={user.avatar} alt={user.name} />
                  <AvatarFallback className='rounded-lg'>IN</AvatarFallback>
                </Avatar>
                <div className='grid flex-1 text-left text-sm leading-tight'>
                  <span className='truncate font-semibold'>{user.name}</span>
                  <span className='truncate text-xs'>{user.email}</span>
                </div>
              </div>
            </DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuGroup>
              {user.items.map((item, index) => (
                <DropdownMenuItem key={index}>
                  <item.icon weight='duotone' />
                  <Link to={item.url}>{item.title}</Link>
                </DropdownMenuItem>
              ))}
            </DropdownMenuGroup>
          </DropdownMenuContent>
        </DropdownMenu>
      </SidebarMenuItem>
    </SidebarMenu>
  )
}
