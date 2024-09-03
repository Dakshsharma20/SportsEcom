import React from 'react'

function Footer() {
  return (
    <div className='w-[100%] h-[110vh] bg-gray-300  '>
        <div className='w-[100%] h-[80vh]  flex items-center'>
        <div className='w-[33%] h-[60vh] flex flex-col gap-6 '>
            <h1 className='text-[25px] px-10'>Quick links</h1>
            <div className='flex flex-col px-10 text-[18px] flex gap-2'>
                <label>Men</label>
                <label>Women</label>
                <label>Boys</label>
                <label>Fresh Picks</label>
                <label>Trndsetters</label>
            </div>

        </div>
        <div className='w-[33%] h-[60vh]  flex flex-col gap-5 '>
            <h1 className='text-[25px] px-10'>About</h1>
            <div className='flex flex-col px-10 text-[18px] flex gap-2'>
                <label>Contoct Us</label>
                <label>Our Story</label>
                <label>Blogs</label>
                <label>Media Coverage</label>
                <label>FAQ</label>
                <label>B2B Enquiry</label>
                <label>Retailor Form</label>
                <label>Store Near Me</label>
                <label>Personalization</label>
            </div>

        </div>
        <div className='w-[33%] h-[60vh] flex flex-col gap-5 '>
            <h1 className='text-[25px] px-10'>Information</h1>
            <div className='flex flex-col px-10 text-[18px] flex gap-2'>
                <label>Men</label>
                <label>Women</label>
                <label>Boys</label>
                <label>Fresh Picks</label>
                <label>Trndsetters</label>
            </div>

        </div>
        </div>

        <div className='w-[100%]   flex '>
            <div className='w-[50%]  flex flex-col px-10  gap-2 py-2 '>
                
                <label className='text-[25px] '>Let's get in touch</label>
                <label className=''>Sign up for our newsletter and receive 10% off your</label>
                <input className=' px-10  h-[5vh] w-[100%]  ' placeholder='Enter Your Email '></input>
                <i class="fa fa-envelope relative top-[-30px] left-2" aria-hidden="true"></i>


            </div>
            <div className='w-[50%] h-[10vh] flex gap-3 justify-end'>
                <label className=' bg-gray-400 text-[40px] w-16 h-16 flex items-center justify-center rounded-full'><i class="fa fa-facebook" aria-hidden="true"></i>   </label>
                <label className=' bg-gray-400 text-[40px] w-16 h-16 flex items-center justify-center rounded-full'><i class="fa fa-instagram" aria-hidden="true"></i> </label>

            </div>

        </div>
    </div>
  )
}

export default Footer