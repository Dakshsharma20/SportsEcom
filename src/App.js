import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import AllProducts from './pages/AllProducts'
import Login from './pages/Login'
import ProductDetail from './pages/ProductDetail'


function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
       <Route path='/all-products' element={<AllProducts/>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/productdetails' element={<ProductDetail></ProductDetail>}></Route>

    
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App