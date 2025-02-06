import React from 'react'
import { Link, Outlet, useNavigate } from 'react-router'
import Button from './Button'
function Default() {
   const navigate = useNavigate()
   return (
      <div >

         <nav className='flex justify-between gap-10 '>
            <div className='flex gap-10'>
               <button className='text-3xl font-bold hover:cursor-pointer' onClick={() => {
                  navigate('/')
               }} >SwiftCart</button>

               <button onClick={() => { navigate('/featured_products') }} className='transition-all  hover:bg-neutral-800 duration-300 p-2.5 rounded-lg'>Featured Products</button>
               <button onClick={() => { navigate('/aboutus') }}  className='transition-all  hover:bg-neutral-800 duration-300 p-2.5 rounded-lg'>About us</button>
               <button onClick={() => { navigate('/contactus') }}  className='transition-all  hover:bg-neutral-800 duration-300 p-2.5 rounded-lg'>Contact us</button>

            </div>

            <div className='flex gap-2'>
               <button className='material-symbols-outlined transition-all  hover:bg-neutral-800 duration-300 p-2.5 rounded-lg'>search</button>
               <button className='material-symbols-outlined transition-all  hover:bg-neutral-800 duration-300 p-2.5 rounded-lg'>shopping_cart</button>
               <Button text="Sign In" E_classes="w-20 h-10" />
            </div>
         </nav>
         <Outlet />
         <hr className='mt-15 mb-15 text-neutral-700' />
         <div className="grid grid-cols-4 gap-10">
            {/* Column 1: Logo & Social Icons */}
            <div className="flex flex-col">
               <div className="text-3xl font-bold">LOGO</div>
               <div className="flex mt-10 space-x-10">
                  <i className="fab fa-facebook text-2xl hover:cursor-pointer hover:text-neutral-300"></i>
                  <i className="fab fa-twitter text-2xl hover:cursor-pointer hover:text-neutral-300"></i>
                  <i className="fab fa-instagram text-2xl hover:cursor-pointer hover:text-neutral-300"></i>
               </div>
               <div className='mt-10'>
                  <div className='font-semibold mb-1'>Subscribe To Our Newsletter</div>
                  <div className='border p-2 rounded-sm flex justify-between border-neutral-700'>
                     <input placeholder='@gmail.com' className='outline-none focus:ring-0' />
                     <button className='hover:cursor-pointer hover:text-neutral-400'>Subscribe</button>
                  </div>
               </div>
            </div>

            {/* Column 2 */}
            <div className="flex flex-col space-y-2">
               <div className='font-semibold text-xl mb-6'>Call us</div>

               <div className='text-neutral-500 '>Pakistan</div>
               <div className='text-neutral-500 hover:text-white hover:cursor-pointer'>+92 301 9898989</div>
               <br></br>
               <div className='text-neutral-500 '>United States</div>
               <div className='text-neutral-500 hover:text-white hover:cursor-pointer'>+48 415 7574737</div>
            </div>

            {/* Column 3 */}
            <div className="flex flex-col space-y-2">
               <div className='font-semibold text-xl mb-6'>Company</div>
               <div className='text-neutral-500 hover:text-white hover:cursor-pointer'>Cases</div>
               <div className='text-neutral-500 hover:text-white hover:cursor-pointer'>Services</div>
               <div className='text-neutral-500 hover:text-white hover:cursor-pointer'>About Us</div>
               <div className='text-neutral-500 hover:text-white hover:cursor-pointer'>Blog</div>
               <div className='text-neutral-500 hover:text-white hover:cursor-pointer'>Contact Us</div>
               <div className='text-neutral-500 hover:text-white hover:cursor-pointer'>Career</div>
            </div>

            {/* Column 4 */}
            <div className="flex flex-col space-y-2">
               <div className='font-semibold text-xl mb-6'>Details</div>
               <div className='text-neutral-500 hover:text-white hover:cursor-pointer'>Services</div>
               <div className='text-neutral-500 hover:text-white hover:cursor-pointer'>Technologies</div>
               <div className='text-neutral-500 hover:text-white hover:cursor-pointer'>Expertise</div>
               <div className='text-neutral-500 hover:text-white hover:cursor-pointer'>Developers</div>
               <div className='text-neutral-500 hover:text-white hover:cursor-pointer'>Industry</div>
               <div className='text-neutral-500 hover:text-white hover:cursor-pointer'>3</div>
            </div>
         </div>
         <hr className='mt-15 mb-15 text-neutral-700' />
         <div className=''>

            <div className='text-neutral-400'>
               Built by Farjad
            </div>
            <div className='text-neutral-400 mt-2 '>Copyright © 2025 | All rights reserved</div>
         </div>


      </div>
   )
}

export default Default
