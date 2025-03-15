import { Breadcrumb, BreadcrumbItem, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from '@/components'
import { SidebarNavProps } from '@/types'
import React from 'react'
import { useLocation } from 'react-router-dom'

export const SidebarBreadcrumb = ({ sidebarNav }: SidebarNavProps) => {
  const location = useLocation()
  const breadcrumbSegments = location.pathname.split('/').filter(Boolean)
  const breadcrumbCategory = sidebarNav.flatMap((data) => data.categories)
    .find((category) => category.navigations.some((navigation) => location.pathname.includes(navigation.path)))

  const handleBreadcrumb = (segments: string[]) => {
    return segments.map((segment, index) => {
      const breadcrumbPath = segments.slice(0, index + 1).join('/')
      const breadcrumbItem = sidebarNav.flatMap((data) => data.categories)
        .flatMap((category) => category.navigations)
        .find((navigation) => navigation.path === `/${breadcrumbPath}`)

      return (
        <React.Fragment key={breadcrumbPath}>
          <BreadcrumbItem>
            <BreadcrumbPage>
              {breadcrumbItem?.name || segment}
            </BreadcrumbPage>
          </BreadcrumbItem>
          {index < segments.length - 1 && <BreadcrumbSeparator />}
        </React.Fragment>
      )
    })
  }

  return (
    <Breadcrumb aria-label='Breadcrumb'>
      <BreadcrumbList>
        <BreadcrumbItem>
          {breadcrumbCategory?.title}
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        {handleBreadcrumb(breadcrumbSegments)}
      </BreadcrumbList>
    </Breadcrumb>
  )
}
