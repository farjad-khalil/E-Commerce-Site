import React from 'react'
import { Link, Outlet, useNavigate } from 'react-router'
import Button from './Button'
function Navbar() {
   const navigate = useNavigate()
   return (
      <div >

         <nav className='flex justify-between gap-10 '>
            <div className='flex gap-10'>
               <button className='text-3xl font-bold hover:cursor-pointer' onClick={()=>{
                  navigate('/')
               }} >LOGO</button>
            
               <Link className='transition-all  hover:bg-black duration-300 p-2.5 rounded-lg'>Featured Products</Link>
               <Link className='transition-all  hover:bg-black duration-300 p-2.5 rounded-lg'>Link 1</Link>
               <Link className='transition-all  hover:bg-black duration-300 p-2.5 rounded-lg'>Link 1</Link>

            </div>

            <div className='flex gap-2'>
               <Link className='material-symbols-outlined transition-all  hover:bg-black duration-300 p-2.5 rounded-lg'>search</Link>
               <Link className='material-symbols-outlined transition-all  hover:bg-black duration-300 p-2.5 rounded-lg'>shopping_cart</Link>
               <Button text="Sign In" E_classes="w-20 h-10"/>
            </div>
         </nav>
         <Outlet/>
      </div>
   )
}

export default Navbar
