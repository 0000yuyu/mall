import React from 'react'
import CartProduct from './CartProduct'
import './CartProductList.css'
import CheckBox from './CheckBox'

export default function CartProductList({brand,productList}) {
  return (
    <div className='productList_container'>
        <div className='productList_header'>
            <CheckBox/>
            <span className='productList_brand'>{brand}</span>
        </div>
        <div className='productList_section'>
        {
            productList.map(product=>(
                <div className='productList_content'>
                    <CheckBox/>
                    <CartProduct product={product}/>
                </div>
            ))
        }
        </div>
    </div>
    
  )
}
