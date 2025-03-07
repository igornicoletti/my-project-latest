import { Button } from '@/components/ui/button'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu'
import { useTheme } from '@/providers'
import { Moon, Sun } from '@phosphor-icons/react'

/**
 * Theme Toggle Component.
 *
 * This component provides a dropdown menu to switch between light, dark, and system themes.
 * The selected theme is applied via the `setTheme` function from the ThemeProvider.
 *
 * @returns {JSX.Element} The theme toggle component.
 */
export const ThemeToggle = () => {
  const { setTheme } = useTheme()

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button className="absolute top-6 right-6" variant="ghost" size="icon">
          <Sun className="absolute rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0 size-5" weight="duotone" />
          <Moon className="absolute rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100 size-5" weight="duotone" />
          <span className="sr-only">
            Alternar tema
          </span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
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
