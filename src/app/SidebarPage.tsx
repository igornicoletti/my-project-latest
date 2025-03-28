import { SidebarBreadcrumb, SidebarCommand, SidebarNav, SidebarProfile, ThemeToggle } from '@/components'
import { Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel'
import { Sidebar, SidebarContent, SidebarFooter, SidebarHeader, SidebarInset, SidebarMenu, SidebarMenuButton, SidebarMenuItem, SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar'
import { sidebarNavData, sidebarUserData } from '@/utils'
import { Binary, LineVertical } from '@phosphor-icons/react'
import Autoplay from 'embla-carousel-autoplay'
import { Link, Outlet } from 'react-router-dom'

export const SidebarPage = () => {

  return (
    <SidebarProvider>
      <Sidebar collapsible='icon' variant='floating'>
        <SidebarHeader>
          <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton asChild className='data-[slot=sidebar-menu-button]:!p-0'>
                <Link to='/app/dashboard'>
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
                </Link>
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
          <SidebarProfile {...sidebarUserData} />
        </SidebarFooter>
      </Sidebar>
      <SidebarInset>
        <header className='flex h-14 shrink-0 items-center justify-between gap-2 p-2'>
          <div className='flex items-center gap-2'>
            <SidebarTrigger />
            <LineVertical weight='light' />
            <SidebarBreadcrumb sidebarNavData={sidebarNavData} />
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
