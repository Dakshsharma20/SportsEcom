import React, { useState } from 'react'
import Header from '../Component/Header'
import Footer from '../Component/Footer'

function ProductDetail() {
  const [move, setMove] = useState(0)
  return (
    <div>
      <Header></Header>
      <div className='h-[150vh] w-[100%] flex justify-center'>
        <div className='h-[120vh] w-[43%] mt-16 flex gap-2'>
          <div className='w-[15%] h-[120vh]  flex flex-col gap-2  '>
            <img src='https://www.technosport.in/cdn/shop/files/OR26Black_1.jpg?v=1717753800&width=120'></img>
            <img src='https://www.technosport.in/cdn/shop/files/OR26Black_1.jpg?v=1717753800&width=120'></img>
            <img src='https://www.technosport.in/cdn/shop/files/OR26Black_1.jpg?v=1717753800&width=120'></img>
            <img src='https://www.technosport.in/cdn/shop/files/OR26Black_1.jpg?v=1717753800&width=120'></img>
            <img src='https://www.technosport.in/cdn/shop/files/OR26Black_1.jpg?v=1717753800&width=120'></img>
            <img src='https://www.technosport.in/cdn/shop/files/OR26Black_1.jpg?v=1717753800&width=120'></img>
          </div>
          <div className='w-[85%] h-[100Vh] sticky top-10'>
            <img className='' src='https://www.technosport.in/cdn/shop/files/OR26Black_1.jpg?v=1717753800&width=713'></img>
          </div>
        </div>
        <div className=' w-[43%] h-[120vh]  mt-16 flex flex-col gap-4'>
          <label className='px-3'><i class="fa fa-star" aria-hidden="true"></i> (Review)</label>
          <h1 className='text-[35px] px-3'>Men Plus Size Solid Slim Fit Active Shorts with TECHNO DRY</h1>
          <div className='flex flex-col px-3'>
            <label className='font-bold text-[30px]'>₹ 499.00  </label>
            <label>Tax included.</label>
          </div>
          <label className='text-green-600 px-3'>Buy Any 2 Products & Get 5% Off</label>
          <label className='px-3 taext-[25px]'>SKU:MSOR26BLK3XL</label>
          <div className='px-3 '>
            Color: Black
            <div className='h-[15vh] w-[80%] flex gap-2 mt-3 '>
              <img className='rounded-2xl' src='https://www.technosport.in/cdn/shop/files/OR26Black_3.jpg?v=1717753800&width=120'></img>
              <img className='rounded-2xl' src='https://www.technosport.in/cdn/shop/files/OR26Black_2.jpg?v=1717753800&width=120'></img>
              <img className='rounded-2xl' src='https://www.technosport.in/cdn/shop/files/OR26Black_5.jpg?v=1717753800&width=120'></img>
              <img className='rounded-2xl' src='https://www.technosport.in/cdn/shop/files/OR26Black_6.jpg?v=1717753800&width=120'></img>
              <img className='rounded-2xl' src='https://www.technosport.in/cdn/shop/files/OR26Black_1.jpg?v=1717753800&width=120'></img>
              <img className='rounded-2xl' src='https://www.technosport.in/cdn/shop/files/OR26Black_3.jpg?v=1717753800&width=120'></img>

            </div>


          </div>
          <label className='px-3'>SIZE</label>
          <div className='flex gap-3 px-3'>
            <button className='h-[50px] w-[50px] border rounded-full'>3XL</button>
            <button className='h-[50px] w-[50px] border rounded-full'>4XL</button>
            <button className='h-[50px] w-[50px] border rounded-full'>5XL</button>
          </div>
          <div className='h-[30vh] flex gap-3 px-3'>
            <button className='h-[8vh] w-[20%] border-black border'><i class="fa fa-heart" aria-hidden="true"></i>  Wishlist</button>
            <button className='h-[8vh] w-[30%]  bg-orange-500'>Add to bag</button>
          </div>
          <div className='w-[90%] h-[10vh] ml-4 bg-gray-300 flex items-center '>
            <div className='w-[33%] h-[8vh]  items-center flex gap-4 flex justify-center  border-1'>
              <img src='https://www.technosport.in/cdn/shop/files/noun-lend-money-426661_1.svg?v=1707561679'></img>
              <div className='flex flex-col   '>
                <label className='text-[15px]'>Free Shipping</label>
                <label className='text-[10px]'>above ₹500</label>
              </div>
            </div>
            <div className='w-[33%] h-[8vh]  items-center flex gap-4 flex justify-center border-1'>
              <img src='https://www.technosport.in/cdn/shop/files/noun-free-shipping-5023518_1.svg?v=1707561666'></img>
              <div className='flex flex-col '>
                <label className='text-[15px]'>Cash on Delivery</label>
                <label className='text-[10px]'>on all orders</label>
              </div>
            </div>
            <div className='w-[33%] h-[20vh]  items-center flex gap-4 flex justify-center'>
              <img src='https://www.technosport.in/cdn/shop/files/noun-easy-returns-5112126_1.svg?v=1707561703'></img>
              <div className='flex flex-col '>
                <label className='text-[15px]'>Easy Returns</label>
                <label className='text-[10px]'>for 7 days</label>
              </div>
            </div>

          </div>
        </div>
      </div>

      <div className='h-[80vh] w-[100%] flex justify-center items-center flex-col relative bg-gray-300 py-5 '>
      <h1 className='text-[40px] font-sans font-bold'>You May Also Like</h1>
      <div className='flex  gap-4 mt-5'>
       
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
        <div className='flex justify-between text-[50px] z-10 absolute w-[95%] top-[30vh] '>
          <label onClick={() => move > 0 ? setMove(move - 10) : null}><i class="fa fa-arrow-left" aria-hidden="true"></i> </label>
          {/* <label ><i class="fa fa-arrow-right" aria-hidden="true"></i> </label> */}
          <img onClick={() => move < 50 ? setMove(move + 10) : null} width="70" height="70" className='bg-white bg-opacity-50 px-4' src="https://img.icons8.com/ios/50/long-arrow-right--v1.png" alt="long-arrow-right--v1" />
        </div>



      </div>
      
      

    </div>
    

    
   <Footer></Footer> 
    </div>
  )
}

export default ProductDetail