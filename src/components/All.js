import React, { useEffect } from 'react'
import Header from '../components/Header'
import HeaderContent from '../components/HeaderContent'
import Article from '../components/Article'
import Article2 from '../components/Article2'
import Footer from '../components/Footer'
import { BrowserRouter, Router, Routes } from 'react-router-dom'
import { configureStore, createSlice } from '@reduxjs/toolkit'
import { useDispatch, useSelector } from 'react-redux'
import { ImagePop, countState } from '../store/reducers/exampleReducer'
import { XMarkIcon } from '@heroicons/react/24/outline'

const All = () => {
  useEffect(() => {
    document.title = "Soov Home | Home"
  }, [])
  const userManagamentSlice = createSlice({
    name: "userManagament",
  });

  const store = configureStore({
    reducer: userManagamentSlice.reducer,
  });
  const dispatch = useDispatch();
  const { dortmund, imagePop, countState, han, gloria, countt, media } = useSelector((state) => state.userManagament);
  return (
    <div className='relative'>
      <div className={`imageView fixed max-w-[100%] bg-[rgba(0,0,0,.4)] z-99 min-w-[100%] max-h-[100vh] min-h-[100vh] flex items-center justify-center ${imagePop ? '' : 'hidden'}`}
        onClick={() => dispatch(ImagePop())}
      >
        <div className="relative min-w-[70%] max-w-[70%] max-md:max-h-[60vh] max-md:min-h-[60vh] max-h-[80vh] min-h-[80vh]">
          {countState === "dort" && <img src={dortmund[countt].id} className='shadow4 object-cover min-w-[100%] max-w-[100%] max-md:min-h-[60vh] max-md:max-h-[60vh] md:max-h-[80vh] md:max-h-[80%] md:min-h-[80vh]' alt="" />}
          {countState === "han" && <img src={han[countt].id} className='shadow4 object-cover min-w-[100%] max-w-[100%] max-md:min-h-[60vh] max-md:max-h-[60vh] md:max-h-[80vh] max-h-[80vh] md:min-h-[80vh]' alt="" />}
          {countState === "gloria" && <img src={gloria[countt].id} className='shadow4 object-cover min-w-[100%] max-w-[100%] max-md:min-h-[60vh] max-md:max-h-[60vh] md:max-h-[80vh] max-h-[80vh] md:min-h-[80vh]' alt="" />}
          <XMarkIcon className='absolute bg-black cursor-pointer text-white ts hover:bg-white hover:text-black right-0 top-0 h-10' />
        </div>
      </div>
      <Header />
      <HeaderContent />
      <Article />
      <Article2 />
      <Footer />
    </div>
  )
}

export default All