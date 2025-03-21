import { Button, CommandDialog, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList, CommandSeparator } from '@/components/ui'
import { sidebarNavData } from '@/utils'
import { MagnifyingGlass } from '@phosphor-icons/react'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export const SidebarCommand = () => {
  const [open, setOpen] = useState<boolean>(false)

  return (
    <>
      <Button variant='outline' onClick={() => setOpen(true)} className='justify-start w-40 lg:w-56'>
        <MagnifyingGlass className='shrink-0' weight='thin' />Type to search...
      </Button>
      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput placeholder='Search navigation...' />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          {sidebarNavData.map((section, index) => (
            <React.Fragment key={index}>
              {index > 0 && <CommandSeparator />}
              <CommandGroup heading={section.title}>
                {section.items.flatMap((item) =>
                  item.items ? [item, ...item.items] : [item]
                ).map((nav, index) => (
                  <CommandItem key={index} onSelect={() => setOpen(false)}>
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
