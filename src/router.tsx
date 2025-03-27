import { AuthPage, ErrorPage, NotFoundPage, SidebarPage } from '@/app'
import { PublicRoute } from '@/components'
import { createBrowserRouter, Navigate } from 'react-router-dom'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Navigate to="/signin" replace />,
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
    path: '/app',
    element: <SidebarPage />,
    errorElement: <ErrorPage />,
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
            loader: async () => {
              throw new Response('Failed to fetch projects', { status: 500 })
            },
          },
        ],
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
  {
    path: '*',
    element: <NotFoundPage />,
  },
])
