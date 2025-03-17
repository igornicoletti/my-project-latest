import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from '@/components/ui/breadcrumb'
import { sidebarNavData } from '@/utils'
import React from 'react'
import { Link, useLocation } from 'react-router-dom'

export const SidebarBreadcrumb = () => {
  const location = useLocation()

  const findBreadcrumbs = (path: string) => {
    for (const section of sidebarNavData) {
      const navigation = section.navigations?.find(nav => nav.url === path)
      if (navigation) return [{ label: section.title }, { label: navigation.title }]

      for (const category of section.categories || []) {
        const subItem = category.items.find(item => item.url === path)
        if (subItem) return [{ label: section.title }, { label: category.title }, { label: subItem.title }]
      }
    }
    return []
  }

  const breadcrumbs = findBreadcrumbs(location.pathname)

  return (
    <Breadcrumb>
      <BreadcrumbList>
        {breadcrumbs.map((breadcrumb, index) => (
          <React.Fragment key={breadcrumb.label}>
            {index > 0 && <BreadcrumbSeparator />}
            <BreadcrumbItem>
              {index === breadcrumbs.length - 1 ? (
                <BreadcrumbPage>{breadcrumb.label}</BreadcrumbPage>
              ) : (
                <BreadcrumbLink asChild>
                  <Link to='#'>{breadcrumb.label}</Link>
                </BreadcrumbLink>
              )}
            </BreadcrumbItem>
          </React.Fragment>
        ))}
      </BreadcrumbList>
    </Breadcrumb>
  )
}
