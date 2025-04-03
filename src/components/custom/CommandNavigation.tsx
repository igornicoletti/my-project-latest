import { Button } from '@/components/ui/button'
import { CommandDialog, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList, CommandSeparator } from '@/components/ui/command'
import { collapsibleNavData } from '@/data'
import { CollapsibleNavCategory, CollapsibleNavItem, CollapsibleNavSubitem } from '@/types'
import { MagnifyingGlass } from '@phosphor-icons/react'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export const CommandNavigation = () => {
  const [open, setOpen] = useState<boolean>(false)

  return (
    <>
      <Button className="relative" variant="ghost" size="icon" onClick={() => setOpen(true)} aria-label="Open search command">
        <MagnifyingGlass weight="duotone" />
      </Button>
      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput placeholder="Search navigation..." />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          {collapsibleNavData.map((section: CollapsibleNavCategory, index: number) => (
            section.items && Array.isArray(section.items) ? (
              <React.Fragment key={index}>
                {index > 0 && <CommandSeparator />}
                <CommandGroup heading={section.label}>
                  {section.items.map((item: CollapsibleNavItem) => (
                    <React.Fragment key={item.url}>
                      <CommandItem onSelect={() => setOpen(false)}>
                        <Link to={item.url} className="flex items-center gap-2 w-full">
                          <item.icon weight="duotone" />
                          <span>{item.title}</span>
                        </Link>
                      </CommandItem>
                      {item.subitems && item.subitems.map((subItem: CollapsibleNavSubitem) => (
                        <CommandItem key={subItem.url} onSelect={() => setOpen(false)} className="ml-4">
                          <Link to={subItem.url} className="flex items-center gap-2 w-full">
                            <item.icon weight="duotone" />
                            <span>{subItem.title}</span>
                          </Link>
                        </CommandItem>
                      ))}
                    </React.Fragment>
                  ))}
                </CommandGroup>
              </React.Fragment>
            ) : null
          ))}
        </CommandList>
      </CommandDialog>
    </>
  )
}
