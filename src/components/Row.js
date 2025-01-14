import React, { useEffect, useRef, useState } from 'react'
import './Row.css'
import axios from '../api/axios';

export default function Row({title,category}) {
  const [products, setProducts] = useState([])
  const containerRef = useRef(null);
  useEffect(() => {
    const fetchData = async () => {
        try {
            const response = await axios.get("",{
              params:{
                query:category,
                display:20
              }
            });
            const json = await response.data.items; // 함수로 호출해야 함
            setProducts(json);
            console.log(json);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    fetchData(); // 비동기 함수 호출
}, []);
const scrollRight = () => {
  containerRef.current.scrollBy({ left: window.innerWidth, behavior: 'smooth' }); // 오른쪽으로 스크롤
};
const scrollLeft = () => {
  containerRef.current.scrollBy({ left: -window.innerWidth, behavior: 'smooth' }); // 오른쪽으로 스크롤
};
const cleanText = (originalText) => {
  return originalText.replace(/<[^>]*>/g, '');
}
const setType = (productType) =>{
  switch (Number(productType)) {
    case 1:
    case 2:
      return "일반"
    case 3:
    case 4:
    case 5:
    case 6:
      return "중고"
    case 7:
    case 8:
    case 9:
      return "단종"
    default:
      return "판매 예정";
  }
}
  
  return (
    <div className='row_container'>
      <div className='row_header'>
        <h3>{title}</h3>
        <div className='row_buttons'>
          <button onClick={scrollLeft}>◀</button>
          <button onClick={scrollRight}>▶</button>
        </div>
      </div>
      <div className='product_container' ref={containerRef}>
      {
        products.map(product=>(
          <div className='product_section' key={product.productId}>
            <div className='product_image'>
              <img src={product.image}></img>
            </div>
            <div className='product_content'>
              <span className='product_mall'>{product.marker || product.mallName}</span>
              <span className='product_title'>{cleanText(product.title)}</span>
              <div className='product_description'>
                <span className='product_type'>{setType(product.productType)}</span>
                <span className='product_price'>{Number(product.lprice).toLocaleString()}</span>
              </div>
              </div>
          </div>
        ))
      }
      
    </div>
    </div>
  )
}
