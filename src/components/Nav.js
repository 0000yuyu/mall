import React, { useEffect, useState } from 'react'
import './Nav.css'
import axios from '../api/axios'
import { Link } from 'react-router-dom';

export default function Nav() {
    const [activeId, setActiveId] = useState('1');
    function handleClick(e){
        setActiveId(e.target.id);
    }
    function makeClassName(id){
        return activeId != id ? 'nav_content' : 'nav_content active'
    }

    
    return (
    <div className='nav_container'>
        <div className='nav_section'>
            <Link to="/home" className={makeClassName('1')} id='1' onClick={handleClick}>
                추천
            </Link>
            <Link to="/home" className={makeClassName('2')} id='2' onClick={handleClick}>
                추천
            </Link>
            <Link to="/home" className={makeClassName('3')} id='3' onClick={handleClick}>
                추천
            </Link>
            <Link to="/home" className={makeClassName('4')} id='4' onClick={handleClick}>
                추천
            </Link>
            <Link to="/home" className={makeClassName('5')} id='5' onClick={handleClick}>
                추천
            </Link>
            <Link to="/home" className={makeClassName('6')} id='6' onClick={handleClick}>
                추천
            </Link>
        </div>
    </div>
  )
}
