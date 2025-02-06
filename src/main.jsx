import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Home from './Pages/Home.jsx'
import { createBrowserRouter } from 'react-router'
import { RouterProvider } from 'react-router-dom'
import Default from './components/Default.jsx'
import Featured_products from './Pages/Featured_products.jsx'
import Product from './Pages/Product.jsx'
import Aboutus from './Pages/Aboutus.jsx'
import Contactus from './Pages/Contactus.jsx'

const router = createBrowserRouter([
  {
    path:'/',
    element:<Default/>,
    children:[
      {
        path:'/',
        element:<Home/>
      },
      {
        path:'/featured_products',
        element:<Featured_products/>
      },
      {
        path:'/products/:index',
        element:<Product/>
      },
      {
        path:'/aboutus',
        element:<Aboutus/>
      }, {
        path:'/contactus',
        element:<Contactus/>
      }
    ]
  }
])
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
