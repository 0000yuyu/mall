import React from 'react'
import './Cart.css'
import { Link, useNavigate } from 'react-router-dom'
import {ReactComponent as HomeIcon} from '../assets/icons/home.svg'
import Header from '../components/Header'
import {ReactComponent as BackIcon} from '../assets/icons/arrow_before.svg'
import CartProductList from '../components/CartProductList'
import CheckBox from '../components/CheckBox'
import Row from '../components/Row'

export default function Cart() {
  const CartData = {
    "네이버": [{
      title: '남성 빈티지 워싱 스트릿 롱슬리브 티셔츠 IS-TS99',
      image: 'https://shopping-phinf.pstatic.net/main_5167548/51675482809.20241207083813.jpg',
      price: 11190,
      size:'m',
      amount:1
    },
    {
      title: '맨스토리 루즈핏 낙서 스트릿 스카치 남자 겨울 맨투맨',
      image: 'https://shopping-phinf.pstatic.net/main_5085528/50855288495.20241016202946.jpg',
      price:45470,
      size:'L',
      amount:3
    }
  ],
  "컨셉샵":[{
    title: 'ACDC 너바나 티셔츠 오아시스 피그먼트 반팔 메탈리카 오버핏 하드락 락밴드 스트릿 남자',
    image: 'https://shopping-phinf.pstatic.net/main_8340249/83402492249.3.jpg',
    price:19900,
    size:'free',
    amount:1
  }]
  }
  const navigate = useNavigate();
  return (
    <div className='cart_container'>
        <div className='cart_header'>
          <Header
          leftIcon={[<button onClick={()=>navigate(-1)}><BackIcon/></button>,<Link><span>장바구니</span></Link>]}
          rightIcon={[<Link><HomeIcon/></Link>]}
          />
        </div>
        <div className='cart_content'>
          <div className='cart_section'>
                {
                  Object.keys(CartData).map(brand=>(
                      <CartProductList brand={brand} productList={CartData[brand]}/>
                  ))
                }
          </div>
          <div className='cart_description'>
          </div>
        </div>
        <Row title="무신사 고객이 찾는 미니멀 스타일 슬랙스" category="슬랙스"></Row>
    </div>
  )
}
