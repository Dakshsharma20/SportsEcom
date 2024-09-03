import React from 'react'
import { useNavigate } from 'react-router-dom'

function Select() {
    
  return (
    <div className='w-[100%] h-[55vh] bg-[#f5f5f5c9] flex justify-center items-center gap-4'>
        <div className='w-[20%] h-[45vh] flex flex-col  items-center text-[25px]'>
            <img  src='https://www.technosport.in/cdn/shop/files/TechnoSport_Collective_Banner_1.jpg?v=1722657802&width=360'></img>
            Plus Size Collection

        </div>
        <div className='w-[20%] h-[45vh] flex flex-col  items-center text-[25px]'>
            <img src='https://www.technosport.in/cdn/shop/files/TechnoSport_Collective_Banner_2.jpg?v=1722657802&width=360'></img>
            Men's

        </div>
        <div className='w-[20%] h-[45vh] flex flex-col  items-center text-[25px]'>
            <img src='https://www.technosport.in/cdn/shop/files/TechnoSport_Collective_Banner_3.jpg?v=1722657803&width=360'></img>
            Women's

        </div>
        <div className='w-[20%] h-[45vh] flex flex-col  items-center text-[25px] '>
            <img src='https://www.technosport.in/cdn/shop/files/TechnoSport_Collective_Banner_4.jpg?v=1722657802&width=360'></img>
            Boys

        </div>

    </div>

  )
}

export default Select