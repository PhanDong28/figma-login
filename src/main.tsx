import { createRoot } from 'react-dom/client'
import './main.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Login from './pages/login'
import { useState } from 'react'
import React from 'react'
import Homepage from './pages/homepage'
import App from './pages/app'

const AppRender = (): JSX.Element => {
  const [isAuthentication, setIsAuthentication] = useState(localStorage.getItem('isAuthentication') === 'true')

  const router = createBrowserRouter([
    {
      path: '/',
      element: <App/>
    },
    {
      path: '/homepage',
      element: <Homepage/>
    },
    {
      path: '/login',
      element: <Login onSuccess={() => { setIsAuthentication(true) }} />
    }
  ])

  return (
    <div className=" py-0 px-[10%]">
      <RouterProvider router={router} />
    </div>
  )
}

createRoot(document.getElementById('app') as HTMLElement).render(
  <AppRender />
)