import React from 'react'
import { Link, Outlet } from 'react-router'
function Navbar() {
   return (
      <nav className='flex justify-between gap-10'>
         <div className='flex gap-10'>
            <button className='text-3xl font-bold'>LOGO</button>
            <Link   className='transition-all  hover:bg-black duration-300 p-2.5 rounded-lg'>Link 1</Link>
            <Link   className='transition-all  hover:bg-black duration-300 p-2.5 rounded-lg'>Link 1</Link>
            <Link   className='transition-all  hover:bg-black duration-300 p-2.5 rounded-lg'>Link 1</Link>

         </div>

         <div className='flex gap-2'>
            <Link   className='material-symbols-outlined transition-all  hover:bg-black duration-300 p-2.5 rounded-lg'>search</Link>
            <Link   className='material-symbols-outlined transition-all  hover:bg-black duration-300 p-2.5 rounded-lg'>shopping_cart</Link>
            <Link   className='transition-all  hover:bg-black hover:text-white hover:border-white border w-20 h-10 text-center duration-300 p-1.5 rounded-lg bg-white text-black'>Sign In</Link>
         </div>
      </nav>
   )
}

export default Navbar
