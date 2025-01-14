import React, { useState } from 'react'
import './Toggle.css'

export default function Toggle({title,data}) {
    const [toggleOpen, setOpen] = useState(false);
  return (
    <div className='toggle_container'>
        <div className='toggle_header'>
            <span className='toggle_title'>{title}</span>
            <button className='toggle_button'
            onClick={()=>setOpen(!toggleOpen)}
            style={{transform:`${toggleOpen?"rotate(-90deg)":"rotate(90deg)"}`}}>❭</button>
        </div>
        {
            toggleOpen && (
                <div className='toggle_content'>
                {data}
            </div>
            )
        }

    </div>
  )
}
