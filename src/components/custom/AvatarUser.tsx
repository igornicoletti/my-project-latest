import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { UserProps } from '@/types'

export const AvatarUser = ({ user }: UserProps) => {
  return (
    <div className='flex items-center gap-2 text-left'>
      <Avatar className='size-8 rounded-lg'>
        <AvatarImage src={user.avatar} alt={user.name} />
        <AvatarFallback className='rounded-lg'>{user.fallback}</AvatarFallback>
      </Avatar>
      <div className='grid flex-1 text-left leading-tight'>
        <span className='truncate font-semibold'>{user.name}</span>
        <span className='truncate font-light text-xs'>{user.email}</span>
      </div>
    </div>
  )
}
