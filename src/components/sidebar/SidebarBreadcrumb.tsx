import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from '@/components/ui/breadcrumb'
import { SidebarNavItem, SidebarNavProps } from '@/types'
import { sidebarNavData } from '@/utils'
import React from 'react'
import { Link, useLocation } from 'react-router-dom'

const findBreadcrumbs = (path: string, sections: SidebarNavProps[]): SidebarNavItem[] => {
  for (const section of sections) {
    for (const item of section.items) {
      if (item.url === path) {
        return [{ title: item.title, url: item.url, icon: item.icon }]
      }

      if ('items' in item && item.items.length > 0) {
        const subNav = findBreadcrumbs(path, [{ title: '', items: item.items }])
        if (subNav.length) {
          return [{ title: item.title, url: item.url, icon: item.icon }, ...subNav]
        }
      }
    }
  }

  return []
}

export const SidebarBreadcrumb = () => {
  const location = useLocation()
  const breadcrumbs = findBreadcrumbs(location.pathname, sidebarNavData) || []

  return (
    <Breadcrumb>
      <BreadcrumbList>
        {breadcrumbs.map((breadcrumb, index) => (
          <React.Fragment key={index}>
            {index > 0 && <BreadcrumbSeparator />}
            <BreadcrumbItem>
              {index === breadcrumbs.length - 1 ? (
                <BreadcrumbPage className='flex gap-2 items-center'>
                  {breadcrumb.icon && <breadcrumb.icon />} {breadcrumb.title}
                </BreadcrumbPage>
              ) : (
                <BreadcrumbLink asChild>
                  <Link to={breadcrumb.url} className='flex gap-2 items-center'>
                    {breadcrumb.icon && <breadcrumb.icon />} {breadcrumb.title}
                  </Link>
                </BreadcrumbLink>
              )}
            </BreadcrumbItem>
          </React.Fragment>
        ))}
      </BreadcrumbList>
    </Breadcrumb>
  )
}
