import { CarouselLogo, CollapsibleNavigation, CommandNavigation, DropdownNavigation } from '@/components'
import { Sidebar, SidebarContent, SidebarFooter, SidebarHeader, SidebarRail } from '@/components/ui/sidebar'
import { collapsibleNavData, dropdownNavData, logoData } from '@/data'

export const SidebarLayout = ({ ...props }: React.ComponentProps<typeof Sidebar>) => {

  return (
    <Sidebar collapsible='icon' {...props}>
      <SidebarHeader>
        <CarouselLogo logo={logoData} />
      </SidebarHeader>
      <SidebarContent>
        <CollapsibleNavigation navigations={collapsibleNavData} />
      </SidebarContent>
      <SidebarFooter>
        <CommandNavigation />
        <DropdownNavigation navigations={dropdownNavData} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  )
}
