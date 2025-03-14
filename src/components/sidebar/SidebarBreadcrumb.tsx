import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from '@/components'
import { SidebarNavProps } from '@/types'
import React from 'react'
import { Link, useLocation } from 'react-router-dom'

// Função para capitalizar a primeira letra de cada palavra
const capitalize = (str: string) => {
  return str
    .split(' ') // Divide a string em palavras
    .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()) // Capitaliza a primeira letra
    .join(' ') // Junta as palavras de volta
}

export const SidebarBreadcrumb = ({ data }: SidebarNavProps) => {
  const location = useLocation()
  const segments = location.pathname.split('/').filter(Boolean)

  const findBreadcrumbs = (segments: string[]) => {
    let pathAccumulator = ''

    return segments.map((segment, index) => {
      pathAccumulator = `/${segments.slice(0, index + 1).join('/')}`
      const isLast = index === segments.length - 1

      const matchedItem = data
        .flatMap(group => group.nav)
        .flatMap(category => category.items)
        .find(item => item.url === pathAccumulator)

      const label = matchedItem?.title || segment
      const capitalizedLabel = capitalize(label)

      return (
        <React.Fragment key={pathAccumulator}>
          <BreadcrumbItem>
            {isLast ? (
              <BreadcrumbPage aria-current='page'>{capitalizedLabel}</BreadcrumbPage>
            ) : (
              <BreadcrumbLink asChild>
                <Link to={pathAccumulator}>{capitalizedLabel}</Link>
              </BreadcrumbLink>
            )}
          </BreadcrumbItem>
          {!isLast && <BreadcrumbSeparator key={`separator-${pathAccumulator}`} />}
        </React.Fragment>
      )
    })
  }

  const parentGroup = data.find(group =>
    group.nav.some(category =>
      category.items.some(item => location.pathname.includes(item.url))
    )
  )

  const parentCategory = parentGroup?.nav.find(category =>
    category.items.some(item => location.pathname.includes(item.url))
  )

  return (
    <Breadcrumb aria-label='Breadcrumb'>
      <BreadcrumbList>
        {parentGroup && (
          <>
            <BreadcrumbItem key='parentGroup'>
              <span>{capitalize(parentGroup.label)}</span>
            </BreadcrumbItem>
            <BreadcrumbSeparator key='parentGroup-separator' />
          </>
        )}
        {parentCategory && (
          <>
            <BreadcrumbItem key='parentCategory'>
              <span>{capitalize(parentCategory.title)}</span>
            </BreadcrumbItem>
            <BreadcrumbSeparator key='parentCategory-separator' />
          </>
        )}
        {findBreadcrumbs(segments)}
      </BreadcrumbList>
    </Breadcrumb>
  )
}
