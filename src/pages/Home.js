import React from 'react'
import Header from '../Component/Header'
import Intro from '../Component/Intro'
import Select from '../Component/Select'
import Featured from '../Component/Featured'
import Shopactivity from '../Component/Shopactivity'
import Footer from '../Component/Footer'





function Home() {
  return (
    <div>
      <Header></Header>
      <Intro></Intro>   
         <Select></Select>
         <Featured></Featured>
         <Shopactivity></Shopactivity>
         <Footer></Footer>
    </div>
    
  )
}

export default Home