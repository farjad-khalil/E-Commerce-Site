import React, { useState } from 'react'
import { useParams, useSearchParams } from 'react-router'
import { products } from './Featured_products';


function Product() {
   const params = useParams();
   const [quantity, setQuantity] = useState(1)
   const handleQuantity = (prop) => {

      if (prop == -1 && quantity > 1) {
         setQuantity(quantity - 1)
      } if (prop == 1) {
         setQuantity(quantity + 1)
      }
   }
   const targetProduct = products.find(product => product.index === Number(params.index))
   return (
      <div>
         <div className='flex m-10 gap-10'>
            <div>
               <img src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=1999&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Placeholder" className="h-[450px] rounded-3xl" />
            </div>
            <div className=''>
               <div className='text-5xl font-bold mt-2'>{targetProduct.title}</div>
               <hr className='mt-7 mb-7 text-neutral-700' />
               <div className='text-xl font-semibold text-neutral-300'>{targetProduct.price}</div>
               <div className="flex">
                  {[...Array(Math.floor(targetProduct.rating))].map((_, index) => (
                     <span key={index} className='text-xl font-black m-1'>★</span>
                  ))}
               </div>
               <div className='flex h-10 mt-7'>
                  <button className='border w-12 text-xl rounded-l-lg flex items-center justify-center border-neutral-500' onClick={() => handleQuantity(-1)}>-</button>
                  <p className='border text-center w-12 text-xl  flex items-center justify-center border-neutral-500'>{quantity}</p>
                  <button className='border w-12 text-xl rounded-r-lg flex items-center justify-center border-neutral-500' onClick={() => handleQuantity(+1)}>+</button>
               </div>
               <div className='mt-7 flex gap-2'>
                  <button className='transition-all  hover:bg-black hover:text-white hover:border-neutral-700 border  text-center duration-300 p-1.5 rounded-lg bg-white text-black hover:cursor-pointer w-full'>BUY NOW</button>
                  <button className='transition-all  hover:bg-white hover:text-black border-neutral-700 border  text-center duration-300 p-1.5 rounded-lg bg-black text-white hover:cursor-pointer w-full'>ADD TO CART</button>
               </div>
               <hr className='mt-7 mb-7 text-neutral-700' />
            </div>
         </div>
         <div className='flex flex-col gap-2'>
           <div className='font-bold text-3xl'>Premium Minimalist Smartwatch</div>
           <div>Experience the perfect blend of elegance and technology with this minimalist smartwatch. Featuring a sleek round dial, premium metallic casing, and a soft, adjustable silicone strap, this watch is designed for both style and comfort.</div>
           <ul className='list-disc ml-10'>
            <li >Ultra-lightweight & durable for all-day wear</li>
            <li>Matte-finish strap for a modern look</li>
            <li>Minimalistic bezel-less display</li>
            <li>Versatile design – perfect for casual, business, and sportswear</li>
           </ul>
           <div>Whether you're looking for a fashionable timepiece or a high-tech smartwatch, this watch delivers a refined aesthetic with cutting-edge functionality. Enhance your style with this sleek and modern smartwatch, designed for those who value sophistication and functionality.</div>
         </div>
      </div>

   )
}

export default Product
