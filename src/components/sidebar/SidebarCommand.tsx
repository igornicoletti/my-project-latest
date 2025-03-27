import { Button } from '@/components/ui/button'
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from '@/components/ui/command'
import { sidebarNavData } from '@/utils'
import { MagnifyingGlass } from '@phosphor-icons/react'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export const SidebarCommand = () => {
  const [open, setOpen] = useState<boolean>(false)

  return (
    <>
      <Button variant="secondary" onClick={() => setOpen(true)} className="justify-start w-40 lg:w-56">
        <MagnifyingGlass weight="light" /> Search...
      </Button>
      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput placeholder="Search navigation..." />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          {sidebarNavData.map((section, index) => 'items' in section ? (
            <React.Fragment key={section.title}>
              {index > 0 && <CommandSeparator />}
              <CommandGroup heading={section.title}>
                {section.items.map((item) => (
                  <CommandItem key={item.url} onSelect={() => setOpen(false)}>
                    <Link to={item.url} className="flex items-center gap-2 w-full">
                      {item.icon && <item.icon weight="light" />} {item.title}
                    </Link>
                  </CommandItem>
                ))}
              </CommandGroup>
            </React.Fragment>
          ) : null
          )}
        </CommandList>
      </CommandDialog>
    </>
  )
}
