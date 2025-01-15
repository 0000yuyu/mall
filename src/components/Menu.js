import React from 'react'
import './Menu.css'
import {ReactComponent as HomeIcon} from '../assets/icons/home.svg';
import {ReactComponent as MenuIcon} from '../assets/icons/hamburger-menu.svg'
import {ReactComponent as SnapIcon} from '../assets/icons/share.svg';
import {ReactComponent as HeartIcon} from '../assets/icons/heart.svg'
import UserIcon from '../assets/images/avatar.png';
export default function Menu() {
  return (
    <div className='menu_container'>
      <div className='menu_section'>
        <a className='menu_button' href='/category'>
          <MenuIcon className='menu_icon'/>
          <span>카테고리</span>
        </a>
        <a className='menu_button' href='#'>
          <SnapIcon className='menu_icon'/>
          <span>스냅</span>
        </a>
        <a className='menu_button' href='/home'>
          <HomeIcon className='menu_icon'/>
          <span>무신사 홈</span>
        </a>
        <a className='menu_button' href='#'>
          <HeartIcon className='menu_icon'/>
          <span>좋아요</span>
        </a>
        <a className='menu_button' href='#'>
          <img src={UserIcon} className='menu_icon'></img>
          <span>마이</span>
        </a>
      </div>
    </div>
  )
}
