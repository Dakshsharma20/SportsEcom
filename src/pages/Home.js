import React from 'react'
import Header from './Component/Header'
import Intro from './Component/Intro'
import Select from './Component/Select'
import Featured from './Component/Featured'



function Home() {
  return (
    <div>
      <Header></Header>
      <Intro></Intro>   
         <Select></Select>
         <Featured></Featured>
    </div>
    
  )
}

export default Home