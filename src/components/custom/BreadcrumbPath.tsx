import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from '@/components/ui/breadcrumb'
import React from 'react'
import { Link } from 'react-router-dom'

const data = [
  {
    title: "Installation",
    url: "#",
  },
  {
    title: "Project Structure",
    url: "#",
  },
]


export const BreadcrumbPath = () => {
  /* const location = useLocation()

  const breadcrumbData = navigationData.flatMap(({ items }) =>
    items.flatMap((item) =>
      [item, ...(item.items?.filter((subItem) =>
        location.pathname.startsWith(subItem.url)) || [])])
  ).filter((item) => location.pathname.startsWith(item.url)) */

  return (
    <Breadcrumb>
      <BreadcrumbList>
        {data.map((item, index) => (
          <React.Fragment key={index}>
            {index > 0 && <BreadcrumbSeparator className={'hidden md:block'} />}
            <BreadcrumbItem className={index === data.length - 1 ? '' : 'hidden md:block'}>
              {index === data.length - 1 ? (
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
