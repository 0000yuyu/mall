import React from 'react'
import './Header.css'

export default function Header() {
  return (
    <div className='header_container'>
        <img className="header_logo" src='https://image.msscdn.net/display/images/2024/07/19/3a7caf3364184181a3cae5741f91464f.png'></img>
        <div className='header_icons'>
            <img src='assets\icons\notifications.svg'></img>
            <img src='assets\icons\shop.svg'></img>
        </div>
    </div>
  )
}
