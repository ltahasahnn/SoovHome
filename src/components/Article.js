import React from 'react'

import { HeartIcon } from '@heroicons/react/24/outline'
import { configureStore, createSlice } from '@reduxjs/toolkit';
import { useDispatch, useSelector } from 'react-redux';

import { count, countState, state } from '../store/reducers/exampleReducer';
import { Link } from 'react-router-dom';

const Article = () => {
  const userManagamentSlice = createSlice({
    name: "userManagament",
  });

  const store = configureStore({
    reducer: userManagamentSlice.reducer,
  });
  const dispatch = useDispatch();
  const { dortmund, han, countt } = useSelector((state) => state.userManagament);
  return (
    <div>
      <article
        id='bestofsales'
        className='container gold max-lg:p-4 text-2xl max-w-[1100px] my-20 m-auto w-full grid gap-5 grid-cols-3 max-md:grid-cols-2'
      >
        <span className='col-span-3 text-center select-none max-lg:text-4xl text-5xl font-bold py-4 text-[#FFB000] modern'>En Çok Satılan</span>
        <div className="h-1 opacity-50 bg-[#FFB000] col-span-3"></div>
        <div className="w-full max-md:col-span-3 wrapper relative max-h-[320px] bg-stone-100 overflow-hidden rounded shadow">
          <img src={han[3].id} className='h-full object-cover max-h-[350px] cursor-pointer scale-105 hover:scale-100 ts w-full' alt="" />
          <Link to="/article" className="articleWrapper p-4 flex h-full flex-col w-full bg-stone-100"
            onClick={() => {
              dispatch(count(3))
              dispatch(countState("han"))
              dispatch(state("han/ber"))
            }}
          >
            <div className="flex gap-10 h-20 items-center overflow-hidden">
              <span className='font-bold'>URUNU INCELE</span>
            </div>
          </Link>
        </div>
        <div className="w-full max-md:col-span-3 wrapper relative max-h-[350px] col-span-2 bg-stone-100 overflow-hidden rounded shadow">
          <img src={dortmund[0].id} className='h-full object-cover max-h-[350px] cursor-pointer scale-105 hover:scale-100 ts w-full' alt="" />
          <Link to="/article" className="articleWrapper p-4 flex h-full flex-col w-full bg-stone-100"
            onClick={() => {
              dispatch(count(0))
              dispatch(countState("dort"))
              dispatch(state("dort/normal"))
            }}
          >
            <div className="flex gap-10 h-20 items-center overflow-hidden">
              <span className='font-bold'>URUNU INCELE</span>
            </div>
          </Link>
        </div>
        <div className="w-full max-md:col-span-3 wrapper relative max-h-[350px] col-span-2 bg-stone-100 overflow-hidden rounded shadow">
          <img src={han[0].id} className='h-full object-cover max-h-[350px] cursor-pointer scale-105 hover:scale-100 ts w-full' alt="" />
          <Link to="/article" className="articleWrapper p-4 flex h-full flex-col w-full bg-stone-100"
            onClick={() => {
              dispatch(count(0))
              dispatch(countState("han"))
              dispatch(state("han/normal"))
            }}
          >
            <div className="flex gap-10 h-20 items-center overflow-hidden">
              <span className='font-bold'>URUNU INCELE</span>
            </div>
          </Link>
        </div>
        <div className="w-full max-md:col-span-3 wrapper relative max-h-[320px] bg-stone-100 overflow-hidden rounded shadow">
          <img src={dortmund[6].id} className='h-full object-cover max-h-[350px] cursor-pointer scale-105 hover:scale-100 ts w-full' alt="" />

          <Link to="/article" className="articleWrapper p-4 flex h-full flex-col w-full bg-stone-100"
            onClick={() => {
              dispatch(count(6))
              dispatch(countState("dort"))
              dispatch(state("dort/ber"))
            }}
          >
            <div className="flex gap-10 h-20 items-center overflow-hidden">
              <span className='font-bold'>URUNU INCELE</span>
            </div>
          </Link>
        </div>
      </article>
    </div>
  )
}

export default Article