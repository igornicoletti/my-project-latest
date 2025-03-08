import { Button, DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components'
import { useTheme } from '@/providers'
import { Moon, Sun } from '@phosphor-icons/react'

export const ThemeToggle = () => {
  const { setTheme } = useTheme()

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button className='absolute top-6 right-6' variant='ghost' size='icon'>
          <Sun className='absolute rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0 size-5' weight='duotone' />
          <Moon className='absolute rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100 size-5' weight='duotone' />
          <span className='sr-only'>
            Alternar tema
          </span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align='end'>
        <DropdownMenuItem onClick={() => setTheme('light')}>
          Light
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme('dark')}>
          Dark
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme('system')}>
          System
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
