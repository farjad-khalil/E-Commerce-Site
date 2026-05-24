import { useNavigate } from 'react-router-dom'
import { FiArrowRight, FiShield, FiStar, FiTruck } from 'react-icons/fi'
import Button from '../components/Button'
import Product_card from '../components/Product_card'
import Testimonials from '../components/Testimonials'
import Trending from '../components/Trending'
import { products, formatPrice } from '../data/products'

function Home() {
  const navigate = useNavigate()
  const spotlightProducts = products.slice(0, 3)
  const stats = [
    { label: 'Curated products', value: '12+' },
    { label: 'Average rating', value: '4.8/5' },
    { label: 'Local storage cart', value: 'Enabled' },
  ]

  return (
    <div className='space-y-16 py-8 md:py-12'>
      <section className='grid gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-center'>
        <div className='space-y-8'>
          <div className='inline-flex items-center gap-2 rounded-full border border-cyan-200/20 bg-cyan-300/10 px-4 py-2 text-sm font-medium text-cyan-100'>
            Product-led UI for a portfolio presentation
          </div>
          <div className='space-y-5'>
            <h1 className='max-w-3xl text-5xl font-semibold tracking-tight text-white md:text-7xl'>
              A sharper storefront built to sell the idea, not just the product.
            </h1>
            <p className='max-w-2xl text-lg leading-8 text-white/70 md:text-xl'>
              SwiftCart now has a polished visual system, real cart behavior, product discovery controls, and a more convincing purchase flow for portfolio reviews.
            </p>
          </div>
          <div className='flex flex-wrap gap-3'>
            <Button text='Shop featured products' onClick={() => navigate('/featured-products')} />
            <Button text='View cart' variant='ghost' onClick={() => navigate('/cart')} />
          </div>
          <div className='grid gap-3 sm:grid-cols-3'>
            {stats.map((stat) => (
              <div key={stat.label} className='rounded-[1.5rem] border border-white/10 bg-white/5 p-4'>
                <div className='text-2xl font-semibold text-white'>{stat.value}</div>
                <div className='mt-1 text-sm text-white/55'>{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        <div className='rounded-[2rem] border border-white/10 bg-white/5 p-5 shadow-2xl shadow-slate-950/40 backdrop-blur'>
          <div className='space-y-4 rounded-[1.5rem] border border-white/10 bg-slate-950/70 p-5'>
            <div className='flex items-center justify-between text-sm text-white/60'>
              <span>Featured drop</span>
              <span>Portfolio-ready</span>
            </div>
            <div className='relative overflow-hidden rounded-[1.5rem]'>
              <img src={spotlightProducts[0].image} alt={spotlightProducts[0].title} className='h-80 w-full rounded-[1.5rem] object-cover' />
              <div className='absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent' />
              <div className='absolute bottom-0 left-0 right-0 p-5'>
                <p className='text-xs uppercase tracking-[0.35em] text-cyan-200/75'>{spotlightProducts[0].category}</p>
                <h2 className='mt-2 text-2xl font-semibold text-white'>{spotlightProducts[0].title}</h2>
                <div className='mt-3 flex items-center gap-2 text-white/70'>
                  <FiStar className='text-cyan-200' />
                  <span>{spotlightProducts[0].rating}</span>
                  <span>•</span>
                  <span>{formatPrice(spotlightProducts[0].price)}</span>
                </div>
              </div>
            </div>
            <div className='grid gap-3 sm:grid-cols-2'>
              <div className='rounded-2xl border border-white/10 bg-white/5 p-4'>
                <FiShield className='text-2xl text-cyan-200' />
                <p className='mt-3 text-sm text-white/65'>Secure checkout-ready flow with persistent cart state.</p>
              </div>
              <div className='rounded-2xl border border-white/10 bg-white/5 p-4'>
                <FiTruck className='text-2xl text-cyan-200' />
                <p className='mt-3 text-sm text-white/65'>Delivery, tax, and totals are surfaced in the cart summary.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className='space-y-6'>
        <div className='flex items-end justify-between gap-4'>
          <div>
            <p className='text-sm uppercase tracking-[0.35em] text-cyan-200/70'>Highlights</p>
            <h2 className='mt-2 text-3xl font-semibold text-white md:text-4xl'>Featured products</h2>
          </div>
          <button className='hidden items-center gap-2 text-sm font-medium text-cyan-200 transition hover:text-white md:inline-flex' onClick={() => navigate('/featured-products')}>
            Browse all <FiArrowRight />
          </button>
        </div>
        <div className='grid gap-5 lg:grid-cols-3'>
          {spotlightProducts.map((product) => (
            <Product_card key={product.id} product={product} />
          ))}
        </div>
      </section>

      <Trending />

      <section className='grid gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-start'>
        <div className='rounded-[2rem] border border-white/10 bg-gradient-to-br from-cyan-300/10 to-white/5 p-6'>
          <p className='text-sm uppercase tracking-[0.35em] text-cyan-200/70'>Why it feels ready</p>
          <h2 className='mt-3 text-3xl font-semibold text-white'>A clear design system and useful interaction states.</h2>
          <p className='mt-4 text-white/65'>The layout now has stronger hierarchy, richer cards, a functioning cart, and product detail pages that help the site feel more like a real storefront.</p>
        </div>
        <Testimonials />
      </section>
    </div>
  )
}

export default Home

