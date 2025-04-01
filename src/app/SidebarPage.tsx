/* import { BreadcrumbPath, SidebarCommand, SidebarNav, ThemeToggle } from '@/components'
import { Carousel, CarouselContent, CarouselItem, Sidebar, SidebarContent, SidebarFooter, SidebarHeader, SidebarInset, SidebarMenu, SidebarMenuButton, SidebarMenuItem, SidebarProvider, SidebarRail, SidebarTrigger } from '@/components/ui'
import { sidebarNavData } from '@/utils'
import { Binary, LineVertical } from '@phosphor-icons/react'
import Autoplay from 'embla-carousel-autoplay'
import { Outlet } from 'react-router-dom'


export const SidebarPage = () => {

  return (
    <SidebarProvider>
      <Sidebar collapsible='icon' variant='inset'>
        <SidebarHeader>
          <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton size="lg" className='data-[slot=sidebar-menu-button]:!p-0'>
                <div className="flex aspect-square items-center justify-center">
                  <Binary className='size-8 shrink-0' weight='fill' />
                </div>
                <div className="flex flex-col leading-none">
                  <Carousel orientation='vertical' opts={{ align: 'center', loop: true }} plugins={[Autoplay({ delay: 10000 })]}>
                    <CarouselContent className='h-10'>
                      {Array.from({ length: 2 }).map((_, index) => (
                        <CarouselItem key={index}>
                          <h1 className='truncate text-2xl font-medium'>
                            2Ti
                            <span className='text-muted-foreground font-extralight'>
                              CO<span className='inline-block -scale-x-100'>C</span>E
                            </span>
                          </h1>
                        </CarouselItem>
                      ))}
                    </CarouselContent>
                  </Carousel>
                </div>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarHeader>
        <SidebarContent>
          {sidebarNavData.map((data, index) => (
            <SidebarNav key={index} {...data} />
          ))}
        </SidebarContent>
        <SidebarFooter>
        </SidebarFooter>
        <SidebarRail />
      </Sidebar>
      <SidebarInset>
        <header className="flex h-16 shrink-0 items-center justify-between gap-2 px-4 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12">
          <div className="flex items-center gap-2">
            <SidebarTrigger />
            <LineVertical weight='duotone' />
            <BreadcrumbPath />
          </div>
          <div className='flex items-center gap-2'>
            <SidebarCommand />
            <ThemeToggle asMinimal />
          </div>
        </header>
        <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
          <Outlet />
        </div>
      </SidebarInset>
    </SidebarProvider>
  )
}
 */
