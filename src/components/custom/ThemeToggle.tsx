import { Button } from '@/components/ui/button'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu'
import { useTheme } from '@/hooks'
import { Desktop, Moon, Sun } from '@phosphor-icons/react'

export const ThemeToggle = () => {
  const { setTheme } = useTheme()

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant='ghost' size='icon'>
          <Sun weight='light' className='shrink-0 absolute rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0' />
          <Moon weight='light' className='shrink-0 absolute rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100' />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align='end'>
        <DropdownMenuItem onClick={() => setTheme('dark')}>
          <Moon weight='light' /> Dark
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme('light')}>
          <Sun weight='light' /> Light
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme('system')}>
          <Desktop weight='light' /> System
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
