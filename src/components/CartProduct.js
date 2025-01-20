import React from 'react'
import './CartProduct.css'

export default function CartProduct({product}) {
  return (
    <div className='cart_product_container'>
        <div className='cart_product_section'>
            <img src={product.image}></img>
            <div className='cart_product_description'>
                <span className='cart_product_title'>{product.title}</span>
                <span>{product.size}/{product.amount}개</span>
                <span>{product.price*product.amount}</span>
            </div>
        </div>
        <div className='cart_product_options'>
            <button>옵션 변경</button>
            <button>쿠폰 사용</button>
        </div>
    </div>

  )
}
