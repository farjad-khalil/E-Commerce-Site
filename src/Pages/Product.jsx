import { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import Button from '../components/Button'
import { formatPrice, products } from '../data/products'
import { useCart } from '../context/CartContext'

function Product() {
   const { productId } = useParams()
   const navigate = useNavigate()
   const { addToCart } = useCart()
   const [quantity, setQuantity] = useState(1)

   const targetProduct = products.find((product) => product.id === Number(productId))

   if (!targetProduct) {
      return (
         <section className='mx-auto max-w-3xl py-16 text-center'>
            <p className='text-sm uppercase tracking-[0.35em] text-cyan-200/70'>Product not found</p>
            <h1 className='mt-3 text-4xl font-semibold text-white'>This item no longer exists in the catalog.</h1>
            <div className='mt-6 flex justify-center gap-3'>
               <Button text='Back to catalog' onClick={() => navigate('/featured-products')} />
               <Button text='Go home' variant='ghost' onClick={() => navigate('/')} />
            </div>
         </section>
      )
   }

   const handleQuantity = (delta) => {
      setQuantity((currentValue) => Math.max(1, currentValue + delta))
   }

   const handleAddToCart = () => {
      addToCart(targetProduct, quantity)
      navigate('/cart')
   }

   return (
      <section className='space-y-8 py-8 md:py-12'>
         <div className='grid gap-8 lg:grid-cols-[1.05fr_0.95fr]'>
            <div className='overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 shadow-2xl shadow-slate-950/35'>
               <img src={targetProduct.image} alt={targetProduct.title} className='h-full min-h-[26rem] w-full object-cover' />
            </div>

            <div className='space-y-6 rounded-[2rem] border border-white/10 bg-slate-950/70 p-6 backdrop-blur'>
               <div className='space-y-3'>
                  <p className='text-sm uppercase tracking-[0.35em] text-cyan-200/70'>{targetProduct.category}</p>
                  <h1 className='text-4xl font-semibold tracking-tight text-white md:text-5xl'>{targetProduct.title}</h1>
                  <p className='max-w-2xl text-white/65'>{targetProduct.description}</p>
               </div>

               <div className='flex items-center gap-4'>
                  <div className='text-3xl font-semibold text-white'>{formatPrice(targetProduct.price)}</div>
                  <div className='rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm text-white/70'>{targetProduct.rating.toFixed(1)} rating</div>
                  <div className='rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm text-white/70'>{targetProduct.reviewCount} reviews</div>
               </div>

               <div className='space-y-3'>
                  <p className='text-sm uppercase tracking-[0.3em] text-cyan-200/70'>Quantity</p>
                  <div className='inline-flex items-center rounded-full border border-white/10 bg-white/5 p-1'>
                     <button className='rounded-full px-4 py-2 text-lg text-white/70 transition hover:bg-white hover:text-slate-950' onClick={() => handleQuantity(-1)}>-</button>
                     <span className='min-w-12 text-center text-base font-semibold text-white'>{quantity}</span>
                     <button className='rounded-full px-4 py-2 text-lg text-white/70 transition hover:bg-white hover:text-slate-950' onClick={() => handleQuantity(1)}>+</button>
                  </div>
               </div>

               <div className='grid gap-3 sm:grid-cols-2'>
                  {targetProduct.features.map((feature) => (
                     <div key={feature} className='rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white/70'>{feature}</div>
                  ))}
               </div>

               <div className='flex flex-wrap gap-3'>
                  <Button text='Add to cart' onClick={handleAddToCart} />
                  <Button text='Continue shopping' variant='ghost' onClick={() => navigate('/featured-products')} />
               </div>
            </div>
         </div>

         <div className='grid gap-6 lg:grid-cols-[1fr_0.8fr]'>
            <div className='rounded-[2rem] border border-white/10 bg-white/5 p-6'>
               <p className='text-sm uppercase tracking-[0.35em] text-cyan-200/70'>Overview</p>
               <h2 className='mt-3 text-3xl font-semibold text-white'>Built to feel like a real product page.</h2>
               <p className='mt-4 leading-7 text-white/65'>This layout adds stronger hierarchy, better spacing, and clear purchase actions. The add-to-cart flow is connected to persistent state so the page behaves more like an actual storefront.</p>
            </div>
            <div className='rounded-[2rem] border border-white/10 bg-white/5 p-6'>
               <p className='text-sm uppercase tracking-[0.35em] text-cyan-200/70'>Why people buy it</p>
               <ul className='mt-4 space-y-3 text-white/70'>
                  <li>Premium feel with clear specifications.</li>
                  <li>Fast cart interactions and useful summary data.</li>
                  <li>Works as a strong portfolio detail view.</li>
               </ul>
            </div>
         </div>

         <div className='space-y-5'>
            <div>
               <p className='text-sm uppercase tracking-[0.35em] text-cyan-200/70'>Recommended</p>
               <h2 className='mt-2 text-3xl font-semibold text-white'>Related products</h2>
            </div>
            <div className='grid gap-5 lg:grid-cols-3'>
               {products
                  .filter((product) => product.category === targetProduct.category && product.id !== targetProduct.id)
                  .slice(0, 3)
                  .map((product) => (
                     <div key={product.id} className='rounded-[2rem] border border-white/10 bg-white/5 p-4'>
                        <img src={product.image} alt={product.title} className='h-44 w-full rounded-2xl object-cover' />
                        <div className='mt-4 space-y-2'>
                           <h3 className='text-lg font-semibold text-white'>{product.title}</h3>
                           <p className='text-sm text-white/60'>{formatPrice(product.price)}</p>
                        </div>
                        <Button text='View product' variant='ghost' E_classes='mt-4 w-full' onClick={() => navigate(`/products/${product.id}`)} />
                     </div>
                  ))}
            </div>
         </div>
      </section>
   )
}

export default Product
