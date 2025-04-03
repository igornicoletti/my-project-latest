import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from '@/components/ui/breadcrumb'
import { collapsibleNavData } from '@/data'
import React from 'react'
import { Link, useLocation } from 'react-router-dom'

export const BreadcrumbPath = () => {
  const location = useLocation()

  const breadcrumbData = collapsibleNavData.flatMap(({ items }) =>
    items.flatMap((item) =>
      [item, ...(item.subitems?.filter((subItem) =>
        location.pathname.startsWith(subItem.url)) || [])])
  ).filter((item) => location.pathname.startsWith(item.url))

  return (
    <Breadcrumb>
      <BreadcrumbList>
        {breadcrumbData.map((item, index) => (
          <React.Fragment key={index}>
            {index > 0 && <BreadcrumbSeparator className={'hidden sm:block'} />}
            <BreadcrumbItem className={index === breadcrumbData.length - 1 ? '' : 'hidden sm:block'}>
              {index === breadcrumbData.length - 1 ? (
                <BreadcrumbPage>{item.title}</BreadcrumbPage>
              ) : (
                <BreadcrumbLink asChild>
                  <Link to={item.url}>{item.title}</Link>
                </BreadcrumbLink>
              )}
            </BreadcrumbItem>
          </React.Fragment>
        ))}
      </BreadcrumbList>
    </Breadcrumb>
  )
}
