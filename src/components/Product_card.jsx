import React from 'react'
import Button from './Button'
import { useNavigate } from 'react-router'

function Product_card({ title, price, rating,index,image_add}) {
    const navigate = useNavigate()
    return (
        <div className='w-72 h-88 border rounded-2xl flex flex-col items-center justify-between pb-2 mb-10 transition-all duration-300 hover:shadow-lg hover:shadow-neutral-500 hover:scale-105' >
            <img src={"https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=1999&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"} alt="Placeholder" className=" h-44 w-full rounded-t-2xl object-cover hover:cursor-pointer" onClick={()=>{navigate(`/products/${index}`)}}/>
            <div className='w-full h-full flex flex-col justify-evenly px-3 ' onClick={()=>{navigate(`/products/${index}`)}}>
                <div className='font-semibold text-xl'>{title}</div>
                <div className='text-neutral-300'>{price}</div>
                <div className='text-neutral-400'>{rating}★</div>
            </div>
            <Button text="Add to Cart" E_classes="w-68" />
        </div>
    )
}

export default Product_card
