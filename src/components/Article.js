import React from 'react'

import { HeartIcon } from '@heroicons/react/24/outline'
import { configureStore, createSlice } from '@reduxjs/toolkit';
import { useDispatch, useSelector } from 'react-redux';

import { count, countState, state } from '../store/reducers/exampleReducer';
import { Link } from 'react-router-dom';
import { ImagePop } from '../store/reducers/exampleReducer'

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
        className='container gold max-lg:p-4 text-2xl max-w-[1100px] my-4 m-auto w-full grid gap-5 grid-cols-3 max-md:grid-cols-2'
      >
        <span className='col-span-3 text-center select-none max-lg:text-4xl text-5xl font-bold py-4 text-[#353535] text-opacity-75 modern'>En Çok Satılan</span>
        <div className="h-1 opacity-75 bg-[#353535] col-span-3"></div>
        <div className="w-full max-md:col-span-3 wrapper flex flex-col relative max-h-[320px] bg-stone-100 overflow-hidden rounded shadow">
          <img src={han[16].id} className='h-full object-cover max-h-[350px] cursor-pointer scale-105 hover:scale-100 ts w-full' alt=""
            onClick={() => {
              dispatch(ImagePop())
              dispatch(count(16))
              dispatch(countState("han"))
            }}
          />
          <h2 className='p-4 font-bold text-stone-600 text-lg bg-stone-200'>Wood - Berjer</h2>
          <Link to="/article" className="articleWrapper p-4 flex h-full flex-col w-full bg-stone-100"
            onClick={() => {
              dispatch(count(16))
              dispatch(countState("han"))
              dispatch(state("han/ber"))
            }}
          >
            <div className="flex gap-10 h-20 items-center overflow-hidden">
              <span className='font-bold'>URUNU INCELE</span>
            </div>
          </Link>
        </div>
        <div className="w-full max-md:col-span-3 wrapper flex flex-col relative max-h-[370px] col-span-2 bg-stone-100 overflow-hidden rounded shadow">
          <img src={dortmund[0].id} className='h-full object-cover max-h-[300px] cursor-pointer scale-105 hover:scale-100 ts w-full' alt=""
            onClick={() => {
              dispatch(ImagePop())
              dispatch(count(0))
              dispatch(countState("dort"))
            }}

          />
          <h2 className='p-4 font-bold text-stone-600 text-lg bg-stone-200'>Dortmund - Koltuk Takımı</h2>
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
        <div className="w-full max-md:col-span-3 wrapper flex flex-col relative max-h-[370px] col-span-2 bg-stone-100 overflow-hidden rounded shadow">
          <img src={han[0].id} className='h-full object-cover max-h-[300px] cursor-pointer scale-105 hover:scale-100 ts w-full' alt=""
            onClick={() => {
              dispatch(ImagePop())
              dispatch(count(0))
              dispatch(countState("han"))
            }}
          />
          <h2 className='p-4 font-bold text-stone-600 text-lg bg-stone-200'>Wood - Koltuk Takımı</h2>
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
        <div className="w-full max-md:col-span-3 wrapper flex flex-col relative max-h-[320px] bg-stone-100 overflow-hidden rounded shadow">
          <img src={dortmund[6].id} className='h-full object-cover max-h-[350px] cursor-pointer scale-105 hover:scale-100 ts w-full' alt=""
            onClick={() => {
              dispatch(ImagePop())
              dispatch(count(6))
              dispatch(countState("dort"))
            }}
          />
          <h2 className='p-4 font-bold text-stone-600 text-lg bg-stone-200'>Dortmund - Berjer</h2>
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