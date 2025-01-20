import React, { useEffect, useState } from 'react'
import './CategoryGrid.css'
import axios from '../api/axios';
import requests from '../api/request';

export default function CategoryGrid({categoryGender,categoryChoice,CategoryData}) {
    const [categoryImgData,setCategoryImgData] = useState([]);
    useEffect(() => {
        const fetchData = async (name) => {
          try {
              const response = await axios.get(requests.fetchShopItem,{
                params:{
                  query:categoryGender+name,
                  display:1
                }
              });
              const json = await response.data.items; // 함수로 호출해야 함
              setCategoryImgData(prevData => [...prevData, json[0].image]);
          } catch (error) {
              console.error('Error fetching data:', error);
          }
      };
      setCategoryImgData([]);
      CategoryData[categoryChoice]?.map(name=>fetchData(name));
      }, [categoryGender,categoryChoice])
  return (
    <div className='category_grid'>
    <div className='category_grid_title'>{categoryChoice}</div>
    <div className='category_grid_section'>
    {
      CategoryData[categoryChoice]?.map((name,idx)=>(
        <div className='category_grid_content' key={idx}>
          <img className='category_grid_img'src={categoryImgData[idx]}/>
          <span className='category_grid_name'>{name}</span>
          </div>
      ))
    }
  </div>
  </div>
  )
}
