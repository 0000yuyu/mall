import React from 'react'
import './Search.css'
import {ReactComponent as SearchIcon} from '../assets/icons/search.svg'

export default function Search() {
  return (
    <div className='search_container'>
      <div className='search_section'>
      <input type='text' placeholder='검색어를 입력하세요.'></input>
      <SearchIcon className='search_icon'/>
      </div>
    </div>
  )
}
