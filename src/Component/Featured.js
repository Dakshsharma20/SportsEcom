import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Featured() {
  const [move, setMove] = useState(0)
  const navigate = useNavigate()

  
  return (
    <div className='h-[130vh] w-[100%] flex justify-center items-center flex-col relative'>
      <h1 className='text-[40px] font-sans font-bold'>Featured</h1>
      <div className='flex  gap-4 mt-5'>
        <label>Best of Freedom!</label>
        <label>Best Sellers</label>
        <label>New Arrivals</label>
      </div>
      <div className='w-[95%] h-[70vh] overflow-hidden '>
        <div style={{ transform: `translateX(-${move}%)` }} className='w-[200%] duration-200 h-[70vh] flex  mt-3 gap-5'>
          <div className='h-[60vh] flex flex-col justify-center items-center'>
            <img className='h-[50vh] ' src='https://www.technosport.in/cdn/shop/files/OR10_20Clay_1_af6cfd2b-bb7f-4542-a35a-59b0526730d3.webp?v=1711105746&width=360'></img>
            <div className='h-[10vh]  flex flex-col gap-[6px]'>
              <label className='text-[13px] mt-3'>Men cubic melange slim fit round......</label>
              <label className='flex justify-center text-[20px]'>₹ 449.00</label>
            </div>
          </div>
          <img className='h-[50vh] ' src='https://www.technosport.in/cdn/shop/files/P777White_1_3d7a3fb3-8d6e-472e-acdc-8917aac365da.jpg?v=1718691122&width=360'></img>
          <img className='h-[50vh] ' src='https://www.technosport.in/cdn/shop/files/OR71PINEGREEN_1.jpg?v=1713763337&width=360'></img>
          <img className='h-[50vh] ' src='https://www.technosport.in/cdn/shop/files/B135PEACHCARAMEL_1_d9892b10-a5e7-46f1-9351-b2dc08e732ec.jpg?v=1719832476&width=360'></img>
          <img className='h-[50vh] ' src='https://www.technosport.in/cdn/shop/products/W113_20Moss_20Green_1_23a97dc0-7d4d-45f2-8e6d-a237f63082ba.webp?v=1710221478&width=360'></img>
          <img className='h-[50vh] ' src='https://www.technosport.in/cdn/shop/files/OR17Clay_1_2a7f9e19-d99c-406b-b343-c6eeddcb94c2.jpg?v=1716201833&width=360'></img>
          <img className='h-[50vh] ' src='https://www.technosport.in/cdn/shop/files/OR30Pumpkin_1.jpg?v=1722407033&width=360'></img>
          <img className='h-[50vh] ' src='https://www.technosport.in/cdn/shop/files/P786White_1_93d8ad2d-3c07-40af-b323-d58ee2bcb5d6.jpg?v=1722858312&width=360'></img>
          <img className='h-[50vh] ' src='https://www.technosport.in/cdn/shop/files/P740HunterGreen_1_79fe2924-d9f3-4a25-828e-e42dfb147537.jpg?v=1722919438&width=360'></img>
          <img className='h-[50vh] ' src='https://www.technosport.in/cdn/shop/files/P740HunterGreen_1_79fe2924-d9f3-4a25-828e-e42dfb147537.jpg?v=1722919438&width=360'></img>
        </div>
        <div className='flex justify-between text-[50px] z-10 absolute w-[95%] top-[45vh] '>
          <label onClick={() => move > 0 ? setMove(move - 10) : null}><i class="fa fa-arrow-left" aria-hidden="true"></i> </label>
          {/* <label ><i class="fa fa-arrow-right" aria-hidden="true"></i> </label> */}
          <img onClick={() => move < 50 ? setMove(move + 10) : null} width="70" height="70" className='bg-white bg-opacity-50 px-4' src="https://img.icons8.com/ios/50/long-arrow-right--v1.png" alt="long-arrow-right--v1" />
        </div>



      </div>
      <div className='w-[100%] h-[10vh] flex  justify-center relative top-[-4vh]'>
        <button onClick={()=> navigate('/all-products')} className='bg-orange-600 text-white h-[35px] w-[140px] '>See All Products</button>
      </div>
      <div className='w-[100%] h-[20vh] bg-gray-300 flex items-center '>
        <div className='w-[33%] h-[13vh]  items-center flex gap-4 flex justify-center  border-1'>
        <img src='https://www.technosport.in/cdn/shop/files/noun-lend-money-426661_1.svg?v=1707561679'></img>
         <div className='flex flex-col   '>
           <label className='text-[28px]'>Free Shipping</label>
           <label className=''>above ₹500</label>
           </div>
        </div>
        <div className='w-[33%] h-[13vh]  items-center flex gap-4 flex justify-center border-1'>
        <img src='https://www.technosport.in/cdn/shop/files/noun-free-shipping-5023518_1.svg?v=1707561666'></img>
         <div className='flex flex-col '>
           <label className='text-[28px]'>Cash on Delivery</label>
           <label className=''>on all orders</label>
           </div>
        </div>
        <div className='w-[33%] h-[20vh]  items-center flex gap-4 flex justify-center'>
        <img src='https://www.technosport.in/cdn/shop/files/noun-easy-returns-5112126_1.svg?v=1707561703'></img>
         <div className='flex flex-col '>
           <label className='text-[28px]'>Easy Returns</label>
           <label className=''>for 7 days</label>
           </div>
        </div>
       
      </div>

    </div>
  )
}

export default Featured