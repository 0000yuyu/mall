import React, { useEffect, useState } from 'react'
import './CategoryBar.css'

export default function CategoryBar({CategoryData,categoryChoice,setCategoryChoice}) {
    return (
    <div className='category_side_bar'>
        {
            Object.keys(CategoryData).map((key)=>(
            <div className={categoryChoice == key?"category_name active":"category_name"} onClick={()=>setCategoryChoice(key)}>
                <span className='category_name_text'>
                {key}
            </span>
            </div>
            ))
        }
    </div>
  )
}
