import React, { useEffect } from 'react'
import Header from '../components/Header'
import HeaderContent from '../components/HeaderContent'
import Article from '../components/Article'
import Article2 from '../components/Article2'
import Footer from '../components/Footer'
import { BrowserRouter, Router, Routes } from 'react-router-dom'

const All = () => {
  useEffect(() => {
    document.title = "Soov Home | Home"
  }, [])
  return (
    <div>
      <Header />
      <HeaderContent />
      <Article />
      <Article2 />
      <Footer />
    </div>
  )
}

export default All