import { AuthPage, NotFoundPage, SidebarPage } from '@/app'
import { PublicRoute } from '@/components'
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
    path: '/',
    children: [
      {
        path: '/dashboard',
        element: (
          <PublicRoute>
            <SidebarPage />
          </PublicRoute>
        ),
      },
      {
        path: '/projects',
        element: (
          <PublicRoute>
            <SidebarPage />
          </PublicRoute>
        ),
      },
    ]
  },
  {
    path: '*',
    element: <NotFoundPage />
  }
])
