import React from 'react'
import './Header.css'
import { ReactComponent as ShopIcon } from '../assets/icons/shop.svg'
import {ReactComponent as NotificationIcon} from '../assets/icons/notifications.svg';
export default function Header() {
  return (
    <div className='header_container'>
        <img className="header_logo" src='https://image.msscdn.net/display/images/2024/07/19/3a7caf3364184181a3cae5741f91464f.png'></img>
        <div className='header_icons'>
            <NotificationIcon className='header_icon'/>
            <ShopIcon className="header_icon" />
        </div>
    </div>
  )
}
