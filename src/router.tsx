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
    path: '/playground',
    element: (
      <PublicRoute>
        <SidebarPage />
      </PublicRoute>
    ),
    children: [
      {
        path: 'dashboard',
        element: <div>Dashboard Content</div>, // Substitua pelo componente correto
      },
      {
        path: 'projects',
        element: <div>Projects Content</div>, // Substitua pelo componente correto
      }
    ]
  },
  {
    path: '*',
    element: <NotFoundPage />
  }
])
