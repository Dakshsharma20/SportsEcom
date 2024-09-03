import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Header() {
  const [sidebar , setSidebar]= useState(false)
  const navigate = useNavigate()
  return (
    <div className=' header h-[10vh] w-[100%] absolute z-[1] text-black  flex items-center gap-10 pl-4 justify-between   '>
       <div className='flex items-center gap-10 '>
        <img className='' src='https://www.technosport.in/cdn/shop/files/Techno_Logo_White.svg?v=1707547053'></img>
        <label onClick={()=> navigate('/all-products')}>Men</label>
        <label onClick={()=> navigate('/all-products')}>Women</label>
        <label onClick={()=> navigate('/all-products')}>Boys</label>
        <label onClick={()=> navigate('/all-products')}>Fresh Picks</label>
        <label >Blogs</label>
        </div>
        <div className='flex items-center gap-8 pr-5 text-[20px] text-black'>
        <i class=" relative left-[60px] text-black fa fa-search" aria-hidden="true"></i>
        <input className='pl-10 h-7 w-[40%] text-[15px]' placeholder='Search'></input>
            <i onClick={()=> navigate('/login')} class="fa fa-user-o" aria-hidden="true"></i>
            <i class="fa fa-heart-o" aria-hidden="true"></i>
            <i onClick={()=>setSidebar(true)} class="fa fa-shopping-bag" aria-hidden="true"></i>
        </div>
        <div className='w-[30%] h-[100vh] flex flex-col bg-[#F5F5F5] px-5 top-0 fixed right-0 duration-300 'style={{right:sidebar==true?"0":"-30%"}}>
          <div className='h-[10%] w-[100%] flex items-center justify-between'>
            <label className='text-[30px] '>Shopping Cart  </label>
            <label onClick={()=>setSidebar(false)} className='text-[30px] pl-5'>X</label>
          </div>
        </div>
       
    </div>
  )
}

export default Header