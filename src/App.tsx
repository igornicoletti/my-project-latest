import { BreadcrumbPath, CommandNavigation, SidebarLayout, ThemeToggle } from '@/components'
import { SidebarInset, SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar'
import { LineVertical } from '@phosphor-icons/react'
import { Outlet } from 'react-router-dom'

export const AppPage = () => {
  return (
    <SidebarProvider>
      <SidebarLayout />
      <SidebarInset>
        <header className='flex h-16 shrink-0 items-center justify-between gap-2 px-4 border-b border-border ease-linear transition-[width,height] group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12'>
          <div className='flex items-center gap-2'>
            <SidebarTrigger />
            <LineVertical />
            <BreadcrumbPath />
          </div>
          <div className='flex items-center gap-2'>
            <CommandNavigation />
            <ThemeToggle asMinimal />
          </div>
        </header>
        <div className='h-full flex flex-1 flex-col gap-4 p-4'>
          <Outlet />
        </div>
      </SidebarInset>
    </SidebarProvider>
  )
}
