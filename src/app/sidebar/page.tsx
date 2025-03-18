import { CommandMenu, SidebarBreadcrumb, SidebarNav, SidebarUser, ThemeToggle } from '@/components'
import { Sidebar, SidebarContent, SidebarFooter, SidebarHeader, SidebarInset, SidebarProvider, SidebarTrigger, } from '@/components/ui'
import { sidebarNavData, sidebarUserData } from '@/utils'
import { Binary, LineVertical } from '@phosphor-icons/react'

export const SidebarPage = () => {
  return (
    <SidebarProvider>
      <Sidebar variant='inset' aria-label='Main Sidebar'>
        <SidebarHeader>
          <div className='flex items-center gap-2 py-2'>
            <Binary className='size-6 shrink-0' weight='fill' />
            <h1 className='truncate text-xl font-medium'>
              2Ti
              <span className='font-light'>
                CO<span className='inline-block -scale-x-100'>C</span>E
              </span>
            </h1>
          </div>
        </SidebarHeader>
        <SidebarContent>
          {sidebarNavData.map((data, i) => (
            <SidebarNav key={i} {...data} />
          ))}
        </SidebarContent>
        <SidebarFooter>
          <SidebarUser {...sidebarUserData} />
        </SidebarFooter>
      </Sidebar>
      <SidebarInset>
        <header className='flex h-16 items-center justify-between gap-2 px-4'>
          <div className='flex items-center gap-2'>
            <SidebarTrigger aria-label='Menu Toggle' />
            <LineVertical className='shrink-0' weight='thin' />
            <SidebarBreadcrumb />
          </div>
          <div className='flex items-center gap-2'>
            <ThemeToggle />
            <CommandMenu />
          </div>
        </header>
        <main className='flex flex-1 flex-col gap-4 p-4 pt-0'>
          <div className='min-h-min flex-1 rounded-xl'>
          </div>
        </main>
      </SidebarInset>
    </SidebarProvider>
  )
}
