import React from 'react'
import Banner from '../components/Banner'
import Content from '../components/Content'
import Footer from '../components/Footer'
import Header from '../components/Header'
import './Home.css'

export default function Home() {
  return (
    <div className='home_container'>
      <div className='home_banner'>
        <Header/>
        <Banner/>
      </div>
      <Content/>
      <Footer/>
    </div>
  )
}
