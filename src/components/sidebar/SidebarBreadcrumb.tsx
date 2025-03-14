import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from '@/components'
import { SidebarNavProps } from '@/types'
import { Link, useLocation } from 'react-router-dom'

export const SidebarBreadcrumb = ({ data }: SidebarNavProps) => {
  const location = useLocation()
  const segments = location.pathname.split('/').filter(Boolean)

  const parentGroup = data
    .find((group) => group.nav
      .some((category) => category.items
        .some((item) => item.url
          .replace('/', '') === segments[0])))

  const parentCategory = parentGroup?.nav
    .find((category) => category.items
      .some((item) => item.url
        .replace('/', '') === segments[0]))

  const getBreadcrumbs = () => {
    return segments.map((segment, index) => {
      const path = `/${segments.slice(0, index + 1).join('/')}`
      const isLast = index === segments.length - 1

      const matchedItem = data
        .flatMap((group) => group.nav)
        .flatMap((category) => category.items)
        .find((item) => item.url === path)

      const label = matchedItem?.title || segment

      return (
        <BreadcrumbItem key={path}>
          {isLast ? (
            <BreadcrumbPage aria-current='page'>{label}</BreadcrumbPage>
          ) : (
            <>
              <BreadcrumbLink asChild>
                <Link to={matchedItem?.url || '#'} aria-label={label}>
                  {label}
                </Link>
              </BreadcrumbLink>
              <BreadcrumbSeparator aria-hidden='true' />
            </>
          )}
        </BreadcrumbItem>
      )
    })
  }

  return (
    <Breadcrumb aria-label='Breadcrumb'>
      <BreadcrumbList>
        {parentGroup && (
          <>
            <BreadcrumbItem className='hidden sm:block'>
              <span>{parentGroup.label}</span>
            </BreadcrumbItem>
            <BreadcrumbSeparator className='hidden sm:block' aria-hidden='true' />
          </>
        )}
        {parentCategory && (
          <>
            <BreadcrumbItem className='hidden sm:block'>
              <span>{parentCategory.title}</span>
            </BreadcrumbItem>
            <BreadcrumbSeparator className='hidden sm:block' aria-hidden='true' />
          </>
        )}
        {getBreadcrumbs()}
      </BreadcrumbList>
    </Breadcrumb>
  )
}
