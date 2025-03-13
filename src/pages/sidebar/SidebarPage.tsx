import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator, Separator, Sidebar, SidebarContent, SidebarFooter, SidebarHeader, SidebarInset, SidebarMenu, SidebarMenuButton, SidebarMenuItem, SidebarNav, SidebarProvider, SidebarTrigger, SidebarUser, ThemeToggle } from '@/components'
import { sidebarNav, sidebarUser } from '@/utils'
import { Binary } from '@phosphor-icons/react'
import { Link, useLocation } from 'react-router-dom'

export const SidebarPage = () => {
  const location = useLocation()
  const segments = location.pathname.split('/').filter(Boolean)
  let path = ''
  const firstSegment = segments[0]
  const parentCategory = sidebarNav.find((item) =>
    item.items.some((subItem) => subItem.url.replace('/', '') === firstSegment)
  )
  return (
    <SidebarProvider>
      <Sidebar variant='inset'>
        <SidebarHeader>
          <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton size='lg' asChild>
                <Link to={'#'}>
                  <div className='flex aspect-square size-8 items-center justify-center rounded-lg bg-sidebar-accent'>
                    <Binary className='size-5' />
                  </div>
                  <div className='grid flex-1 text-left text-sm leading-tight'>
                    <span className='truncate font-semibold'>igor93nicoletti</span>
                    <span className='truncate text-xs'>Front-End Developer</span>
                  </div>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarHeader>
        <SidebarContent>
          <SidebarNav nav={sidebarNav} />
        </SidebarContent>
        <SidebarFooter>
          <SidebarUser user={sidebarUser} />
        </SidebarFooter>
      </Sidebar>
      <SidebarInset>
        <header className='flex h-16 shrink-0 items-center justify-between gap-2'>
          <div className='flex items-center gap-2 px-4'>
            <SidebarTrigger className='-ml-1' />
            <Separator orientation='vertical' className='mr-2 h-4' />
            <Breadcrumb>
              <BreadcrumbList>
                {parentCategory && (
                  <>
                    <BreadcrumbItem className='hidden md:block'>
                      <BreadcrumbLink asChild>
                        <Link to={parentCategory.url}>{parentCategory.title}</Link>
                      </BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator className='hidden md:block' />
                  </>
                )}
                {segments.map((segment, index) => {
                  path += `/${segment}`
                  const isLast = index === segments.length - 1
                  const label = sidebarNav.flatMap((item) => item.items).find((subItem) => subItem.url === path)?.title || segment
                  return (
                    <BreadcrumbItem key={path}>
                      {isLast ? (
                        <BreadcrumbPage>{label}</BreadcrumbPage>
                      ) : (
                        <>
                          <BreadcrumbLink asChild>
                            <Link to={path}>{label}</Link>
                          </BreadcrumbLink>
                          <BreadcrumbSeparator />
                        </>
                      )}
                    </BreadcrumbItem>
                  )
                })}
              </BreadcrumbList>
            </Breadcrumb>
          </div>
          <ThemeToggle />
        </header>
        <div className='flex flex-1 flex-col gap-4 p-4 pt-0'>
          <div className='min-h-[100vh] flex-1 rounded-xl md:min-h-min' />
        </div>
      </SidebarInset>
    </SidebarProvider>
  )
}
