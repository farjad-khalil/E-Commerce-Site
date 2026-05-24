import { useState } from 'react'
import { Link } from 'react-router-dom'
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from 'react-icons/fa'

const footerLinks = {
  shop: [
    { label: 'Featured products', to: '/featured-products' },
    { label: 'Cart', to: '/cart' },
    { label: 'Contact', to: '/contact' },
  ],
  company: [
    { label: 'About', to: '/about' },
    { label: 'Support', to: '/contact' },
    { label: 'Portfolio case study', to: '/' },
  ],
}

function Footer() {
  const [email, setEmail] = useState('')
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (event) => {
    event.preventDefault()
    setIsSubmitted(true)
    setEmail('')
  }

  return (
    <footer className='mt-16 border-t border-white/10 pt-12 text-left'>
      <div className='grid gap-10 lg:grid-cols-[1.25fr_0.75fr_0.75fr_1fr]'>
        <div className='space-y-5'>
          <div>
            <div className='text-3xl font-semibold tracking-tight text-white'>SwiftCart</div>
            <p className='mt-3 max-w-md text-sm leading-6 text-white/60'>A polished storefront concept built to showcase product storytelling, conversion-focused layout, and clean interaction design.</p>
          </div>
          <div className='flex items-center gap-3'>
            {[FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn].map((Icon, index) => (
              <a key={index} href='/' className='inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/70 transition hover:border-cyan-200/30 hover:bg-cyan-300 hover:text-slate-950'>
                <Icon />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h3 className='text-sm font-semibold uppercase tracking-[0.3em] text-cyan-200/70'>Shop</h3>
          <div className='mt-5 space-y-3'>
            {footerLinks.shop.map((item) => (
              <Link key={item.label} to={item.to} className='block text-sm text-white/65 transition hover:text-white'>{item.label}</Link>
            ))}
          </div>
        </div>

        <div>
          <h3 className='text-sm font-semibold uppercase tracking-[0.3em] text-cyan-200/70'>Company</h3>
          <div className='mt-5 space-y-3'>
            {footerLinks.company.map((item) => (
              <Link key={item.label} to={item.to} className='block text-sm text-white/65 transition hover:text-white'>{item.label}</Link>
            ))}
          </div>
        </div>

        <div className='rounded-[1.5rem] border border-white/10 bg-white/5 p-5'>
          <h3 className='text-sm font-semibold uppercase tracking-[0.3em] text-cyan-200/70'>Newsletter</h3>
          <p className='mt-4 text-sm leading-6 text-white/60'>Get product launches, UI updates, and portfolio notes directly in your inbox.</p>
          <form className='mt-5 space-y-3' onSubmit={handleSubmit}>
            <input value={email} onChange={(event) => setEmail(event.target.value)} type='email' required placeholder='Email address' className='w-full rounded-full border border-white/10 bg-slate-950/60 px-4 py-3 text-sm text-white outline-none transition placeholder:text-white/30 focus:border-cyan-200/40' />
            <button type='submit' className='inline-flex w-full items-center justify-center rounded-full bg-cyan-300 px-4 py-3 text-sm font-semibold text-slate-950 transition hover:bg-white'>
              Subscribe
            </button>
          </form>
          {isSubmitted ? <p className='mt-3 text-sm text-cyan-200'>Thanks. The newsletter module is wired and ready for backend integration.</p> : null}
        </div>
      </div>

      <div className='mt-10 flex flex-col gap-3 border-t border-white/10 pt-6 text-sm text-white/50 md:flex-row md:items-center md:justify-between'>
        <p>Built by Farjad</p>
        <p>Copyright © 2025 | All rights reserved</p>
      </div>
    </footer>
  )
}

export default Footer
