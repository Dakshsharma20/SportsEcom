import React from 'react'

function Shopactivity() {
    return (
        <div className='h-[65vh] w-[100%] flex justify-center flex-col'>
            <h1 className='text-[40px] font-bold w-[100%] flex justify-center'>Shop By Activity</h1>
            <div className='h-[50vh] w-[100%]  flex mt-4'>
                <div className='relative'>
                    <img className='h-[35vh]' src='https://www.technosport.in/cdn/shop/files/Activity_dance.png?v=1722922189&width=360'></img>
                    <label className='bg-white absolute bottom-[120px] right-[50px] h-[6vh] text-[25px] w-[50%] flex justify-center items-center'>Dance</label>
                </div>
                <div className='relative'>
                    <img className='h-[35vh]' src='https://www.technosport.in/cdn/shop/files/Activity_Badminton.png?v=1722922189&width=360'></img>
                    <label className='bg-white absolute bottom-[120px] right-[50px] h-[6vh] text-[25px] w-[60%] flex justify-center items-center'>Badminton</label>
                </div>
                <div className='relative'>
                    <img className='h-[35vh]' src='https://www.technosport.in/cdn/shop/files/Activity_Tennis.png?v=1722922188&width=360'></img>
                    <label className='bg-white absolute bottom-[120px] right-[50px] h-[6vh] text-[25px] w-[50%] flex justify-center items-center'>Tennis</label>
                </div>
                <div className='relative'>
                    <img className='h-[35vh]' src='https://www.technosport.in/cdn/shop/files/Activity_Outdoor.png?v=1722922189&width=360'></img>
                    <label className='bg-white absolute bottom-[120px] right-[50px] h-[6vh] text-[25px] w-[50%] flex justify-center items-center'>Outdoor</label>
                </div>
                <div className='relative'>
                    <img className='h-[35vh]' src='https://www.technosport.in/cdn/shop/files/Activity_Casual.png?v=1722922189&width=360'></img>
                    <label className='bg-white absolute bottom-[120px] right-[50px] h-[6vh] text-[25px] w-[50%] flex justify-center items-center'>Causal</label>
                </div>
                <div className='relative'>
                    <img className='h-[35vh]' src='https://www.technosport.in/cdn/shop/files/Activity_Running.png?v=1722922188&width=360'></img>
                    <label className='bg-white absolute bottom-[120px] right-[50px] h-[6vh] text-[25px] w-[50%] flex justify-center items-center'>Running</label>
                </div>
                

            </div>

        </div>
    )
}

export default Shopactivity