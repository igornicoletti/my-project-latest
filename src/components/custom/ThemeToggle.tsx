import { Button, DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui'
import { useTheme } from '@/hooks'
import { Desktop, Moon, Sun } from '@phosphor-icons/react'

export const ThemeToggle = () => {
  const { setTheme } = useTheme()

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant='ghost' size='icon'>
          <Sun className='shrink-0 absolute rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0' weight='thin' />
          <Moon className='shrink-0 absolute rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100' weight='thin' />
          <span className='sr-only'>Theme Toggle</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align='end'>
        <DropdownMenuItem onClick={() => setTheme('dark')}>
          <Moon className='shrink-0' weight='thin' /> Dark
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme('light')}>
          <Sun className='shrink-0' weight='thin' /> Light
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme('system')}>
          <Desktop className='shrink-0' weight='thin' /> System
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
