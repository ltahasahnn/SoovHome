import React from 'react'
import { Link } from 'react-router-dom'
import { EnvelopeIcon, PhoneIcon } from '@heroicons/react/24/solid';
import { useDispatch, useSelector } from 'react-redux';
import { headers, ca, falsee } from '../store/reducers/exampleReducer';
import { configureStore, createSlice } from '@reduxjs/toolkit';

const whatsappNumber = '905376919796';
const Footer = () => {
  const userManagamentSlice = createSlice({
    name: "userManagament",
  });
  const store = configureStore({
    reducer: userManagamentSlice.reducer,
  });
  const { footer } = useSelector((state) => state.userManagament);
  const dispatch = useDispatch();
  return (
    <div id="footer" className='bg-[#333333] mt-20 py-10 leading-8 w-full flex flex-col h-full min-h-[250px] max-lg:px-16 p-4'>
      <div className="container m-auto text-white grid grid-cols-5 max-lg:grid-cols-2 gap-8">
        <Link to="/"
          onClick={() => {
            dispatch(headers(0))
            dispatch(falsee())
          }}
          className="food-logo max-lg:col-span-2 max-lg:m-auto max-md:col-span-2 max-lg:max-w-[250px]">
          <img src="assets/images/soovlogo.png" className='w-full' alt="" />
        </Link>
        <ul className='w-fit max-md:col-span-2'>
          <li className='gold font-bold text-xl mb-2'>URUNLERIMIZ</li>
          <Link to='/'
            onClick={() => { dispatch(ca(1)) }}
            className='h-fit'>
            <li className='font-medium w-fit relative hover:left-2 hover:list-disc hover:text-[#FFB000] left-0 ts text-md'>
              En Çok Satanlar
            </li>
          </Link>
          <Link
            to='/'
            onClick={() => { dispatch(ca(2)) }}
            className='w-fit'
          >
            <li className='font-medium w-fit relative hover:left-2 hover:list-disc hover:text-[#FFB000] left-0 ts text-md'>
              Modeller
            </li>
          </Link>
        </ul>
        <ul className='w-fit max-lg:w-full max-md:items-start max-md:col-span-2 max-lg:flex max-lg:flex-col max-lg:items-end'>
          <li className='gold font-bold text-xl mb-2'>HAKKIMIZDA</li>
          <Link to='/hakkimizda' className='w-fit'
            onClick={() => { dispatch(ca(0)) }}
          ><li className='font-medium cursor-pointer w-fit relative hover:left-2 hover:list-disc hover:text-[#FFB000] left-0 ts text-md'>Hakkında</li></Link>
          <Link to='/hakkimizda'
            onClick={() => { dispatch(ca(1)) }}
            className='w-fit'><li className='font-medium cursor-pointer w-fit relative hover:left-2 hover:list-disc hover:text-[#FFB000] left-0 ts text-md'>Vizyon</li></Link>
          <Link to='/hakkimizda'
            onClick={() => { dispatch(ca(2)) }}
            className='w-fit'><li className='font-medium cursor-pointer w-fit relative hover:left-2 hover:list-disc hover:text-[#FFB000] left-0 ts text-md'>Ürünlerimiz</li></Link>
          <Link to='/hakkimizda'
            onClick={() => { dispatch(ca(3)) }}
            className='w-fit'><li className='font-medium cursor-pointer w-fit relative hover:left-2 hover:list-disc hover:text-[#FFB000] left-0 ts text-md'>Müşteri Hizmetleri</li></Link>
        </ul>
        <div className="flex lg:flex-col max-lg:col-span-2 max-lg:grid-cols-2 max-lg:grid">
          <div className="flex max-md:col-span-2 font-medium max-lg:w-full text-sm tracking-wide flex-col">
            <span className='gold font-bold text-xl mb-2'>ILETISIM</span>
            <Link to={`https://wa.me/${whatsappNumber}`} className='flex w-fit hover:list-disc hover:text-[#FFB000] hover:left-2 ts left-0 relative mb-2 items-center'>
              <PhoneIcon className='h-6 mr-2' />
              <span>+90 537 691 97 96</span>
            </Link>
            <Link to="mailto:soovhome.com" className='flex w-fit hover:list-disc hover:text-[#FFB000] hover:left-2 ts left-0 mb-2 relative items-center'>
              <EnvelopeIcon className='h-6 mr-2' />
              <span>info@soovhome.com</span>
            </Link>
          </div>
          <div className="social max-md:col-span-3 max-md:p-4 max-md:bg-white max-sm:flex-col max-sm max-lg:min-w-[100%] max-lg:max-w-[100%] mt-4 flex gap-5 flex sm:items-center max-lg:justify-around max-sm:text-black max-sm:font-bold rounded-md lg:justify-between max-md:border-0 max-lg:border-r-2 max-lg:border-b-2 max-lg:border-[#FFB000] border-opacity-25">
            <Link to="https://www.instagram.com/soovhome/" className="flex max-sm:hover:bg-stone-100 max-sm:p-2 items-center">
              <img src="assets/images/instagram-white.png" className='h-7 max-lg:h-9 max-sm:w-9 instaShadow hover:scale-110 ts cursor-pointer' alt="" />
              <span className='ml-4 sm:hidden text-sm'> | Soov Home</span>
            </Link>
            <Link to="https://www.facebook.com/soovhome/" className="flex max-sm:hover:bg-stone-100 max-sm:p-2 items-center">
              <img src="assets/images/facebook-white.png" className='h-8 max-lg:h-9 max-sm:w-9 facebookShadow hover:scale-110 ts cursor-pointer' alt="" />
              <span className='ml-4 sm:hidden text-sm'> | Soov Home</span>

            </Link>
            <Link to={`https://wa.me/${whatsappNumber}`} className="flex max-sm:hover:bg-stone-100 max-sm:p-2 items-center">
              <img src="assets/images/whatsapp-logo.png" className='h-8 max-lg:h-9 max-sm:w-9 whatsappShadow hover:scale-110 ts cursor-pointer' alt="" />
              <span className='ml-4 sm:hidden text-sm'> | +90 537 691 97 96</span>
            </Link>
          </div>
        </div>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3052.8393286511146!2d29.517273199999998!3d40.078995899999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cbc9f907c9b94b%3A0x1f322b18124aae28!2sSOOV%20Home!5e0!3m2!1str!2str!4v1696367506889!5m2!1str!2str"
          className='w-full max-lg:col-span-2 max-h-[150px]'
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>

      </div>
      <div className="container border-t border-[#f2f2f2] border-opacity-40 mt-4 text-opacity-40 py-4 m-auto w-full text-stone-200">
        <span className='w-full p-2 max-sm:text-xs'>
          © 2023 / Soov Home | Tüm Hakları Saklıdır
        </span>
      </div>
    </div>
  )
}

export default Footer