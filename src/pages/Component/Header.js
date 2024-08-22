import React from 'react'

function Header() {
  return (
    <div className=' header h-[10vh] w-[100%] absolute z-[1] text-white bg-transparent flex items-center gap-10 pl-4 justify-between   '>
       <div className='flex items-center gap-10'>
        <img src='https://www.technosport.in/cdn/shop/files/Techno_Logo_White.svg?v=1707547053'></img>
        <label>Men</label>
        <label>Women</label>
        <label>Boys</label>
        <label>Fresh Picks</label>
        <label>Blogs</label>
        </div>
        <div className='flex items-center gap-8 pr-5 text-[20px] text-black'>
        <i class=" relative left-[60px] text-black fa fa-search" aria-hidden="true"></i>
        <input className='pl-10 h-7 w-[40%] text-[15px]' placeholder='Search'></input>
            <i class="fa fa-user-o" aria-hidden="true"></i>
            <i class="fa fa-heart-o" aria-hidden="true"></i>
            <i class="fa fa-shopping-bag" aria-hidden="true"></i>




        </div>
       
    </div>
  )
}

export default Header