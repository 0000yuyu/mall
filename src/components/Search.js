import React from 'react'
import './Search.css'

export default function Search() {
  return (
    <div className='search_container'>
      <input type='text' placeholder='검색어를 입력하세요.'></input>
      <img src='assets\icons\search.svg'></img>
    </div>
  )
}
