import { Button, DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui'
import { useTheme } from '@/hooks'
import { Desktop, Moon, Sun } from '@phosphor-icons/react'

export const ThemeToggle = ({ ...props }: React.ButtonHTMLAttributes<HTMLButtonElement>) => {
  const { setTheme } = useTheme()

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant='ghost' size='icon' {...props}>
          <Sun className='shrink-0 absolute rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0' weight='duotone' />
          <Moon className='shrink-0 absolute rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100' weight='duotone' />
          <span className='sr-only'>Theme Toggle</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align='end'>
        <DropdownMenuItem onClick={() => setTheme('dark')}>
          <Moon className='shrink-0' weight='duotone' />
          <span>Dark</span>
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme('light')}>
          <Sun className='shrink-0' weight='duotone' />
          <span>Light</span>
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme('system')}>
          <Desktop className='shrink-0' weight='duotone' />
          <span>System</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
