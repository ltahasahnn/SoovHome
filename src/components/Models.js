import React, { useEffect } from 'react'
import Header from '../components/Header'
import HeaderContent from '../components/HeaderContent'
import Article from '../components/Article'
import Article2 from '../components/Article2'
import Footer from '../components/Footer'
import { BrowserRouter, Router, Routes } from 'react-router-dom'
const Models = () => {

  return (
    <div className='bg-stone-100'>
      <Header />
      <HeaderContent />
      <Article />
      <Article2 />
      <Footer />
    </div>
  )
}

export default Models