import { SidebarBreadcrumb, SidebarCommand, SidebarLogo, SidebarNav, SidebarUser, ThemeToggle } from '@/components'
import { Sidebar, SidebarContent, SidebarFooter, SidebarHeader, SidebarInset, SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar'
import { sidebarNavData, sidebarUserData } from '@/utils'
import { LineVertical } from '@phosphor-icons/react'
import { Outlet } from 'react-router-dom'

export const SidebarPage = () => {
  return (
    <SidebarProvider>
      <Sidebar collapsible='icon' variant='floating'>
        <SidebarHeader>
          <SidebarLogo />
        </SidebarHeader>
        <SidebarContent>
          {sidebarNavData.map((data, index) => (
            <SidebarNav key={index} {...data} />
          ))}
        </SidebarContent>
        <SidebarFooter>
          <SidebarUser {...sidebarUserData} />
        </SidebarFooter>
      </Sidebar>
      <SidebarInset>
        <header className='flex h-14 shrink-0 items-end justify-between gap-2 p-2'>
          <div className='flex items-center gap-2'>
            <SidebarTrigger />
            <LineVertical weight='light' />
            <SidebarBreadcrumb />
          </div>
          <div className='flex items-center gap-2'>
            <SidebarCommand />
            <ThemeToggle />
          </div>
        </header>
        <div className="flex flex-1 flex-col gap-4 p-2">
          <div className="flex-1 rounded-xl md:min-h-min">
            <Outlet />
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  )
}
