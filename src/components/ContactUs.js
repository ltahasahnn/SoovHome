import React, { useEffect, useState } from 'react'
import { count } from '../store/reducers/exampleReducer'
import Header from '../components/Header'
import HeaderContent from '../components/HeaderContent'
import Footer from '../components/Footer'
import { configureStore, createSlice } from '@reduxjs/toolkit'
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'

const whatsappNumber = '905376919796';
const Article3 = () => {
  const userManagamentSlice = createSlice({
    name: "userManagament",
  });

  const store = configureStore({
    reducer: userManagamentSlice.reducer,
  });

  useEffect(() => {
    document.title = "Soov Home | İletişim"
  }, [])

  const { images, imagess, count } = useSelector((state) => state.userManagament);
  const dispatch = useDispatch();
  return (
    <div>
      <Header />
      <div className="w-full min-h-[85vh] h-full bg-[#f2f2f2] p-10">
        <div className="m-auto p-16 h-full container grad grid h-full min-h-[75vh] h-fit flex p-4">
          <div className="h-full grid items-center grid-cols-3 p-4 gap-5 overflow-hidden px-10 text-stone-600">
            <Link to="https://www.instagram.com/soovhome/" className="card max-lg:col-span-3 max-lg:m-auto max-sm:col-span-3 instagram shadow-md w-full h-full min-h-[300px] lg:m-auto max-w-[270px] max-sm:m-auto max-lg:max-h-[250px] max-lg:min-h-[250px] max-lg:max-w-[500px] max-lg:min-w-[400px] max-md:max-w-[100%] max-md:min-w-[100%] max-h-[300px] rounded-xl bg-white border-[#000]">
              <div className="w-full flex justify-center p-8">
                <img src="assets/images/instagram-white.png" className='h-14 rounded-lg' alt="" />
              </div>
              <div className="max-w-[90%] flex flex-col text-center border-[#fff] border-opacity-50 p-8 border-t-2 mx-auto">
                <span className='font-bold text-white max-lg:text-3xl max-md:text-xl text-lg w-full'>Soov Home</span>
              </div>
            </Link>
            <Link to={`https://wa.me/${whatsappNumber}`} className="card max-lg:col-span-3 max-lg:m-auto max-sm:col-span-3 whatsapp shadow-md w-full h-full min-h-[300px] lg:m-auto max-w-[270px] max-sm:m-auto max-lg:max-h-[250px] max-lg:min-h-[250px] max-lg:max-w-[500px] max-lg:min-w-[400px] max-h-[300px] max-md:max-w-[100%] max-md:min-w-[100%] rounded-xl bg-white border-[#000]">
              <div className="w-full flex justify-center p-8">
                <img src="assets/images/whatsapp-logo.png" className='h-14' alt="" />
              </div>
              <div className="max-w-[90%] flex flex-col text-center border-[#fff] border-opacity-75 p-8 border-t-2 mx-auto">
                <span className='font-bold text-white max-lg:text-2xl max-md:text-xl text-lg w-full'>+90 | 537 691 97 96</span>
              </div>
            </Link>
            <Link to="https://www.facebook.com/soovhome/" className="card max-lg:col-span-3 max-lg:m-auto max-sm:col-span-3 facebook shadow-md w-full h-full min-h-[300px] lg:mr-auto max-w-[270px] max-sm:m-auto max-lg:max-h-[250px] max-lg:min-h-[250px] max-lg:max-w-[500px] max-lg:min-w-[400px] max-h-[300px] max-md:max-w-[100%] max-md:min-w-[100%] rounded-xl bg-white border-[#000]">
              <div className="w-full flex justify-center p-8">
                <img src="assets/images/facebook-white.png" className='h-14' alt="" />
              </div>
              <div className="max-w-[90%] flex flex-col text-center border-[#fff] border-opacity-50 p-8 border-t-2 mx-auto">
                <span className='font-bold text-white max-lg:text-4xl max-md:text-xl text-lg w-full'>Soov Home</span>
              </div>
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Article3