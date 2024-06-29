import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {createBrowserRouter,RouterProvider} from 'react-router-dom'
import Home from './components/Home.jsx'
import Track from './components/Track.jsx'
const router=createBrowserRouter([
    {
      path:"/",
      element:<App/>
    },
    {
      path:"/home",
      element:<Home/>
    },
    {
      path:"/track",
      element:<Track/>
    },
  ])
ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
    <RouterProvider router={router}/>
    </React.StrictMode>
)
