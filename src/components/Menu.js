import React from 'react'
import './Menu.css'
export default function Menu() {
  return (
    <div className='menu_container'>
      <div className='menu_section'>
        <a className='menu_button' href='#'>
          <img src="/assets/icons/hamburger-menu.svg"></img>
          <span>카테고리</span>
        </a>
        <a className='menu_button' href='#'>
          <img src="/assets/icons/share.svg"></img>
          <span>스냅</span>
        </a>
        <a className='menu_button' href='/'>
          <img src="/assets/icons/home.svg"></img>
          <span>무신사 홈</span>
        </a>
        <a className='menu_button' href='#'>
          <img src="/assets/icons/heart.svg"></img>
          <span>좋아요</span>
        </a>
        <a className='menu_button' href='#'>
          <img src="/assets/images/avatar.png"></img>
          <span>마이</span>
        </a>
      </div>
    </div>
  )
}
