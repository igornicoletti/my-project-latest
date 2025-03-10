import { PublicRoute } from '@/components'
import { AuthPage, SidebarPage } from '@/pages'
import { createBrowserRouter, Navigate } from 'react-router-dom'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Navigate to='/signin' replace />,
  },
  {
    path: '/signin',
    element: (
      <PublicRoute>
        <AuthPage />
      </PublicRoute>
    ),
  },
  {
    path: '/signup',
    element: (
      <PublicRoute>
        <AuthPage />
      </PublicRoute>
    ),
  },
  {
    path: '/dashboard',
    element: (
      <PublicRoute>
        <SidebarPage />
      </PublicRoute>
    ),
  },
])
