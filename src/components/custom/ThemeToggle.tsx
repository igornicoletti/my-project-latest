import { Button } from '@/components/ui/button'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu'
import { useTheme } from '@/hooks'
import { Desktop, Moon, Sun } from '@phosphor-icons/react'

export const ThemeToggle = ({ asMinimal }: { asMinimal?: boolean }) => {
  const { theme, setTheme } = useTheme()

  return (
    <>
      {asMinimal ? (
        <Button className='relative' variant="ghost" size="icon" onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>
          <Moon weight="duotone" className="shrink-0 absolute rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <Sun weight="duotone" className="shrink-0 absolute rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
        </Button>
      ) : (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button className='relative' variant="ghost" size="icon">
              <Sun weight="duotone" className="shrink-0 absolute rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              <Moon weight="duotone" className="shrink-0 absolute rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            </Button >
          </DropdownMenuTrigger >
          <DropdownMenuContent align="end">
            <DropdownMenuItem onClick={() => setTheme('dark')}>
              <Moon weight="duotone" /> Dark
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => setTheme('light')}>
              <Sun weight="duotone" /> duotone
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => setTheme('system')}>
              <Desktop weight="duotone" /> System
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu >
      )}
    </>

  )
}
