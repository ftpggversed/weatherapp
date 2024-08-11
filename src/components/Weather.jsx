import React from 'react'
import './Weather.css'
import search_icon from '../assets/search.png'

const Weather = () => {
  return (
    <div className='weather'>
        <div className="searchbar"></div>
        <input type="text" placeholder='search' />
        <img src={search_icon} alt="" />
    </div>
  )
}

export default Weather
