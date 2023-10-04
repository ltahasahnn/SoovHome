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
          <div className="h-full grid items-center grid-cols-2 gap-5 overflow-hidden md:px-10 text-stone-600">
            <div className="flex max-lg:col-span-2 flex-col h-full justify-center p-4">
              <Link to="https://www.instagram.com/soovhome" className='flex items-center max-md:px-2 max-md:py-1 border-b-2 border-t-2 py-4 border-[#fff]'>
                <img src="assets/images/instagram-white.png" className='h-8 mr-4' alt="" />
                <span className='text-stone-600 font-bold text-xl max-md:text-sm max-sm:text-xs hover:text-stone-900 relative my-4 hover:left-2 left-0 ts w-full ts'>| Soov Home</span>
              </Link>
              <Link to="https://www.facebook.com/soovhome" className='flex items-center max-md:px-2 max-md:py-1 border-b-2 py-4 border-[#fff]'>
                <img src="assets/images/facebook-white.png" className='h-8 mr-4' alt="" />
                <span className='text-stone-600 font-bold text-xl max-md:text-sm max-sm:text-xs hover:text-stone-900 relative my-4 hover:left-2 left-0 ts w-full ts'>| Soov Home</span>
              </Link>
              <Link to="https://www.whatsapp.com/soovhome" className='flex items-center max-md:px-2 max-md:py-1 border-b-2 py-4 border-[#fff]'>
                <img src="assets/images/whatsapp-logo.png" className='h-8 mr-4' alt="" />
                <span className='text-stone-600 font-bold text-xl max-md:text-sm max-sm:text-xs hover:text-stone-900 relative my-4 hover:left-2 left-0 ts w-full ts'>| +90 537 691 97 96</span>
              </Link>
              <Link to="mailto:soovhome.com" className='flex items-center border-b-2 max-md:px-2 max-md:py-1 py-4 border-[#fff]'>
                <img src="assets/images/mail_logo.png" className='h-8 mr-4' alt="" />
                <span className='text-stone-600 font-bold text-xl max-md:text-sm max-sm:text-xs hover:text-stone-900 relative my-4 hover:left-2 left-0 ts w-full ts'>| info@soovhome.com</span>
              </Link>
            </div>
            <div className="flex max-lg:col-span-2 border-white border-t-4 border-b-4 rounded-xl max-lg:py-4 px-1 h-full">
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3052.8393286511146!2d29.517273199999998!3d40.078995899999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cbc9f907c9b94b%3A0x1f322b18124aae28!2sSOOV%20Home!5e0!3m2!1str!2str!4v1696367506889!5m2!1str!2str"
                className='w-full h-full max-md:min-h-[300px] max-sm:min-h-[200px] max-lg:min-h-[400px]'
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Article3