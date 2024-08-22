import React, { useState } from 'react'

export default function Intro() {
  const[slide, setSlide] = useState(0)
  return (
    <div className='h-[100vh] w-[100%] bg-red-800 overflow-hidden'>
        <div style={{transform: `translateX(-${slide}%)`}} className='h-[100vh] w-[300%] duration-200 flex items-start'>
        
          <div className='w-[100%] bg-cover h-[100vh] bg-[url(https://www.technosport.in/cdn/shop/files/IMG_5092.jpg)]'></div>
          <div className='w-[100%] bg-cover h-[100vh] bg-[url(https://www.technosport.in/cdn/shop/files/Sporty-Collection-Banner.jpg)]'></div>
          <div className='w-[100%] bg-cover h-[100vh] bg-[url(https://www.technosport.in/cdn/shop/files/Technosport_Des_banner_Gif_1600_x_611_1.gif)]'></div>
        
          
        </div>
       <div className='flex justify-between  text-[70px] top-[50vh] w-[95%] absolute'>
        <label onClick={()=> slide>0 ? setSlide(slide - 33.3) : setSlide(66.6)}>{"<"}</label>
        <label onClick={()=> slide<66 ? setSlide(slide + 33.3):null}>{">"}</label>
       </div>
    </div>
  
  )
}
