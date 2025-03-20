import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from '@/components/ui'
import { sidebarNavData } from '@/utils'
import React from 'react'
import { Link, useLocation } from 'react-router-dom'

export const SidebarBreadcrumb = () => {
  const location = useLocation()

  const findBreadcrumbs = (path: string) => {
    for (const section of sidebarNavData) {
      for (const items of section.items) {
        if (items.url === path) {
          return [{ title: items.title, url: items.url }]
        }
        if (items.items) {
          const subNav = items.items.find(sub => sub.url === path)
          if (subNav) {
            return [
              { title: items.title, url: items.url },
              { title: subNav.title, url: subNav.url }
            ]
          }
        }
      }
    }
    return []
  }

  const breadcrumbs = findBreadcrumbs(location.pathname)

  return (
    <Breadcrumb>
      <BreadcrumbList>
        {breadcrumbs.map((breadcrumb, index) => (
          <React.Fragment key={breadcrumb.url}>
            {index > 0 && <BreadcrumbSeparator />}
            <BreadcrumbItem>
              {index === breadcrumbs.length - 1 ? (
                <BreadcrumbPage>{breadcrumb.title}</BreadcrumbPage>
              ) : (
                <BreadcrumbLink asChild>
                  <Link to={breadcrumb.url}>{breadcrumb.title}</Link>
                </BreadcrumbLink>
              )}
            </BreadcrumbItem>
          </React.Fragment>
        ))}
      </BreadcrumbList>
    </Breadcrumb>
  )
}
