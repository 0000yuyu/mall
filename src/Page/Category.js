import React from 'react'
import './Category.css'
import Search from '../components/Search'
import {ReactComponent as ShopIcon} from '../assets/icons/shop.svg'
import CategoryData from '../assets/data.json'

export default function Category() {
  return (
    <div className='category_container'>
      <div className='category_search_bar'>
        <Search className='category_search_icon'/>
        <ShopIcon className='category_shop_icon'/>
      </div>
      <div className='category_section'>
        <div className='category_menu'>
          <span className='category_menu_name active'>전체</span>
          <span className='category_menu_name'>전체</span>
          <span className='category_menu_name'>전체</span>
        </div>
        <div className='divider'></div>
        <div className='category_menu'>
          <span className='category_menu_name active'>전체</span>
          <span className='category_menu_name'>전체</span>
          <span className='category_menu_name'>전체</span>
        </div>
        <div className='divider'></div>
        <div className='category_content'>
        <div className='category_side_bar'>
        <div className='category_name active'>
              <span className='category_name_text'>
              테스트
            </span>
            </div>
        {
          Object.keys(CategoryData).map((key)=>(
            <div className='category_name'>
              <span className='category_name_text'>
              {key}
            </span>
            </div>
          ))
        }
        </div>
        <div className='category_grid'>
          {
            CategoryData['뷰티'].map((name)=>(
              <span className='category_grid_name'>{name}</span>
            ))
          }
        </div>
        </div>
      </div>
      </div>
  )
}
