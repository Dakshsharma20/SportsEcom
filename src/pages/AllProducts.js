import React, { useState } from 'react'
import Header from '../Component/Header'
import Footer from '../Component/Footer'
import { useNavigate } from 'react-router-dom'
import ProductDetail from '../api/productdetails.json'


function AllProducts() {
    const [showFilter, setShowFilter] = useState(0)
    const navigate = useNavigate()
    return (
        <div className='flex  flex-col'>
            <Header></Header>
            <div className='w-[92%] h-[50vh] flex self-center mt-14 bg-cover bg-[url(https://www.technosport.in/cdn/shop/files/Artboard_1_copy_2.jpg?v=1715592183&width=1100)]' >
                <label className='text-[35px] font-bold text-white flex justify-start items-end py-5 px-5'>Men's Clothing</label>
                <hr className=' h-[1vh] w-[20%] relative top-72 right-72 mt-3 ml-5 bg-orange-400'></hr>

            </div>
            <div className='w-[92%] h-[40vh]  flex self-center justify-center items-center justify-between'>
                <div className='flex justify-center flex-col items-center'>
                    <img className='w-[160px] h-[160px] rounded-full ' src='https://www.technosport.in/cdn/shop/files/OR46_Beetle_1.webp?v=1715705622&width=165'></img>
                    <label className='text-[20px] mt-3 '>Shorts</label>
                </div>
                <div className='flex justify-center flex-col items-center'>
                    <img className='w-[160px] h-[160px] rounded-full ' src='https://www.technosport.in/cdn/shop/files/P757LightGrey_1_fbba5757-8a4b-453c-9fc4-7765003a73ef.jpg?v=1713779112&width=360'></img>
                    <label className='text-[20px] mt-3 '>Vests</label>
                </div>
                <div className='flex justify-center flex-col items-center'>
                    <img className='w-[160px] h-[160px] rounded-full ' src='https://www.technosport.in/cdn/shop/products/PM87RUFU_20Black_6_ff7b6d24-fb36-4ad3-84e7-152ef94fed57.webp?v=1710859550&width=360'></img>
                    <label className='text-[20px] mt-3 '>Sweatshirts</label>
                </div>
                <div className='flex justify-center flex-col items-center'>
                    <img className='w-[160px] h-[160px] rounded-full ' src='https://www.technosport.in/cdn/shop/files/plus.webp?v=1718278887&width=360'></img>
                    <label className='text-[20px] mt-3 '>Plus Size</label>
                </div>
                <div className='flex justify-center flex-col items-center'>
                    <img className='w-[160px] h-[160px] rounded-full ' src='https://www.technosport.in/cdn/shop/files/OR73-Multicolor_3.webp?v=1711542063&width=165'></img>
                    <label className='text-[20px] mt-3 '>Innerwear</label>
                </div>
                <div className='flex justify-center flex-col items-center'>
                    <img className='w-[160px] h-[160px] rounded-full ' src='https://www.technosport.in/cdn/shop/products/P676_20Black_1_f5151cce-55f8-408e-99e8-074cedb6dad9.webp?v=1710731117&width=165'></img>
                    <label className='text-[20px] mt-3 '>Joggers</label>
                </div>
                <div className='flex justify-center flex-col items-center'>
                    <img className='w-[160px] h-[160px] rounded-full ' src='https://www.technosport.in/cdn/shop/files/P675CityGrey_1.jpg?v=1719910462&width=165'></img>
                    <label className='text-[20px] mt-3 '>Cargos</label>
                </div>

            </div>
            <div className='w-[100%] h-[200vh] flex'>
                <div className='w-[25%] h-[200vh] flex flex-col items-center'>
                    <h1 className='text-[30px] w-[80%]'>Filters</h1>
                    <div style={{height: showFilter == 1 ? "auto" : "10vh"}} className='w-[80%] duration-300 overflow-hidden flex flex-col justify-between'>
                        <div onClick={()=> showFilter == 1 ? setShowFilter(0) : setShowFilter(1)} className='flex py-6 justify-between w-[100%]'>
                            <label>Gender</label>
                            <label className='rotate-[-90deg]'>{"<"}</label>
                        </div>
                        <div>
                            <input type='checkbox'></input>
                            <label>Mens</label>
                        </div>
                    </div>

                    <div style={{height: showFilter == 2 ? "auto" : "10vh"}} className='w-[80%] duration-300 overflow-hidden flex flex-col justify-between'>
                        <div onClick={()=> setShowFilter(2)} className='flex py-6 justify-between w-[100%]'>
                            <label>Type</label>
                            <label className='rotate-[-90deg]'>{"<"}</label>
                        </div>
                        <div>
                            <input type='checkbox'></input>
                            <label>Shorts</label>
                        </div>
                        <div>
                            <input type='checkbox'></input>
                            <label>Shorts</label>
                        </div>
                        <div>
                            <input type='checkbox'></input>
                            <label>Shorts</label>
                        </div>
                    </div>

                </div>
                <div className='w-[75%] h-[200vh]  '>
                    <select className='ml-3'>
                        <option>Best selling</option>
                        <option>Featured</option>
                        <option>Price,low to high</option>
                        <option>Price,high to low</option>
                        <option>Date,New to Old</option>
                    </select>

                    <div className='flex justify-cente flex-wrap h-[200vh] '>

                        {ProductDetail.map((i) =>
                            <div className='w-[23%] h-[30vh] ml-3 mt-4 flex flex-col items-center'>
                                <img onClick={() => navigate('/ProductDetails')} src={i.img}></img>
                                <label>{i.title}</label>
                                <label className='text-[20px]'>{i.price}</label>

                            </div>)}

                    </div>
                </div>

            </div>
            <Footer></Footer>
        </div>
    )
}

export default AllProducts