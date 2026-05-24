import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Home from './Pages/Home.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Default from './components/Default.jsx'
import Featured_products from './Pages/Featured_products.jsx'
import Product from './Pages/Product.jsx'
import Aboutus from './Pages/Aboutus.jsx'
import Contactus from './Pages/Contactus.jsx'
import Cart from './Pages/Cart.jsx'
import { CartProvider } from './context/CartContext.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Default />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: 'featured-products',
        element: <Featured_products />,
      },
      {
        path: 'products/:productId',
        element: <Product />,
      },
      {
        path: 'about',
        element: <Aboutus />,
      },
      {
        path: 'contact',
        element: <Contactus />,
      },
      {
        path: 'cart',
        element: <Cart />,
      },
    ],
  },
])
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CartProvider>
      <RouterProvider router={router} />
    </CartProvider>
  </StrictMode>,
)
