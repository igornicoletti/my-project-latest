import { BreadcrumbPath, CommandNavigation, SidebarLayout, ThemeToggle } from '@/components'
import { SidebarInset, SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar'
import { LineVertical } from '@phosphor-icons/react'
import { Outlet } from 'react-router-dom'

export const AppPage = () => {
  return (
    <SidebarProvider>
      <SidebarLayout />
      <SidebarInset>
        <header className='flex h-16 shrink-0 items-center gap-2 border-b border-border transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12'>
          <div className='w-full flex items-center justify-between gap-2 px-4'>
            <div className='flex items-center gap-2'>
              <SidebarTrigger className='-ml-1' />
              <LineVertical weight='duotone' />
              <BreadcrumbPath />
            </div>
            <div className='flex items-center gap-2'>
              <CommandNavigation />
              <ThemeToggle asMinimal />
            </div>
          </div>
        </header>
        <div className='h-full flex flex-1 flex-col gap-4 p-4'>
          <Outlet />
        </div>
      </SidebarInset>
    </SidebarProvider>
  )
}
