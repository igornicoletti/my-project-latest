import { SidebarBreadcrumb, SidebarCommand, SidebarNav, SidebarUser, ThemeToggle } from '@/components'
import { Carousel, CarouselContent, CarouselItem, Sidebar, SidebarContent, SidebarFooter, SidebarHeader, SidebarInset, SidebarMenu, SidebarMenuButton, SidebarMenuItem, SidebarProvider, SidebarTrigger } from '@/components/ui'
import { sidebarNavData, sidebarUserData } from '@/utils'
import { Binary, LineVertical } from '@phosphor-icons/react'
import Autoplay from 'embla-carousel-autoplay'

export const SidebarPage = () => {

  return (
    <SidebarProvider>
      <Sidebar collapsible='icon' variant='inset' aria-label='Main Sidebar'>
        <SidebarHeader>

          <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton className='px-0 hover:bg-transparent' size='lg'>
                <div className='flex aspect-square items-center justify-center'>
                  <Binary className='size-8 shrink-0' weight='fill' />
                </div>
                <Carousel orientation='vertical' opts={{ align: 'center', loop: true }} plugins={[Autoplay({ delay: 10000 })]}>
                  <CarouselContent className='h-10'>
                    {Array.from({ length: 2 }).map((_, index) => (
                      <CarouselItem key={index} className='flex items-center'>
                        <h1 className='truncate text-2xl font-medium'>
                          2Ti
                          <span className='text-muted-foreground font-light'>
                            CO<span className='inline-block -scale-x-100'>C</span>E
                          </span>
                        </h1>
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                </Carousel>
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
          <SidebarUser {...sidebarUserData} />
        </SidebarFooter>
      </Sidebar>
      <SidebarInset>
        <header className='flex h-16 items-center justify-between gap-2 p-4'>
          <div className='flex items-center gap-2'>
            <SidebarTrigger aria-label='Menu Toggle' />
            <LineVertical className='shrink-0' weight='thin' />
            <SidebarBreadcrumb />
          </div>
          <div className='flex items-center gap-2'>
            <SidebarCommand />
            <ThemeToggle />
          </div>
        </header>
        <main className='flex flex-1 flex-col gap-2 p-4 pt-0'>
          <div className='min-h-min flex-1 rounded-xl'>
          </div>
        </main>
      </SidebarInset>
    </SidebarProvider>
  )
}
