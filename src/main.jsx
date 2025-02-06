import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Home from './Pages/Home.jsx'
import { createBrowserRouter } from 'react-router'
import { RouterProvider } from 'react-router-dom'
import Navbar from './components/Navbar.jsx'
import Featured_products from './Pages/Featured_products.jsx'

const router = createBrowserRouter([
  {
    path:'/',
    element:<Navbar/>,
    children:[
      {
        path:'/',
        element:<Home/>
      },
      {
        path:'/featured_products',
        element:<Featured_products/>
      }
    ]
  }
])
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
