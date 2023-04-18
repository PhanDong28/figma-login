import { createRoot } from 'react-dom/client'
import './main.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Login from './pages/login'
import { useState } from 'react'
import React from 'react'
import Register from './pages/register'


const AppRender = (): JSX.Element => {
  const [isAuthentication, setIsAuthentication] = useState(localStorage.getItem('isAuthentication') === 'true')

  const router = createBrowserRouter([


    {
      path: '/',
      element: <Login onSuccess={() => { setIsAuthentication(true) }} />
    },
    {
      path: '/register',
      element: <Register/>
    },
  ])

  return (
    <div className='w-full'>
      <RouterProvider router={router} />
    </div>
  )
}

createRoot(document.getElementById('app') as HTMLElement).render(
  <AppRender />
)