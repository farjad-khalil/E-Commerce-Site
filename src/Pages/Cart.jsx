import { Link, useNavigate } from 'react-router-dom'
import Button from '../components/Button'
import { formatPrice } from '../data/products'
import { useCart } from '../context/CartContext'

function Cart() {
  const navigate = useNavigate()
  const { items, subtotal, shipping, tax, total, updateQuantity, removeFromCart, clearCart } = useCart()

  if (items.length === 0) {
    return (
      <section className="mx-auto flex max-w-4xl flex-col items-center gap-6 py-12 text-center">
        <div className="rounded-full border border-white/10 bg-white/5 px-5 py-2 text-sm text-white/75">
          Your cart is empty
        </div>
        <h1 className="max-w-2xl text-4xl font-semibold tracking-tight text-white md:text-6xl">
          Build a cart worth finishing.
        </h1>
        <p className="max-w-xl text-base text-white/70 md:text-lg">
          Pick a few products, test the interaction flow, and see the complete shopping experience in one place.
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          <Button text="Browse products" onClick={() => navigate('/featured-products')} />
          <Button text="Return home" variant="ghost" onClick={() => navigate('/')} />
        </div>
      </section>
    )
  }

  return (
    <section className="space-y-8 py-8 md:py-12">
      <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="text-sm uppercase tracking-[0.35em] text-cyan-200/70">Order review</p>
          <h1 className="mt-2 text-4xl font-semibold tracking-tight text-white md:text-5xl">Shopping cart</h1>
        </div>
        <Button text="Continue shopping" variant="ghost" onClick={() => navigate('/featured-products')} />
      </div>

      <div className="grid gap-6 lg:grid-cols-[1.6fr_0.9fr]">
        <div className="space-y-4 rounded-[2rem] border border-white/10 bg-slate-950/70 p-4 shadow-2xl shadow-slate-950/40 backdrop-blur md:p-6">
          {items.map((item) => (
            <article key={item.id} className="flex flex-col gap-4 rounded-3xl border border-white/10 bg-white/5 p-4 md:flex-row md:items-center">
              <img src={item.image} alt={item.title} className="h-36 w-full rounded-2xl object-cover md:h-28 md:w-28" />
              <div className="flex-1 space-y-2 text-left">
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <div>
                    <p className="text-xs uppercase tracking-[0.3em] text-cyan-200/70">{item.category}</p>
                    <Link to={`/products/${item.id}`} className="mt-1 block text-xl font-semibold text-white transition hover:text-cyan-200">
                      {item.title}
                    </Link>
                  </div>
                  <div className="text-right text-lg font-semibold text-white">{formatPrice(item.price * item.quantity)}</div>
                </div>
                <p className="max-w-2xl text-sm text-white/65">{item.description}</p>
                <div className="flex flex-wrap items-center gap-3">
                  <div className="flex items-center rounded-full border border-white/10 bg-slate-900 px-2 py-1">
                    <button className="px-3 py-1 text-lg text-white/70 transition hover:text-white" onClick={() => updateQuantity(item.id, item.quantity - 1)}>-</button>
                    <span className="min-w-8 text-center text-sm font-semibold text-white">{item.quantity}</span>
                    <button className="px-3 py-1 text-lg text-white/70 transition hover:text-white" onClick={() => updateQuantity(item.id, item.quantity + 1)}>+</button>
                  </div>
                  <button className="text-sm font-medium text-white/55 transition hover:text-rose-300" onClick={() => removeFromCart(item.id)}>
                    Remove item
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>

        <aside className="space-y-4 rounded-[2rem] border border-white/10 bg-white/5 p-6 shadow-2xl shadow-slate-950/30 backdrop-blur">
          <div className="space-y-2 border-b border-white/10 pb-4">
            <p className="text-sm uppercase tracking-[0.3em] text-cyan-200/70">Summary</p>
            <div className="flex items-center justify-between text-white/70">
              <span>Subtotal</span>
              <span>{formatPrice(subtotal)}</span>
            </div>
            <div className="flex items-center justify-between text-white/70">
              <span>Shipping</span>
              <span>{formatPrice(shipping)}</span>
            </div>
            <div className="flex items-center justify-between text-white/70">
              <span>Estimated tax</span>
              <span>{formatPrice(tax)}</span>
            </div>
          </div>
          <div className="flex items-center justify-between text-xl font-semibold text-white">
            <span>Total</span>
            <span>{formatPrice(total)}</span>
          </div>
          <div className="space-y-3 pt-2">
            <Button text="Checkout preview" E_classes="w-full" onClick={() => navigate('/contact')} />
            <Button text="Clear cart" variant="ghost" E_classes="w-full" onClick={clearCart} />
          </div>
          <p className="text-sm leading-6 text-white/55">
            This demo cart persists in local storage, so the selection stays available between refreshes.
          </p>
        </aside>
      </div>
    </section>
  )
}

export default Cart