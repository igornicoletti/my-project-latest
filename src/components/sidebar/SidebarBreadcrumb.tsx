import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb'
import { BaseSidebarNavItem, SidebarNavProps } from '@/types'
import { createUrlMap } from '@/utils'
import React, { useMemo } from 'react'
import { Link, useLocation } from 'react-router-dom'

interface SidebarBreadcrumbProps {
  sidebarNavData: SidebarNavProps[]
}

export const SidebarBreadcrumb = ({ sidebarNavData }: SidebarBreadcrumbProps) => {
  const location = useLocation()
  const urlMap = useMemo(() => createUrlMap(sidebarNavData), [sidebarNavData])

  const breadcrumbs = useMemo(() => {
    let currentPath = location.pathname
    const result: BaseSidebarNavItem[] = []

    while (currentPath && currentPath !== '/') {
      const item = urlMap[currentPath]
      if (!item) break

      result.unshift(item)
      const lastSlashIndex = currentPath.lastIndexOf('/')
      currentPath = lastSlashIndex > 0 ? currentPath.substring(0, lastSlashIndex) : '/'
    }

    return result
  }, [location.pathname, urlMap])

  return (
    <Breadcrumb>
      <BreadcrumbList>
        {breadcrumbs.map((breadcrumb, index) => (
          <React.Fragment key={breadcrumb.url || breadcrumb.title}>
            {index > 0 && <BreadcrumbSeparator />}
            <BreadcrumbItem>
              <BreadcrumbLink asChild>
                <Link to={breadcrumb.url} className="flex gap-2 items-center">
                  {breadcrumb.icon && React.createElement(breadcrumb.icon)} {breadcrumb.title}
                </Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
          </React.Fragment>
        ))}
      </BreadcrumbList>
    </Breadcrumb>
  )
}
