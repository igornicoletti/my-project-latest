import { Sidebar, SidebarBreadcrumb, SidebarContent, SidebarFooter, SidebarHeader, SidebarInset, SidebarNav, SidebarProvider, SidebarTrigger, SidebarUser, ThemeToggle } from '@/components'
import { sidebarNavData, sidebarUserData } from '@/utils'
import { CrownSimple, LineVertical } from '@phosphor-icons/react'

export const SidebarPage = () => {
  return (
    <SidebarProvider>
      <Sidebar variant='inset' aria-label='Main Sidebar'>
        <SidebarHeader>
          <div className='flex items-center gap-2 p-2'>
            <CrownSimple className='size-6 shrink-0' weight='duotone' />
            <h1 className='truncate font-medium text-xl'>Pineapple</h1>
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
            <LineVertical className='shrink-0' weight='duotone' />
            <SidebarBreadcrumb />
          </div>
          <ThemeToggle />
        </header>
        <main className='flex flex-1 flex-col gap-4 p-4 pt-0'>
          <div className='min-h-min flex-1 rounded-xl'>
          </div>
        </main>
      </SidebarInset>
    </SidebarProvider>
  )
}
