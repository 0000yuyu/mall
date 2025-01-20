import React from 'react'
import './Header.css'

import { Link } from 'react-router-dom';
export default function Header({className,leftIcon,rightIcon}) {
  return (
    <div className={'header_container ' + className}>
        <div className='header_icons'>
          {
            leftIcon.map(Icon=>(
              <span className='header_icon left'>
                {Icon}
              </span>
            ))
          }
        </div>
        <div className='header_icons'>
          {
            rightIcon.map(Icon=>(
              <span className='header_icon right'>
                {Icon}
              </span>
            ))
          }
        </div>
    </div>
  )
}
