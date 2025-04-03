import { AuthPage, ErrorPage, NotFoundPage } from '@/app'
import { PublicRoute } from '@/components'
import { createBrowserRouter, Navigate, Outlet } from 'react-router-dom'
import { AppPage } from './App'

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
    element: <AppPage />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: 'dashboard',
        element: <h1>Dashboard</h1>,
      },
      {
        path: 'orders',
        element: (
          <div>
            <h1>Orders</h1>
            <Outlet />
          </div>
        ),
        children: [
          {
            path: 'products',
            element: <h1>Products</h1>,
            /* loader: async () => {
              throw new Response('Failed to fetch products', { status: 500 });
            }, */
          },
          {
            path: 'projetcs',
            element: <h1>Projects</h1>,
            /* loader: async () => {
              throw new Response('Failed to fetch products', { status: 500 });
            }, */
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
