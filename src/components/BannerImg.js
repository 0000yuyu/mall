import React, { useEffect, useRef, useState } from 'react'
import './BannerImg.css'
import axios from '../api/axios';
import requests from '../api/request';

export default function BannerImg() {
    const [bannerImg, setBannerImg] = useState([]);
    const containerRef = useRef(null);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(requests.fetchShopItem,{
                    params:{
                        query:"세일",
                        display:10
                    }
                });
                const data = await response.data;
                setBannerImg(data.items);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        fetchData(); // 비동기 함수 호출
        setInterval(() => {
            scrollAction();
        }, 3000);
    }, []);
    function scrollAction(){
        const container = containerRef.current;
        if (container.scrollLeft + container.clientWidth >= container.scrollWidth) {
            container.scrollLeft = 0;
        }
        else
            scrollRight();
    }
const scrollRight = () => {
    containerRef.current.scrollBy({ left: window.innerWidth, behavior: 'smooth' }); // 오른쪽으로 스크롤
    };
    const scrollLeft = () => {
    containerRef.current.scrollBy({ left: -window.innerWidth, behavior: 'smooth' }); // 오른쪽으로 스크롤
    };
  return (
    <div>
        <div className='image_container'>
            <div className='image_section' ref={containerRef}>
                {
                    bannerImg.map(img=>(
                        <img key ={img.productId} className='image' src={img.image} alt="banner_img"></img>
                    ))
                }
            </div>
            <div className='image_summary'>
                <h2>첫 구매 혜택 최대 6만 5천원</h2>
                <span>20% 쿠폰과 웰컴딜까지</span>
            </div>
        </div>
    </div>
  )
}
