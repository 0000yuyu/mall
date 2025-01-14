import React from 'react'
import './Footer.css'
import Toggle from './Toggle'

export default function Footer() {
  return (
    <div className="footer_container">
        <hr></hr>
        <Toggle title={"사업자 정보"} data={"(주)유진 000-0000"}/>
        <Toggle title={"법적 고지사항"} data={"(주)유진 000-0000"}/>
        <Toggle title={"파트너 지원"} data={"(주)유진에 파트너가 되세요"}/>
        <Toggle title={"고객 지원"} data={"영업시간 9:00 - 6: 00"}/>

        <div className='footer_copy'>
            <span>ⓒ YUJIN_YUJIN</span>
            <div className='footer_link'>
                <a>개인정보 처리 방침</a>
                <a>이용약관</a>
                <a>결제대행 위탁사</a>
            </div>
            <p>모든 상품은 네이버 쇼핑에 등록된 상품으로서 연습용 홈페이지 입니다. 모든 상품은 네이버 쇼핑에 등록된 상품으로서 연습용 홈페이지 입니다. 모든 상품은 네이버 쇼핑에 등록된 상품으로서 연습용 홈페이지 입니다.</p>
            <p>모든 상품은 네이버 쇼핑에 등록된 상품으로서 연습용 홈페이지 입니다. 모든 상품은 네이버 쇼핑에 등록된 상품으로서 연습용 홈페이지 입니다. 모든 상품은 네이버 쇼핑에 등록된 상품으로서 연습용 홈페이지 입니다.</p>
            <p>모든 상품은 네이버 쇼핑에 등록된 상품으로서 연습용 홈페이지 입니다. 모든 상품은 네이버 쇼핑에 등록된 상품으로서 연습용 홈페이지 입니다. 모든 상품은 네이버 쇼핑에 등록된 상품으로서 연습용 홈페이지 입니다.</p>
            <p>모든 상품은 네이버 쇼핑에 등록된 상품으로서 연습용 홈페이지 입니다. 모든 상품은 네이버 쇼핑에 등록된 상품으로서 연습용 홈페이지 입니다. 모든 상품은 네이버 쇼핑에 등록된 상품으로서 연습용 홈페이지 입니다.</p>
        </div>
    </div>
  )
}
