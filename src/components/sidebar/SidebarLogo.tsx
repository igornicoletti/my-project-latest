import { Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel'
import { SidebarMenu, SidebarMenuButton, SidebarMenuItem } from '@/components/ui/sidebar'
import { Binary } from '@phosphor-icons/react'
import Autoplay from 'embla-carousel-autoplay'
import { Link } from 'react-router-dom'

export const SidebarLogo = () => {
  return (
    <SidebarMenu>
      <SidebarMenuItem>
        <SidebarMenuButton asChild className='data-[slot=sidebar-menu-button]:!p-0'>
          <Link to=''>
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
  )
}
