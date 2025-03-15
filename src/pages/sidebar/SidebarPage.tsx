import { Sidebar, SidebarBreadcrumb, SidebarContent, SidebarFooter, SidebarHeader, SidebarInset, SidebarNav, SidebarProvider, SidebarTrigger, SidebarUser, ThemeToggle } from '@/components'
import { sidebarNav, sidebarUser } from '@/utils'
import { CrownSimple } from '@phosphor-icons/react'

export const SidebarPage = () => {
  return (
    <SidebarProvider>
      <Sidebar variant='inset' aria-label='Main Sidebar'>
        <SidebarHeader>
          <div className='flex items-center gap-2 p-2'>
            <div className='flex items-center justify-center shrink-0'>
              <CrownSimple className='size-6' weight='duotone' />
            </div>
            <h1 className='truncate font-medium text-xl flex-1'>Pineapple</h1>
          </div>
        </SidebarHeader>
        <SidebarContent>
          <SidebarNav sidebarNav={sidebarNav} />
        </SidebarContent>
        <SidebarFooter>
          <SidebarUser user={sidebarUser} />
        </SidebarFooter>
      </Sidebar>
      <SidebarInset>
        <header className='flex h-16 items-center justify-between gap-4 p-4'>
          <div className='flex items-center gap-2'>
            <SidebarTrigger aria-label='Menu Toggle' />
            <div className='h-4 border-l' />
            <SidebarBreadcrumb sidebarNav={sidebarNav} />
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
