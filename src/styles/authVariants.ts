import { tv } from 'tailwind-variants'

export const authVariants = tv({
  slots: {
    container: 'grid gap-6',
    header: 'grid gap-2',
    title: 'text-xl sm:text-2xl font-semibold',
    description: 'text-balance text-muted-foreground',
    form: 'grid gap-6',
    formField: 'grid gap-2',
    labelContainer: 'flex items-center justify-between',
    forgotPasswordButton: 'p-0 h-4 underline-offset-4 hover:underline',
    message: '-mt-1 ml-auto text-xs font-medium',
    socialContainer: 'grid gap-6',
    separator: 'relative after:absolute after:inset-0 after:top-1/2 after:z-0 after:flex after:items-center after:border-t after:border-border',
    separatorText: 'relative z-10 px-2 text-muted-foreground bg-background',
    socialButtons: 'grid sm:grid-cols-2 gap-4',
    footerText: 'text-balance text-muted-foreground [&_a]:text-primary hover:[&_a]:underline [&_a]:underline-offset-4',
  },
})
