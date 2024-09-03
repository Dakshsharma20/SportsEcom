import React from 'react'
import Header from '../Component/Header'
import Footer from '../Component/Footer'

function Login() {
  return (
    <div>
        <Header></Header>
        <div className='w-[100%] h-[100vh]'>
            <div className='w-[100%] h-[40vh] relative  top-16 flex justify-center items-center flex-col'>
                <h1 className='text-[40px] font-bold font-sans'>Log In</h1>
                <label className='login'>Home > Account</label>
            </div>
            <div className='w-[100%] h-[60vh]  flex justify-center'>
                <div className='w-[40%] h-[60vh]  flex flex-col gap-5 py-10  '>
                    <label className='text-[22px] '>Log In</label>
                    <input className='w-[95%] h-[7vh] border-[2px] border-[#DEDEDE]' placeholder='Email' ></input>
                    <input className='w-[95%] h-[7vh] border-[2px] border-[#DEDEDE]' placeholder='Password' ></input>
                    <label>Forgot your password?</label>
                    <button className='bg-orange-500 text-white w-[12%] h-[5vh] '>Sign In</button>
                </div>
                <div className=' h-[60vh] w-[40%] flex flex-col gap-6 px-5 py-10'>
                    <h1 className='text-[23px]'>New Customer </h1>
                    <p>Sign up for early Sale access plus tailored new arrivals, trends and promotions. To opt out, click unsubscribe in our emails.</p>
                    <button className='bg-orange-500 text-white w-[15%] h-[5vh]'>Register</button>
                    
                
                </div>
            </div>

        </div>
        <Footer></Footer>
    </div>
  )
}

export default Login