import { Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel'
import { SidebarMenu, SidebarMenuButton, SidebarMenuItem } from '@/components/ui/sidebar'
import { LogoProps } from '@/types'
import Autoplay from 'embla-carousel-autoplay'
import { Link } from 'react-router-dom'

export const CarouselLogo = ({ logo }: LogoProps) => {

  return (
    <SidebarMenu>
      <SidebarMenuItem>
        <SidebarMenuButton size='lg' asChild>
          <Link to=''>
            <div className='flex aspect-square size-8 items-center justify-center'>
              <logo.icon weight='fill' className='size-8' />
            </div>
            <div className='flex flex-1 items-center text-left text-xl leading-tight truncate'>
              <span className='font-semibold'>{logo.name}</span>
              <Carousel orientation='vertical' opts={{ align: 'center', loop: true }} plugins={[Autoplay({ delay: 5000 })]}>
                <CarouselContent className='h-8 text-muted-foreground uppercase'>
                  {logo.items.map((item, index) => (
                    <CarouselItem key={index}>
                      <span>{item.title}</span>
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
