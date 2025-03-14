import { Sidebar, SidebarBreadcrumb, SidebarContent, SidebarFooter, SidebarHeader, SidebarInset, SidebarMenu, SidebarMenuButton, SidebarMenuItem, SidebarNav, SidebarProvider, SidebarTrigger, SidebarUser, ThemeToggle } from '@/components'
import { sidebarNav, sidebarUser } from '@/utils'
import { Binary } from '@phosphor-icons/react'
import { Link } from 'react-router-dom'

export const SidebarPage = () => {
  return (
    <SidebarProvider>
      <Sidebar variant='inset' aria-label='Main Sidebar'>
        <SidebarHeader>
          <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton size='lg' asChild aria-label='Perfil de Igor Nicoletti'>
                <Link to={'#'} className='flex items-center gap-2'>
                  <div className='flex aspect-square items-center justify-center'>
                    <Binary className='size-8' />
                  </div>
                  <div className='grid flex-1 text-left text-sm leading-tight'>
                    <span className='truncate font-semibold'>igor93nicoletti</span>
                    <span className='truncate text-xs'>Front-End Developer</span>
                  </div>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarHeader>
        <SidebarContent>
          <SidebarNav data={sidebarNav} />
        </SidebarContent>
        <SidebarFooter>
          <SidebarUser user={sidebarUser} />
        </SidebarFooter>
      </Sidebar>
      <SidebarInset>
        <header className='flex h-16 items-center justify-between gap-2 p-4'>
          <div className='flex items-center gap-2'>
            <SidebarTrigger aria-label='Menu Toggle' />
            <div className='h-4 border-l' />
            <SidebarBreadcrumb data={sidebarNav} />
          </div>
          <ThemeToggle />
        </header>
        <main className='flex flex-1 flex-col gap-4 p-4 pt-0'>
          <div className='min-h-min flex-1 rounded-xl' />
        </main>
      </SidebarInset>
    </SidebarProvider>
  )
}
