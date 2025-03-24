import { Button } from '@/components/ui/button'
import { CommandDialog, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList, CommandSeparator } from '@/components/ui/command'
import { sidebarNavData } from '@/utils'
import { MagnifyingGlass } from '@phosphor-icons/react'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export const SidebarCommand = () => {
  const [open, setOpen] = useState<boolean>(false)

  return (
    <>
      <Button variant='secondary' onClick={() => setOpen(true)} className='justify-start w-40 lg:w-56'>
        <MagnifyingGlass weight='light' />Search...
      </Button>
      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput placeholder='Search navigation...' />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          {sidebarNavData.map((section, index) => (
            <React.Fragment key={index}>
              {index > 0 && <CommandSeparator />}
              <CommandGroup heading={section.title}>
                {section.items.map((item, itemIndex) => (
                  <React.Fragment key={itemIndex}>
                    <CommandItem onSelect={() => setOpen(false)}>
                      <Link to={item.url} className='flex items-center gap-2 w-full'>
                        <item.icon weight='light' />
                        <span>{item.title}</span>
                      </Link>
                    </CommandItem>
                    {'items' in item && item.items?.length > 0 &&
                      item.items.map((subItem, subIndex) => (
                        <CommandItem key={`${itemIndex}-${subIndex}`} onSelect={() => setOpen(false)}>
                          <Link to={subItem.url} className='flex items-center gap-2 w-full'>
                            <subItem.icon weight='light' />
                            <span>{subItem.title}</span>
                          </Link>
                        </CommandItem>
                      ))
                    }
                  </React.Fragment>
                ))}
              </CommandGroup>
            </React.Fragment>
          ))}
        </CommandList>
      </CommandDialog>
    </>
  )
}
