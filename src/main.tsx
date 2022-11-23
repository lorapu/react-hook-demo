import React from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'

import App from './App'
import { Home, About } from './pages/index'
const routes = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { path: '', element: <Home /> },
      { path: '/about', element: <About /> }
    ]
  }
])

createRoot(document.getElementById('root') as HTMLElement).render(<React.StrictMode>
    <RouterProvider router={routes} />
  </React.StrictMode>)
