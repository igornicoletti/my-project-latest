import { NavigationUser } from '@/components'
import { Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel'
import { ScrollArea } from "@/components/ui/scroll-area"
import { Sidebar, SidebarContent, SidebarFooter, SidebarHeader, SidebarMenu, SidebarMenuButton, SidebarMenuItem, SidebarRail } from '@/components/ui/sidebar'
import { navigationData, userData } from '@/data'
import { Binary } from '@phosphor-icons/react'
import Autoplay from 'embla-carousel-autoplay'
import { Link } from 'react-router-dom'
/*
const data = {
  user: {
    name: "shadcn",
    email: "m@example.com",
    avatar: "/avatars/shadcn.jpg",
  },
  navMain: [
    {
      title: "Playground",
      url: "#",
      icon: SquareTerminal,
      isActive: true,
      items: [
        {
          title: "History",
          url: "#",
        },
        {
          title: "Starred",
          url: "#",
        },
        {
          title: "Settings",
          url: "#",
        },
      ],
    },
    {
      title: "Models",
      url: "#",
      icon: Bot,
      items: [
        {
          title: "Genesis",
          url: "#",
        },
        {
          title: "Explorer",
          url: "#",
        },
        {
          title: "Quantum",
          url: "#",
        },
      ],
    },
    {
      title: "Documentation",
      url: "#",
      icon: BookOpen,
      items: [
        {
          title: "Introduction",
          url: "#",
        },
        {
          title: "Get Started",
          url: "#",
        },
        {
          title: "Tutorials",
          url: "#",
        },
        {
          title: "Changelog",
          url: "#",
        },
      ],
    },
    {
      title: "Settings",
      url: "#",
      icon: Settings2,
      items: [
        {
          title: "General",
          url: "#",
        },
        {
          title: "Team",
          url: "#",
        },
        {
          title: "Billing",
          url: "#",
        },
        {
          title: "Limits",
          url: "#",
        },
      ],
    },
  ],
  navSecondary: [
    {
      title: "Support",
      url: "#",
      icon: LifeBuoy,
    },
    {
      title: "Feedback",
      url: "#",
      icon: Send,
    },
  ],
  projects: [
    {
      name: "Design Engineering",
      url: "#",
      icon: Frame,
    },
    {
      name: "Sales & Marketing",
      url: "#",
      icon: PieChart,
    },
    {
      name: "Travel",
      url: "#",
      icon: Map,
    },
  ],
}
 */
export const SidebarLayout = ({ ...props }: React.ComponentProps<typeof Sidebar>) => {
  return (
    <Sidebar collapsible='icon' {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" asChild>
              <Link to=''>
                <div className="flex aspect-square size-8 items-center justify-center">
                  <Binary weight='fill' className='size-8' />
                </div>
                <div className="flex flex-1 items-center text-left text-lg text-muted-foreground font-extralight leading-tight truncate">
                  <span className='text-accent-foreground font-medium'>2Ti.</span>
                  <Carousel orientation='vertical' opts={{ align: 'center', loop: true }} plugins={[Autoplay({ delay: 5000 })]}>
                    <CarouselContent className='h-8 uppercase'>
                      <CarouselItem>
                        <span>Developer</span>
                      </CarouselItem>
                      <CarouselItem>
                        <span>Engineer</span>
                      </CarouselItem>
                      <CarouselItem>
                        <span>Programmer</span>
                      </CarouselItem>
                      <CarouselItem>
                        <span>Coder</span>
                      </CarouselItem>
                      <CarouselItem>
                        <span>Human</span>
                      </CarouselItem>
                    </CarouselContent>
                  </Carousel>
                </div>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <ScrollArea className="h-full p-4">
          <p>i</p>
          <p>g</p>
          <p>i</p>
          <p>g</p>
          <p>i</p>
          <p>g</p>
          <p>i</p>
          <p>g</p>
          <p>i</p>
          <p>g</p>
          <p>i</p>
          <p>g</p>
        </ScrollArea>
      </SidebarContent>
      <SidebarFooter>
        <NavigationUser user={userData} navigations={navigationData} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  )
}
