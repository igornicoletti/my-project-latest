import { BaseSidebarNavItem, SidebarNavCategory, SidebarNavProps } from '@/types'

const isSidebarNavCategory = (item: BaseSidebarNavItem | SidebarNavCategory): item is SidebarNavCategory => {
  return 'items' in item
}

export const findBreadcrumbs = (path: string, sections: SidebarNavProps[]): BaseSidebarNavItem[] => {
  for (const { items } of sections) {
    for (const item of items) {
      if (item.url === path) {
        return [{ title: item.title, url: item.url, icon: item.icon }]
      }

      if (isSidebarNavCategory(item) && item.items.length > 0) {
        const subNav = findBreadcrumbs(path, [{ title: '', items: item.items }])
        if (subNav.length > 0) {
          return [{ title: item.title, url: item.url, icon: item.icon }, ...subNav]
        }
      }
    }
  }
  return []
}

export const createUrlMap = (sections: SidebarNavProps[]): Record<string, BaseSidebarNavItem> => {
  const urlMap: Record<string, BaseSidebarNavItem> = {}

  const processItems = (items: (BaseSidebarNavItem | SidebarNavCategory)[]) => {
    items.forEach((item) => {
      if (item?.url) urlMap[item.url] = item
      if (isSidebarNavCategory(item)) processItems(item.items)
    })
  }

  sections.forEach(({ items }) => processItems(items))
  return urlMap
}
