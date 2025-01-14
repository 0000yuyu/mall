import React, { useEffect, useState } from 'react'
import './Nav.css'
import axios from '../api/axios'

export default function Nav() {
    const [activeId, setActiveId] = useState('1');
    const [bannerImg, setBannerImg] = useState(null);
    const [bannerData,setBannerData] = useState([]);
    function handleClick(e){
        setActiveId(e.target.id);
        console.log(e.target.id);
        console.log(bannerData);
        setBannerImg(bannerData[parseInt(e.target.id)]?.image);
    }
    function makeClassName(id){
        return activeId != id ? 'nav_content' : 'nav_content active'
    }
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get("",{
                    params:{
                        query:"옷",
                        display:7
                    }
                });
                const data = await response.data;
                console.log(data) // 함수로 호출해야 함
                setBannerData(data.items);
                setBannerImg(data.items[activeId].image);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData(); // 비동기 함수 호출
    }, []); // activeId가 변경될 때마다 호출

    
    return (
    <div className='nav_container'>
        <div className='nav_content'>
        <span className={makeClassName('1')} id='1' onClick={handleClick}>추천</span>
        <span className={makeClassName('2')} id='2' onClick={handleClick}>추천</span>
        <span className={makeClassName('3')} id='3' onClick={handleClick}>추천</span>
        <span className={makeClassName('4')} id='4' onClick={handleClick}>추천</span>
        <span className={makeClassName('5')} id='5' onClick={handleClick}>추천</span>
        <span className={makeClassName('6')} id='6' onClick={handleClick}>추천</span>
        </div>
        <div className='nav_image'>
            <img src={bannerImg}/>
            <div className='nav_image summary'>
                <h2>첫 구매 혜택 최대 6만 5천원</h2>
                <span>20% 쿠폰과 웰컴딜까지</span>
            </div>
        </div>
    </div>
  )
}
