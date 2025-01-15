import React from 'react'
import Banner from '../components/Banner'
import Content from '../components/Content'
import Footer from '../components/Footer'
import Header from '../components/Header'
import './Home.css'
import { Outlet, Route, Routes } from 'react-router-dom'
import Category from './Category'

// HomeLayout 컴포넌트
function HomeLayout() {
  return (
    <div className='home_container'>
      <div className='home_banner'>
        <Header />
        <Banner />
      </div>
      <Outlet />
      <Footer />
    </div>
  )
}

// Home 컴포넌트
export default function Home() {
  return (
    <Routes>
      <Route path="/" element={<HomeLayout />}>
        <Route index element={<Content />} />
        <Route path='c' element={<Category/>}/>
      </Route>
    </Routes>
  )
}
