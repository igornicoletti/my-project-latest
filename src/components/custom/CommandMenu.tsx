import { Button, CommandDialog, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList, CommandSeparator } from '@/components/ui'
import { sidebarNavData } from '@/utils'
import { MagnifyingGlass } from '@phosphor-icons/react'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export const CommandMenu = () => {
  const [open, setOpen] = useState<boolean>(false)

  return (
    <>
      <Button variant='secondary' onClick={() => setOpen(true)} className='justify-start opacity-50 hover:opacity-100 w-40 lg:w-56 xl:w-64'>
        <MagnifyingGlass className='shrink-0' weight='thin' />Type to search...
      </Button>
      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput placeholder='Search navigation...' />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          {sidebarNavData.map((section, i) => (
            <React.Fragment key={section.title}>
              {i > 0 && <CommandSeparator />}
              <CommandGroup heading={section.title}>
                {section.items.flatMap((item) =>
                  item.items ? [item, ...item.items] : [item]
                ).map((nav) => (
                  <CommandItem key={nav.url} onSelect={() => setOpen(false)}>
                    <Link to={nav.url} className='flex items-center gap-2 w-full'>
                      <nav.icon className='shrink-0' weight='thin' />
                      <span>{nav.title}</span>
                    </Link>
                  </CommandItem>
                ))}
              </CommandGroup>
            </React.Fragment>
          ))}
        </CommandList>
      </CommandDialog>
    </>
  )
}
