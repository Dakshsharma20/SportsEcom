import React, { useState } from 'react'

function Featured() {
    const[move, setMove] = useState(0)
  return (
    <div className='h-[100vh] w-[100%] flex justify-center items-center flex-col relative'>
        <h1 className='text-[40px] font-sans font-bold'>Featured</h1>
        <div className='flex  gap-4 mt-5'>
        <label>Best of Freedom!</label>
        <label>Best Sellers</label>
        <label>New Arrivals</label>
        </div>
        <div className='w-[95%] h-[70vh] overflow-hidden'>
            <div style={{transform: `translateX(-${move}%)`}} className='w-[200%] duration-200 h-[70vh] flex  mt-3 gap-5'>
                <img className='h-[71%] w-[%]' src='https://www.technosport.in/cdn/shop/files/OR10_20Clay_1_af6cfd2b-bb7f-4542-a35a-59b0526730d3.webp?v=1711105746&width=360'></img>
                <img className='h-[71%] w-[%]' src='https://www.technosport.in/cdn/shop/files/P777White_1_3d7a3fb3-8d6e-472e-acdc-8917aac365da.jpg?v=1718691122&width=360'></img>
                <img className='h-[71%] w-[%]' src='https://www.technosport.in/cdn/shop/files/OR71PINEGREEN_1.jpg?v=1713763337&width=360'></img>
                <img className='h-[71%] w-[%]' src='https://www.technosport.in/cdn/shop/files/B135PEACHCARAMEL_1_d9892b10-a5e7-46f1-9351-b2dc08e732ec.jpg?v=1719832476&width=360'></img>
                <img className='h-[71%] w-[%]' src='https://www.technosport.in/cdn/shop/products/W113_20Moss_20Green_1_23a97dc0-7d4d-45f2-8e6d-a237f63082ba.webp?v=1710221478&width=360'></img>
                <img className='h-[71%] w-[%]' src='https://www.technosport.in/cdn/shop/files/OR17Clay_1_2a7f9e19-d99c-406b-b343-c6eeddcb94c2.jpg?v=1716201833&width=360'></img>
                <img className='h-[71%] w-[%]' src='https://www.technosport.in/cdn/shop/files/OR30Pumpkin_1.jpg?v=1722407033&width=360'></img>
                <img className='h-[71%] w-[%]' src='https://www.technosport.in/cdn/shop/files/P786White_1_93d8ad2d-3c07-40af-b323-d58ee2bcb5d6.jpg?v=1722858312&width=360'></img>
                <img className='h-[71%] w-[%]' src='https://www.technosport.in/cdn/shop/files/P740HunterGreen_1_79fe2924-d9f3-4a25-828e-e42dfb147537.jpg?v=1722919438&width=360'></img>
                <img className='h-[71%] w-[%]' src='https://www.technosport.in/cdn/shop/files/P740HunterGreen_1_79fe2924-d9f3-4a25-828e-e42dfb147537.jpg?v=1722919438&width=360'></img>
            </div>
            <div className='flex justify-between text-[50px] z-10 absolute w-[95%] top-[45vh] '>
                <label onClick={()=> move>0 ? setMove(move - 10): null}><i class="fa fa-arrow-left" aria-hidden="true"></i> </label>
                {/* <label ><i class="fa fa-arrow-right" aria-hidden="true"></i> </label> */}
                <img onClick={()=> move<50 ? setMove(move + 10): null} width="70" height="70" className='bg-white bg-opacity-50 px-4' src="https://img.icons8.com/ios/50/long-arrow-right--v1.png" alt="long-arrow-right--v1"/>
                </div>

        </div>
    </div>
  )
}

export default Featured