import React, { useEffect, useState } from 'react'
import './Category.css'
import Search from '../components/Search'
import {ReactComponent as ShopIcon} from '../assets/icons/shop.svg'
import CategoryData from '../assets/data.json'
import axios from '../api/axios'
import requests from '../api/request'
import CategoryBar from '../components/CategoryBar'
import CategoryGrid from '../components/CategoryGrid'
import { Link } from 'react-router-dom'

export default function Category() {
  const [categoryChoice,setCategoryChoice] = useState("");
  const [categoryImgData, setCategoryImgData] = useState([])
  const [categoryGender,setCategoryGender] = useState("");
  useEffect(() => {
    setCategoryChoice('뷰티')
  }, [])
  
  
  return (
    <div className='category_container'>
      <div className='category_search_bar'>
        <Search className='category_search_icon'/>
        <Link to='/cart' className='category_shop_icon'><ShopIcon/></Link>
      </div>
      <div className='category_section'>
        <div className='category_menu'>
          <span className='category_menu_name active'>카테고리</span>
        </div>
        <div className='divider'></div>
        <div className='category_menu'>
          <span className={categoryGender == "" ? 'category_menu_name active' : 'category_menu_name'} onClick={()=>setCategoryGender("")}>전체</span>
          <span className={categoryGender == "남성" ? 'category_menu_name active' : 'category_menu_name'} onClick={()=>setCategoryGender("남성")}>남성</span>
          <span className={categoryGender == "여성" ? 'category_menu_name active' : 'category_menu_name'} onClick={()=>setCategoryGender("여성")}>여성</span>
        </div>
        <div className='divider'></div>
        <div className='category_content'>
          <CategoryBar  CategoryData={CategoryData} categoryChoice={categoryChoice} setCategoryChoice={setCategoryChoice}/>
          <CategoryGrid categoryGender={categoryGender} categoryChoice={categoryChoice} CategoryData={CategoryData}/>
        </div>
      </div>
      </div>
  )
}
