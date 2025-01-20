import React from 'react'
import Banner from '../components/Banner'
import Content from '../components/Content'
import Footer from '../components/Footer'
import Header from '../components/Header'
import './Home.css'
import { ReactComponent as ShopIcon } from '../assets/icons/shop.svg'
import {ReactComponent as NotificationIcon} from '../assets/icons/notifications.svg';
import { Link, Outlet, Route, Routes } from 'react-router-dom'

// HomeLayout 컴포넌트
function HomeLayout() {
  return (
    <div className='home_container'>
      <div className='home_banner'>
        <Header
        leftIcon={[<Link to={'/home'}><img src='https://image.msscdn.net/display/images/2024/07/19/3a7caf3364184181a3cae5741f91464f.png'></img></Link>]}
        rightIcon={[<Link to={'#'}><NotificationIcon/></Link>,<Link to={'/cart'}><ShopIcon/></Link>]}/>
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
        <Route path='/' element={<Content />} />
      </Route>
    </Routes>
  )
}
