/* eslint-disable react/prop-types */
import Button from './Button'
import { useNavigate } from 'react-router-dom'
import { formatPrice } from '../data/products'
import { useCart } from '../context/CartContext'

function Product_card({ product, title, price, rating, index, image_add, onAdd }) {
    const navigate = useNavigate()
    const { addToCart } = useCart()
    const productData = product ?? { id: index, title, price, rating, image: image_add }
    const imageSource = productData.image ?? image_add

    const handleAddToCart = (event) => {
        event.stopPropagation()
        if (productData?.id) {
            if (onAdd) {
                onAdd(productData)
            } else {
                addToCart(productData, 1)
            }
        }
    }

    return (
        <article
            className='group overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 shadow-[0_20px_80px_rgba(15,23,42,0.45)] transition duration-300 hover:-translate-y-1 hover:border-cyan-200/30 hover:bg-white/[0.07]'
            onClick={() => navigate(`/products/${productData.id}`)}
        >
            <div className='relative overflow-hidden'>
                <img src={imageSource} alt={productData.title} className='h-56 w-full object-cover transition duration-500 group-hover:scale-105' />
                <div className='absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent' />
                <div className='absolute left-4 top-4 rounded-full border border-white/10 bg-slate-950/70 px-3 py-1 text-xs font-medium text-white/80 backdrop-blur'>
                    {productData.category ?? 'Featured'}
                </div>
            </div>

            <div className='space-y-4 p-5 text-left'>
                <div className='space-y-2'>
                    <h3 className='text-xl font-semibold text-white'>{productData.title}</h3>
                    <p className='text-sm text-white/60'>{productData.description?.slice(0, 92) ?? 'Product-ready details with polished presentation.'}</p>
                </div>

                <div className='flex items-center justify-between text-sm text-white/70'>
                    <span>{formatPrice(productData.price ?? 0)}</span>
                    <span>{productData.rating?.toFixed?.(1) ?? rating ?? 0}★</span>
                </div>

                <Button text='Add to cart' E_classes='w-full' onClick={handleAddToCart} />
            </div>
        </article>
    )
}

export default Product_card
