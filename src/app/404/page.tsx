import { Button } from '@/components/ui'
import { ArrowLeft } from '@phosphor-icons/react'
import { useNavigate } from 'react-router-dom'

export const NotFoundPage = () => {
  const navigate = useNavigate()

  return (
    <div className='min-h-screen grid place-items-center'>
      <div className="flex flex-col items-center gap-4">
        <div className='flex items-center gap-6'>
          <h1 className='text-2xl'>404</h1>
          <div className='h-12 border-l' />
          <h2 className='text-sm sm:text-base'>This page could not be found.</h2>
          <div className='h-12 border-l' />
        </div>
        <Button variant='link' onClick={() => navigate(-1)}>
          <ArrowLeft weight='light' /> GO BACK
        </Button>
      </div>
    </div>
  )
}
