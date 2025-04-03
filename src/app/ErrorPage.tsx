import { useRouteError } from 'react-router-dom'

export const ErrorPage = () => {
  const error = useRouteError() as Response | { status?: number; message?: string }

  return (
    <div className='h-screen grid place-items-center'>
      <div className='flex items-center gap-6'>
        <h1 className='text-2xl'>{'status' in error ? error.status : 'Error'}</h1>
        <div className='h-12 border-l-2' />
        <h2 className='text-sm sm:text-base'>{'message' in error ? error.message : 'Something went wrong.'}</h2>
      </div>
    </div>
  )
}
