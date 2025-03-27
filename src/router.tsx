import { AuthPage, NotFoundPage, SidebarPage } from '@/app'
import { PublicRoute } from '@/components'
import { createBrowserRouter, Navigate } from 'react-router-dom'

export const router = createBrowserRouter([
  {
    path: '*',
    element: <NotFoundPage />,
  },
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
    element: (
      <SidebarPage />
    ),
    children: [
      {
        path: 'dashboard',
        element: <h1>Dashboard</h1>,
      },
      {
        path: 'order',
        element: <h1>Order</h1>,
        children: [
          {
            path: 'projects',
            element: <h1>Projects</h1>,
          },
        ],
      },
      {
        path: 'projects',
        element: <h1>Projects</h1>,
      },
      {
        path: 'support',
        element: <h1>Support</h1>,
      },
      {
        path: 'feedback',
        element: <h1>Feedback</h1>,
      },
    ],
  },
])
