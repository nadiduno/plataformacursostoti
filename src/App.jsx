import React from 'react';
import { BrowserRouter } from 'react-router-dom'
import { Router } from './Router'
import './global.css'

export function App() {
  return (
    <React.StrictMode>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </React.StrictMode>
  )
}
