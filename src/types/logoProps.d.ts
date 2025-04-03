import { Icon } from '@phosphor-icons/react'

export interface Logo {
  icon: Icon
  name: string
  items: {
    title: string
  }[]
}

export type LogoProps = {
  logo: Logo
}
