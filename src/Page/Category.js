import React from 'react'
import './Category.css'
import Search from '../components/Search'

export default function Category() {
  return (
    <div className='category_container'>
      <div className='category_search_header'>
        <Search/>
        <svg className="shop-icon">
            <use href="/assets/icons/shop.svg"></use>
        </svg>

      </div>
    </div>
  )
}
