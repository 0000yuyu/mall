import React from 'react'
import './Content.css'
import Row from './Row'

export default function Content() {
  return (
    <div className='content_container'>
        <Row title={"스트릿 스타일 브랜드 아이템 추천"} category={"스트릿"}/>
        <Row title={"무신사 고객이 찾는 스포티 스타일\n"}category={"스포티"}/>
    </div>
  )
}
