import React, { useEffect } from 'react'
import Header from '../components/Header'
import HeaderContent from '../components/HeaderContent'
import Article from '../components/Article'
import Article2 from '../components/Article2'
import Footer from '../components/Footer'
import { BrowserRouter, Router, Routes } from 'react-router-dom'
import { configureStore, createSlice } from '@reduxjs/toolkit'
import { useDispatch, useSelector } from 'react-redux'
import { ImagePop, count, countState, falsee, headers, menuBar, minus, plus, wrapper } from '../store/reducers/exampleReducer'
import { XMarkIcon, ChevronRightIcon, ChevronLeftIcon } from '@heroicons/react/24/outline'

const All = () => {
  const userManagamentSlice = createSlice({
    name: "userManagament",
  });
  const store = configureStore({
    reducer: userManagamentSlice.reducer,
  });
  const { dortmund, imagePop, countState, header, a, han, footer, modelWrapper, woodcount, dortcount, gloriacount, gloria, countt, media } = useSelector((state) => state.userManagament);
  const dispatch = useDispatch();

  useEffect(() => {
    document.title = "Soov Home | Anasayfa"
    dispatch(() => headers(0))
    window.location.href = "#"
  }, [])

  useEffect(() => {
    setTimeout(() => {
      if (footer === 4) {
        window.location.href = "#dortmund"
        dispatch(headers(1))
      }
      if (footer === 5) {
        window.location.href = "#gloria"
        dispatch(headers(1))
      }
      if (footer === 6) {
        window.location.href = "#wood"
        dispatch(headers(1))
      }
    }, 250);
  }, [footer])

  useEffect(() => {
    if (header === 0) {
      dispatch(falsee())
    }
  }, [])

  useEffect(() => {
    setTimeout(() => {
      if (footer === 1) {
        window.location.href = "#en-cok-satilan"
        dispatch(headers(1))
        dispatch(falsee())
      }
      if (footer === 2) {
        window.location.href = "#sayfa"
        dispatch(wrapper())
        dispatch(menuBar())
        dispatch(headers(1))
      }
    }, 200);
  }, [footer])

  return (
    <div className='relative select-none'>
      <div className={`imageView fixed max-w-[100%] bg-[rgba(0,0,0,.4)] z-99 min-w-[100%] max-h-[100vh] min-h-[100vh] flex items-center justify-center ${imagePop ? '' : 'hidden'}`}>
        <div className="relative max-w-[70%] flex max-lg:max-h-[200px] max-sm:max-h-[40vh] max-md:max-h-[60vh] max-h-[80vh]">
          <ChevronLeftIcon
            className='arrow-left max-md:ml-6 arrow ts cursor-pointer max-w-[65px] max-h-[65px] p-1 rounded-full max-sm:h-10 max-sm:right-5 h-12'
            onClick={() => {
              dispatch(minus())
            }}
          />
          {countState === "dort" &&
            <img src={dortmund[dortcount[a]].id}
              className='shadow4 object-contain min-w-[100%] max-w-[100%] max-lg:max-h-[200px] max-md:max-h-[60vh] md:max-h-[80vh] md:max-h-[80%]'
              alt=""
              onClick={() => dispatch(ImagePop())}
            />}
          {countState === "han" &&
            <img src={han[woodcount[a]].id}
              className='shadow4 object-contain min-w-[100%] max-w-[100%] max-sm:max-h-[40vh] max-md:max-h-[60vh] md:max-h-[80vh] max-h-[80vh] md:min-h-[80vh]'
              alt=""
              onClick={() => dispatch(ImagePop())}
            />}
          {countState === "gloria" &&
            <img src={gloria[gloriacount[a]].id}
              className='shadow4 object-contain min-w-[100%] max-w-[100%] max-sm:max-h-[40vh] max-md:max-h-[60vh] md:max-h-[80vh] max-h-[80vh] md:min-h-[80vh]'
              alt=""
              onClick={() => dispatch(ImagePop())}
            />}
          <XMarkIcon
            className='absolute xmark bg-black cursor-pointer text-white ts hover:bg-white hover:text-black right-0 top-0 h-10'
            onClick={() => dispatch(ImagePop())}
          />
          <ChevronRightIcon
            className='arrow-right max-md:mr-6 arrow ts cursor-pointer max-w-[65px] max-h-[65px] p-1 rounded-full max-sm:h-10 h-12'
            onClick={() => {
              dispatch(plus())
            }}
          />
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