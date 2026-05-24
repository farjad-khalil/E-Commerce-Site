import { useState } from 'react'
import { NavLink, Outlet, useNavigate } from 'react-router-dom'
import { FiMenu, FiSearch, FiShoppingBag, FiX } from 'react-icons/fi'
import Button from './Button'
import Footer from './Footer'
import { useCart } from '../context/CartContext'

const navLinks = [
   { label: 'Home', to: '/' },
   { label: 'Shop', to: '/featured-products' },
   { label: 'About', to: '/about' },
   { label: 'Contact', to: '/contact' },
]

function Default() {
   const navigate = useNavigate()
   const { count } = useCart()
   const [menuOpen, setMenuOpen] = useState(false)

   const handleNavigate = (path) => {
      navigate(path)
      setMenuOpen(false)
   }

   return (
      <div className='relative min-h-screen overflow-hidden px-4 py-4 text-white md:px-6 lg:px-8'>
         <div className='pointer-events-none absolute inset-x-0 top-0 -z-10 h-[32rem] bg-[radial-gradient(circle_at_top,_rgba(34,211,238,0.18),_transparent_45%),linear-gradient(180deg,_rgba(15,23,42,0.96),_rgba(2,6,23,1))]' />
         <div className='mx-auto flex min-h-screen w-full max-w-7xl flex-col'>
            <header className='sticky top-4 z-40 rounded-[1.75rem] border border-white/10 bg-slate-950/75 px-4 py-4 shadow-2xl shadow-slate-950/35 backdrop-blur-xl md:px-6'>
               <div className='flex items-center justify-between gap-4'>
                  <button className='text-left text-2xl font-semibold tracking-tight text-white' onClick={() => handleNavigate('/')}>
                     SwiftCart
                  </button>

                  <nav className='hidden items-center gap-2 md:flex'>
                     {navLinks.map((link) => (
                        <NavLink
                           key={link.label}
                           to={link.to}
                              end={link.to === '/'}
                           className={({ isActive }) =>
                                 `inline-flex min-w-24 items-center justify-center rounded-full px-5 py-2 text-sm font-semibold tracking-wide transition ${isActive ? 'bg-cyan-300 text-slate-950 shadow-lg shadow-cyan-300/20' : 'text-white/70 hover:bg-white/5 hover:text-white'}`
                           }
                        >
                           {link.label}
                        </NavLink>
                     ))}
                  </nav>

                  <div className='flex items-center gap-2'>
                     <button className='hidden rounded-full border border-white/10 bg-white/5 p-3 text-white/70 transition hover:border-cyan-200/30 hover:bg-cyan-300 hover:text-slate-950 md:inline-flex' onClick={() => handleNavigate('/featured-products')}>
                        <FiSearch />
                     </button>
                     <button className='relative rounded-full border border-white/10 bg-white/5 p-3 text-white/70 transition hover:border-cyan-200/30 hover:bg-cyan-300 hover:text-slate-950' onClick={() => handleNavigate('/cart')}>
                        <FiShoppingBag />
                        {count > 0 ? <span className='absolute -right-1 -top-1 inline-flex min-w-5 items-center justify-center rounded-full bg-cyan-300 px-1.5 py-0.5 text-[10px] font-semibold text-slate-950'>{count}</span> : null}
                     </button>
                     <Button text='Sign in' variant='ghost' E_classes='hidden md:inline-flex' onClick={() => handleNavigate('/contact')} />
                     <button className='rounded-full border border-white/10 bg-white/5 p-3 text-white md:hidden' onClick={() => setMenuOpen((value) => !value)}>
                        {menuOpen ? <FiX /> : <FiMenu />}
                     </button>
                  </div>
               </div>

               {menuOpen ? (
                  <div className='mt-4 grid gap-2 border-t border-white/10 pt-4 md:hidden'>
                     {navLinks.map((link) => (
                        <button key={link.label} className='rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-left text-sm text-white/80' onClick={() => handleNavigate(link.to)}>
                           {link.label}
                        </button>
                     ))}
                     <button className='rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-left text-sm text-white/80' onClick={() => handleNavigate('/cart')}>
                        View cart
                     </button>
                  </div>
               ) : null}
            </header>

            <main className='flex-1'>
               <Outlet />
            </main>

            <Footer />
         </div>
      </div>
   )
}

export default Default
