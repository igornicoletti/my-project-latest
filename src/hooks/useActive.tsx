import { CollapsibleNavCategory } from '@/types'
import { useLocation } from 'react-router-dom'

export const useActive = (navigations: CollapsibleNavCategory[]) => {
  const location = useLocation()

  return navigations.map((nav) => ({
    ...nav,
    items: nav.items.map((item) => {
      const subitems = item.subitems?.map((subItem) => ({
        ...subItem,
        isActive: location.pathname === subItem.url,
      })) || []

      return {
        ...item,
        isActive: location.pathname === item.url || subitems.some((sub) => sub.isActive),
        subitems: subitems,
      }
    }),
  }))
}
