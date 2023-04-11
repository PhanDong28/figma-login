import { createRoot } from 'react-dom/client'
import App from './App'
import './main.css'
import React from 'react'

createRoot(document.getElementById('app') as HTMLElement).render(
  <div className="bg-[white] py-0 px-[10%]">
    <App />
  </div>
)