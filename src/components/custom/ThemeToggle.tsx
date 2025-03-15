import { Button, DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components'
import { useTheme } from '@/hooks'
import { Moon, Sun } from '@phosphor-icons/react'

export const ThemeToggle = ({ ...props }: React.ButtonHTMLAttributes<HTMLButtonElement>) => {
  const { setTheme } = useTheme()

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant='ghost' size='icon' {...props}>
          <Sun className='absolute rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0' weight='duotone' />
          <Moon className='absolute rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100' weight='duotone' />
          <span className='sr-only'>
            Theme Toggle
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
