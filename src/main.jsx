import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Fine from './Fine.jsx'


const myRoutes=createBrowserRouter(
  createRoutesFromElements(
    <>
    <Route path='/fine' element={<Fine/>}/>
    <Route path='/' element={<App/>}/>

    </>
  )
)


createRoot(document.getElementById('root')).render(
  <RouterProvider router={myRoutes}/>
  
)
