import { useState } from 'react'
import Product_card from '../components/Product_card'
import Button from '../components/Button'
import { products } from '../data/products'

const FeaturedProducts = () => {
  const [search, setSearch] = useState('')
  const [category, setCategory] = useState('All')
  const [sortMode, setSortMode] = useState('featured')
  const [showAll, setShowAll] = useState(false)

  const categories = ['All', ...new Set(products.map((product) => product.category))]

  const filteredProducts = products
    .filter((product) => {
      const matchesSearch = `${product.title} ${product.description} ${product.category}`.toLowerCase().includes(search.toLowerCase())
      const matchesCategory = category === 'All' || product.category === category
      return matchesSearch && matchesCategory
    })
    .sort((left, right) => {
      if (sortMode === 'price-low') return left.price - right.price
      if (sortMode === 'price-high') return right.price - left.price
      if (sortMode === 'rating') return right.rating - left.rating
      return right.reviewCount - left.reviewCount
    })

  const visibleProducts = showAll ? filteredProducts : filteredProducts.slice(0, 9)

  return (
    <section className='space-y-8 py-8 md:py-12'>
      <div className='flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between'>
        <div>
          <p className='text-sm uppercase tracking-[0.35em] text-cyan-200/70'>Catalog</p>
          <h1 className='mt-2 text-4xl font-semibold tracking-tight text-white md:text-5xl'>Featured products</h1>
          <p className='mt-3 max-w-2xl text-white/65'>Search, sort, and filter the catalog to simulate a more complete shopping experience.</p>
        </div>
        <div className='rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/70'>
          {filteredProducts.length} products available
        </div>
      </div>

      <div className='grid gap-4 rounded-[2rem] border border-white/10 bg-white/5 p-4 md:grid-cols-[1.5fr_0.7fr_0.7fr] md:p-5'>
        <input value={search} onChange={(event) => setSearch(event.target.value)} placeholder='Search products, categories, or features' className='rounded-full border border-white/10 bg-slate-950/70 px-4 py-3 text-sm text-white outline-none placeholder:text-white/30 focus:border-cyan-200/40' />
        <select value={category} onChange={(event) => setCategory(event.target.value)} className='rounded-full border border-white/10 bg-slate-950/70 px-4 py-3 text-sm text-white outline-none focus:border-cyan-200/40'>
          {categories.map((item) => (
            <option key={item}>{item}</option>
          ))}
        </select>
        <select value={sortMode} onChange={(event) => setSortMode(event.target.value)} className='rounded-full border border-white/10 bg-slate-950/70 px-4 py-3 text-sm text-white outline-none focus:border-cyan-200/40'>
          <option value='featured'>Featured first</option>
          <option value='rating'>Top rated</option>
          <option value='price-low'>Price: low to high</option>
          <option value='price-high'>Price: high to low</option>
        </select>
      </div>

      {visibleProducts.length > 0 ? (
        <div className='grid gap-5 lg:grid-cols-3'>
          {visibleProducts.map((product) => (
            <Product_card key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <div className='rounded-[2rem] border border-white/10 bg-white/5 p-10 text-center text-white/65'>
          No products matched your search.
        </div>
      )}

      {filteredProducts.length > 9 ? (
        <div className='flex justify-center'>
          <Button onClick={() => setShowAll(!showAll)} E_classes='min-w-44' text={showAll ? 'Show less' : 'Show all'} />
        </div>
      ) : null}
    </section>
  )
}

export default FeaturedProducts

