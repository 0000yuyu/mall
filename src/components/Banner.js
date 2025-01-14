import React from 'react'
import './Banner.css'
import Search from './Search'
import Header from './Header'
import Nav from './Nav'

export default function Banner() {
  return (
    <div className='banner_container'>
      <Search/>
      <Nav/>
    </div>
  )
}
