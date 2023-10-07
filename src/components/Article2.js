import React, { useEffect } from 'react'
import { HeartIcon } from '@heroicons/react/24/outline'
import { configureStore, createSlice } from '@reduxjs/toolkit';
import { useDispatch, useSelector } from 'react-redux';
import { motion } from 'framer-motion';
import { ImagePop, count, countState, b, headers, state } from '../store/reducers/exampleReducer';
import { Link } from 'react-router-dom';

const Article2 = () => {
  const userManagamentSlice = createSlice({
    name: "userManagament",
  });

  const store = configureStore({
    reducer: userManagamentSlice.reducer,
  });
  const dispatch = useDispatch();
  const { dortmund, han, countt, gloria } = useSelector((state) => state.userManagament);
  return (
    <div className="">
      <article
        id='dortmund'
        className='container max-lg:px-10 max-xl:px-6 gold max-md:flex max-md:flex-col relative text-2xl max-w-[1100px] m-auto w-full'
      >
        <h2 className='text-start max-lg:text-4xl max-lg:text-center text-4xl font-bold my-4 text-[#353535] max-md:text-2xl text-opacity-75 pt-4'>Dortmund - Koltuk Takımı</h2>
        <div className="h-1 opacity-75 bg-[#353535]"></div>
        <div className="w-full h-full my-4 relative grid gap-5 grid-wrap grid-cols-3 max-md:grid-cols-1">
          <div className="flex flex-col gap-5">
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.8,
                delay: 0.5,
                ease: [0, 0.71, 0.2, 1.01]
              }}
              onClick={() => {
                dispatch(count(1))
                dispatch(countState("dort"))
                dispatch(state("dort/normal"))
                dispatch(b(0))
              }}
              className="w-full model relative max-h-[500px] min-h-[500px] max-lg:max-h-[250px] max-lg:min-h-[250px] overflow-hidden cursor-pointer"
            >
              <img
                src={dortmund[1].id}
                alt=""
                onClick={() => {
                  dispatch(ImagePop())
                  dispatch(count(1))
                  dispatch(countState("dort"))
                  dispatch(b(1))
                }}
                className='w-full h-full scale-105 hover:scale-100 object-cover'
              />
              <Link to="/urun-detay" className="absolute max-md:hidden info">
                <span>URUNU INCELE</span>
              </Link>
              <Link to="/urun-detay" className="absolute md:hidden infoMobil">
                <span>URUNU INCELE</span>
              </Link>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.8,
                delay: 0.5,
                ease: [0, 0.71, 0.2, 1.01]
              }}
              onClick={() => {
                dispatch(count(9))
                dispatch(countState("dort"))
                dispatch(state("dort/normal"))
                dispatch(b(3))
              }}
              className="w-full model relative max-h-[250px] min-h-[250px] overflow-hidden cursor-pointer"
            >
              <img
                src={dortmund[9].id}
                alt=""
                onClick={() => {
                  dispatch(ImagePop())
                  dispatch(count(9))
                  dispatch(countState("dort"))
                }}
                className='w-full h-full scale-105 hover:scale-100 object-cover'
              />
              <Link to="/urun-detay" className="absolute max-md:hidden info">
                <span>URUNU INCELE</span>
              </Link>
              <Link to="/urun-detay" className="absolute md:hidden infoMobil">
                <span>URUNU INCELE</span>
              </Link>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.8,
                delay: 0.5,
                ease: [0, 0.71, 0.2, 1.01]
              }}
              onClick={() => {
                dispatch(count(10))
                dispatch(countState("dort"))
                dispatch(state("dort/normal"))
                dispatch(b(6))
              }}
              className="w-full model relative max-h-[250px] min-h-[250px] overflow-hidden cursor-pointer"
            >
              <img
                src={dortmund[10].id}
                alt=""
                onClick={() => {
                  dispatch(ImagePop())
                  dispatch(count(10))
                  dispatch(countState("dort"))
                }}
                className='w-full h-full scale-105 hover:scale-100 object-cover'
              />
              <Link to="/urun-detay" className="absolute max-md:hidden info">
                <span>URUNU INCELE</span>
              </Link>
              <Link to="/urun-detay" className="absolute md:hidden infoMobil">
                <span>URUNU INCELE</span>
              </Link>
            </motion.div>
          </div>
          <div className="flex flex-col gap-5">
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.8,
                delay: 0.5,
                ease: [0, 0.71, 0.2, 1.01]
              }}
              onClick={() => {
                dispatch(count(13))
                dispatch(countState("dort"))
                dispatch(state("dort/normal"))
                dispatch(b(1))
              }}
              className="w-full model relative max-h-[250px] min-h-[250px] overflow-hidden cursor-pointer"
            >
              <img
                src={dortmund[13].id}
                alt=""
                onClick={() => {
                  dispatch(ImagePop())
                  dispatch(count(13))
                  dispatch(countState("dort"))
                }}
                className='w-full h-full scale-105 hover:scale-100 object-cover'
              />
              <Link to="/urun-detay" className="absolute max-md:hidden info">
                <span>URUNU INCELE</span>
              </Link>
              <Link to="/urun-detay" className="absolute md:hidden infoMobil">
                <span>URUNU INCELE</span>
              </Link>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.8,
                delay: 0.5,
                ease: [0, 0.71, 0.2, 1.01]
              }}
              onClick={() => {
                dispatch(count(6))
                dispatch(countState("dort"))
                dispatch(state("dort/ber"))
                dispatch(b(4))
              }}
              className="w-full model relative max-h-[250px] min-h-[250px] overflow-hidden cursor-pointer"
            >
              <img
                src={dortmund[6].id}
                alt=""
                onClick={() => {
                  dispatch(ImagePop())
                  dispatch(count(6))
                  dispatch(countState("dort"))
                }}
                className='w-full h-full scale-105 hover:scale-100 object-cover'
              />
              <Link to="/urun-detay" className="absolute max-md:hidden info">
                <span>URUNU INCELE</span>
              </Link>
              <Link to="/urun-detay" className="absolute md:hidden infoMobil">
                <span>URUNU INCELE</span>
              </Link>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.8,
                delay: 0.5,
                ease: [0, 0.71, 0.2, 1.01]
              }}
              onClick={() => {
                dispatch(count(8))
                dispatch(countState("dort"))
                dispatch(state("dort/normal"))
                dispatch(b(7))
              }}
              className="w-full model relative max-h-[500px] min-h-[500px] max-lg:max-h-[250px] max-lg:min-h-[250px] overflow-hidden cursor-pointer"
            >
              <img
                src={dortmund[8].id}
                alt=""
                onClick={() => {
                  dispatch(ImagePop())
                  dispatch(count(8))
                  dispatch(countState("dort"))
                }}
                className='w-full h-full scale-105 hover:scale-100 object-cover'
              />
              <Link to="/urun-detay" className="absolute max-md:hidden info">
                <span>URUNU INCELE</span>
              </Link>
              <Link to="/urun-detay" className="absolute md:hidden infoMobil">
                <span>URUNU INCELE</span>
              </Link>
            </motion.div>
          </div>
          <div className="flex flex-col gap-5">
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.8,
                delay: 0.5,
                ease: [0, 0.71, 0.2, 1.01]
              }}
              onClick={() => {
                dispatch(count(21))
                dispatch(countState("dort"))
                dispatch(state("dort/normal"))
                dispatch(b(2))
              }}
              className="w-full model relative max-h-[500px] min-h-[500px] max-lg:max-h-[250px] max-lg:min-h-[250px] overflow-hidden cursor-pointer"
            >
              <img
                src={dortmund[21].id}
                alt=""
                onClick={() => {
                  dispatch(ImagePop())
                  dispatch(count(21))
                  dispatch(countState("dort"))
                }}
                className='w-full h-full scale-105 hover:scale-100 object-cover'
              />
              <Link to="/urun-detay" className="absolute max-md:hidden info">
                <span>URUNU INCELE</span>
              </Link>
              <Link to="/urun-detay" className="absolute md:hidden infoMobil">
                <span>URUNU INCELE</span>
              </Link>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.8,
                delay: 0.5,
                ease: [0, 0.71, 0.2, 1.01]
              }}
              onClick={() => {
                dispatch(count(12))
                dispatch(countState("dort"))
                dispatch(state("dort/normal"))
                dispatch(b(5))
              }}
              className="w-full model relative max-h-[250px] min-h-[250px] overflow-hidden cursor-pointer"
            >
              <img
                src={dortmund[12].id}
                alt=""
                onClick={() => {
                  dispatch(ImagePop())
                  dispatch(count(12))
                  dispatch(countState("dort"))
                }}
                className='w-full h-full scale-105 hover:scale-100 object-cover'
              />
              <Link to="/urun-detay" className="absolute max-md:hidden info">
                <span>URUNU INCELE</span>
              </Link>
              <Link to="/urun-detay" className="absolute md:hidden infoMobil">
                <span>URUNU INCELE</span>
              </Link>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.8,
                delay: 0.5,
                ease: [0, 0.71, 0.2, 1.01]
              }}
              onClick={() => {
                dispatch(count(15))
                dispatch(countState("dort"))
                dispatch(state("dort/normal"))
                dispatch(b(8))
              }}
              className="w-full model relative max-h-[250px] min-h-[250px] overflow-hidden cursor-pointer"
            >
              <img
                src={dortmund[15].id}
                alt=""
                onClick={() => {
                  dispatch(ImagePop())
                  dispatch(count(15))
                  dispatch(countState("dort"))
                }}
                className='w-full h-full scale-105 hover:scale-100 object-cover'
              />
              <Link to="/urun-detay" className="absolute max-md:hidden info">
                <span>URUNU INCELE</span>
              </Link>
              <Link to="/urun-detay" className="absolute md:hidden infoMobil">
                <span>URUNU INCELE</span>
              </Link>
            </motion.div>
          </div>
        </div>
      </article>
      <article
        id='wood'
        className='container max-lg:px-10 max-xl:px-6 gold max-md:flex max-md:flex-col relative text-2xl max-w-[1100px] m-auto w-full'
      >
        <h2 className='text-start max-lg:text-4xl max-lg:text-center text-4xl font-bold my-4 pt-4 text-opacity-75 max-md:text-2xl text-[#353535]'>Wood - Ahşap Koltuk Takımı</h2>
        <div className="h-1 opacity-50 bg-[#353535]"></div>
        <div className="w-full h-full my-4 relative grid gap-5 grid-wrap grid-cols-3 max-md:grid-cols-1">
          <div className="flex flex-col gap-5">
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.8,
                delay: 0.5,
                ease: [0, 0.71, 0.2, 1.01]
              }}
              onClick={() => {
                dispatch(count(16))
                dispatch(countState("han"))
                dispatch(state("han/ber"))
                dispatch(b(0))
              }}
              className="w-full model relative max-h-[500px] min-h-[500px] max-lg:max-h-[250px] max-lg:min-h-[250px] overflow-hidden cursor-pointer"
            >
              <img
                src={han[16].id}
                alt=""
                onClick={() => {
                  dispatch(ImagePop())
                  dispatch(count(16))
                  dispatch(countState("han"))
                }}
                className='w-full h-full scale-105 hover:scale-100 object-cover'
              />
              <Link to="/urun-detay" className="absolute max-md:hidden info">
                <span>URUNU INCELE</span>
              </Link>
              <Link to="/urun-detay" className="absolute md:hidden infoMobil">
                <span>URUNU INCELE</span>
              </Link>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.8,
                delay: 0.5,
                ease: [0, 0.71, 0.2, 1.01]
              }}
              onClick={() => {
                dispatch(count(8))
                dispatch(countState("han"))
                dispatch(state("han/normal"))
                dispatch(b(3))
              }}
              className="w-full model relative max-h-[250px] min-h-[250px] overflow-hidden cursor-pointer"
            >
              <img
                src={han[8].id}
                alt=""
                onClick={() => {
                  dispatch(ImagePop())
                  dispatch(count(8))
                  dispatch(countState("han"))
                }}
                className='w-full h-full scale-105 hover:scale-100 object-cover'
              />
              <Link to="/urun-detay" className="absolute max-md:hidden info">
                <span>URUNU INCELE</span>
              </Link>
              <Link to="/urun-detay" className="absolute md:hidden infoMobil">
                <span>URUNU INCELE</span>
              </Link>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.8,
                delay: 0.5,
                ease: [0, 0.71, 0.2, 1.01]
              }}
              onClick={() => {
                dispatch(count(2))
                dispatch(countState("han"))
                dispatch(state("han/normal"))
                dispatch(b(2))
              }}
              className="w-full model relative max-h-[250px] min-h-[250px] overflow-hidden cursor-pointer"
            >
              <img
                src={han[2].id}
                alt=""
                onClick={() => {
                  dispatch(ImagePop())
                  dispatch(count(2))
                  dispatch(countState("han"))
                }}
                className='w-full h-full scale-105 hover:scale-100 object-cover'
              />
              <Link to="/urun-detay" className="absolute max-md:hidden info">
                <span>URUNU INCELE</span>
              </Link>
              <Link to="/urun-detay" className="absolute md:hidden infoMobil">
                <span>URUNU INCELE</span>
              </Link>
            </motion.div>
          </div>
          <div className="flex flex-col gap-5">
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.8,
                delay: 0.5,
                ease: [0, 0.71, 0.2, 1.01]
              }}
              onClick={() => {
                dispatch(count(13))
                dispatch(countState("han"))
                dispatch(state("han/normal"))
                dispatch(b(1))
              }}
              className="w-full model relative max-h-[250px] min-h-[250px] overflow-hidden cursor-pointer"
            >
              <img
                src={han[13].id}
                alt=""
                onClick={() => {
                  dispatch(ImagePop())
                  dispatch(count(13))
                  dispatch(countState("han"))
                }}
                className='w-full h-full scale-105 hover:scale-100 object-cover'
              />
              <Link to="/urun-detay" className="absolute max-md:hidden info">
                <span>URUNU INCELE</span>
              </Link>
              <Link to="/urun-detay" className="absolute md:hidden infoMobil">
                <span>URUNU INCELE</span>
              </Link>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.8,
                delay: 0.5,
                ease: [0, 0.71, 0.2, 1.01]
              }}
              onClick={() => {
                dispatch(count(15))
                dispatch(countState("han"))
                dispatch(state("han/normal"))
                dispatch(b(4))
              }}
              className="w-full model relative max-h-[250px] min-h-[250px] overflow-hidden cursor-pointer"
            >
              <img
                src={han[15].id}
                alt=""
                onClick={() => {
                  dispatch(ImagePop())
                  dispatch(count(15))
                  dispatch(countState("han"))
                }}
                className='w-full h-full scale-105 hover:scale-100 object-cover'
              />
              <Link to="/urun-detay" className="absolute max-md:hidden info">
                <span>URUNU INCELE</span>
              </Link>
              <Link to="/urun-detay" className="absolute md:hidden infoMobil">
                <span>URUNU INCELE</span>
              </Link>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.8,
                delay: 0.5,
                ease: [0, 0.71, 0.2, 1.01]
              }}
              onClick={() => {
                dispatch(count(12))
                dispatch(countState("han"))
                dispatch(state("han/ber"))
                dispatch(b(6))
              }}
              className="w-full model relative max-h-[500px] min-h-[500px] max-lg:max-h-[250px] max-lg:min-h-[250px] overflow-hidden cursor-pointer"
            >
              <img
                src={han[12].id}
                alt=""
                onClick={() => {
                  dispatch(ImagePop())
                  dispatch(count(12))
                  dispatch(countState("han"))
                }}
                className='w-full h-full scale-105 hover:scale-100 object-cover'
              />
              <Link to="/urun-detay" className="absolute max-md:hidden info">
                <span>URUNU INCELE</span>
              </Link>
              <Link to="/urun-detay" className="absolute md:hidden infoMobil">
                <span>URUNU INCELE</span>
              </Link>
            </motion.div>
          </div>
          <div className="flex flex-col gap-5">
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.8,
                delay: 0.5,
                ease: [0, 0.71, 0.2, 1.01]
              }}
              onClick={() => {
                dispatch(count(9))
                dispatch(countState("han"))
                dispatch(state("han/normal"))
                dispatch(b(5))
              }}
              className="w-full model relative max-h-[500px] min-h-[500px] max-lg:max-h-[250px] max-lg:min-h-[250px] overflow-hidden cursor-pointer"
            >
              <img
                src={han[9].id}
                alt=""
                onClick={() => {
                  dispatch(ImagePop())
                  dispatch(count(9))
                  dispatch(countState("han"))
                }}
                className='w-full h-full scale-105 hover:scale-100 object-cover'
              />
              <Link to="/urun-detay" className="absolute max-md:hidden info">
                <span>URUNU INCELE</span>
              </Link>
              <Link to="/urun-detay" className="absolute md:hidden infoMobil">
                <span>URUNU INCELE</span>
              </Link>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.8,
                delay: 0.5,
                ease: [0, 0.71, 0.2, 1.01]
              }}
              onClick={() => {
                dispatch(count(10))
                dispatch(countState("han"))
                dispatch(state("han/ber"))
                dispatch(b(5))
              }}
              className="w-full model relative max-h-[250px] min-h-[250px] overflow-hidden cursor-pointer"
            >
              <img
                src={han[10].id}
                alt=""
                onClick={() => {
                  dispatch(ImagePop())
                  dispatch(count(10))
                  dispatch(countState("han"))
                }}
                className='w-full h-full scale-105 hover:scale-100 object-cover'
              />
              <Link to="/urun-detay" className="absolute max-md:hidden info">
                <span>URUNU INCELE</span>
              </Link>
              <Link to="/urun-detay" className="absolute md:hidden infoMobil">
                <span>URUNU INCELE</span>
              </Link>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.8,
                delay: 0.5,
                ease: [0, 0.71, 0.2, 1.01]
              }}
              onClick={() => {
                dispatch(count(5))
                dispatch(countState("han"))
                dispatch(state("han/normal"))
                dispatch(b(7))
              }}
              className="w-full model relative max-h-[250px] min-h-[250px] overflow-hidden cursor-pointer"
            >
              <img
                src={han[5].id}
                alt=""
                onClick={() => {
                  dispatch(ImagePop())
                  dispatch(count(5))
                  dispatch(countState("han"))
                }}
                className='w-full h-full scale-105 hover:scale-100 object-cover'
              />
              <Link to="/urun-detay" className="absolute max-md:hidden info">
                <span>URUNU INCELE</span>
              </Link>
              <Link to="/urun-detay" className="absolute md:hidden infoMobil">
                <span>URUNU INCELE</span>
              </Link>
            </motion.div>
          </div>
        </div>
      </article>
      <article
        id='gloria'
        className='container max-lg:px-10 max-xl:px-6 gold max-md:flex max-md:flex-col relative text-2xl max-w-[1100px] m-auto w-full'
      >
        <h2 className='text-start max-lg:text-4xl max-lg:text-center text-4xl font-bold my-4 pt-4 text-opacity-75 max-md:text-2xl text-[#353535]'>Gloria - Koltuk Takımı</h2>
        <div className="h-1 opacity-50 bg-[#353535]"></div>
        <div className="w-full h-full my-4 relative grid gap-5 grid-wrap grid-cols-3 max-md:grid-cols-1">
          <div className="flex flex-col gap-5">
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.8,
                delay: 0.5,
                ease: [0, 0.71, 0.2, 1.01]
              }}
              onClick={() => {
                dispatch(count(1))
                dispatch(countState("gloria"))
                dispatch(state("glo/normal"))
                dispatch(b(0))
              }}
              className="w-full model relative max-h-[500px] min-h-[500px] max-lg:max-h-[250px] max-lg:min-h-[250px] overflow-hidden cursor-pointer"
            >
              <img
                src={gloria[1].id}
                alt=""
                onClick={() => {
                  dispatch(ImagePop())
                  dispatch(count(1))
                  dispatch(countState("gloria"))
                }}
                className='w-full h-full scale-105 hover:scale-100 object-cover'
              />
              <Link to="/urun-detay" className="absolute max-md:hidden info">
                <span>URUNU INCELE</span>
              </Link>
              <Link to="/urun-detay" className="absolute md:hidden infoMobil">
                <span>URUNU INCELE</span>
              </Link>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.8,
                delay: 0.5,
                ease: [0, 0.71, 0.2, 1.01]
              }}
              onClick={() => {
                dispatch(count(3))
                dispatch(countState("gloria"))
                dispatch(state("glo/normal"))
                dispatch(b(3))
              }}
              className="w-full model relative max-h-[250px] min-h-[250px] overflow-hidden cursor-pointer"
            >
              <img
                src={gloria[3].id}
                alt=""
                onClick={() => {
                  dispatch(ImagePop())
                  dispatch(count(3))
                  dispatch(countState("gloria"))
                }}
                className='w-full h-full scale-105 hover:scale-100 object-cover'
              />
              <Link to="/urun-detay" className="absolute max-md:hidden info">
                <span>URUNU INCELE</span>
              </Link>
              <Link to="/urun-detay" className="absolute md:hidden infoMobil">
                <span>URUNU INCELE</span>
              </Link>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.8,
                delay: 0.5,
                ease: [0, 0.71, 0.2, 1.01]
              }}
              onClick={() => {
                dispatch(count(5))
                dispatch(countState("gloria"))
                dispatch(state("glo/normal"))
                dispatch(b(6))
              }}
              className="w-full model relative max-h-[250px] min-h-[250px] overflow-hidden cursor-pointer"
            >
              <img
                src={gloria[5].id}
                alt=""
                onClick={() => {
                  dispatch(ImagePop())
                  dispatch(count(5))
                  dispatch(countState("gloria"))
                }}
                className='w-full h-full scale-105 hover:scale-100 object-cover'
              />
              <Link to="/urun-detay" className="absolute max-md:hidden info">
                <span>URUNU INCELE</span>
              </Link>
              <Link to="/urun-detay" className="absolute md:hidden infoMobil">
                <span>URUNU INCELE</span>
              </Link>
            </motion.div>
          </div>
          <div className="flex flex-col gap-5">
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.8,
                delay: 0.5,
                ease: [0, 0.71, 0.2, 1.01]
              }}
              onClick={() => {
                dispatch(count(7))
                dispatch(countState("gloria"))
                dispatch(state("glo/normal"))
                dispatch(b(1))
              }}
              className="w-full model relative max-h-[250px] min-h-[250px] overflow-hidden cursor-pointer"
            >
              <img
                src={gloria[7].id}
                alt=""
                onClick={() => {
                  dispatch(ImagePop())
                  dispatch(count(7))
                  dispatch(countState("gloria"))
                }}
                className='w-full h-full scale-105 hover:scale-100 object-cover'
              />
              <Link to="/urun-detay" className="absolute max-md:hidden info">
                <span>URUNU INCELE</span>
              </Link>
              <Link to="/urun-detay" className="absolute md:hidden infoMobil">
                <span>URUNU INCELE</span>
              </Link>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.8,
                delay: 0.5,
                ease: [0, 0.71, 0.2, 1.01]
              }}
              onClick={() => {
                dispatch(count(10))
                dispatch(countState("gloria"))
                dispatch(state("glo/normal"))
                dispatch(b(4))
              }}
              className="w-full model relative max-h-[250px] min-h-[250px] overflow-hidden cursor-pointer"
            >
              <img
                src={gloria[10].id}
                alt=""
                onClick={() => {
                  dispatch(ImagePop())
                  dispatch(count(10))
                  dispatch(countState("gloria"))
                }}
                className='w-full h-full scale-105 hover:scale-100 object-cover'
              />
              <Link to="/urun-detay" className="absolute max-md:hidden info">
                <span>URUNU INCELE</span>
              </Link>
              <Link to="/urun-detay" className="absolute md:hidden infoMobil">
                <span>URUNU INCELE</span>
              </Link>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.8,
                delay: 0.5,
                ease: [0, 0.71, 0.2, 1.01]
              }}
              onClick={() => {
                dispatch(count(11))
                dispatch(countState("gloria"))
                dispatch(state("glo/ber"))
                dispatch(b(7))
              }}
              className="w-full model relative max-h-[500px] min-h-[500px] max-lg:max-h-[250px] max-lg:min-h-[250px] overflow-hidden cursor-pointer"
            >
              <img
                src={gloria[11].id}
                alt=""
                onClick={() => {
                  dispatch(ImagePop())
                  dispatch(count(11))
                  dispatch(countState("gloria"))
                }}
                className='w-full h-full scale-105 hover:scale-100 object-cover'
              />
              <Link to="/urun-detay" className="absolute max-md:hidden info">
                <span>URUNU INCELE</span>
              </Link>
              <Link to="/urun-detay" className="absolute md:hidden infoMobil">
                <span>URUNU INCELE</span>
              </Link>
            </motion.div>
          </div>
          <div className="flex flex-col gap-5">
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.8,
                delay: 0.5,
                ease: [0, 0.71, 0.2, 1.01]
              }}
              onClick={() => {
                dispatch(count(12))
                dispatch(countState("gloria"))
                dispatch(state("glo/ber"))
                dispatch(b(2))
              }}
              className="w-full model relative max-h-[500px] min-h-[500px] max-lg:max-h-[250px] max-lg:min-h-[250px] overflow-hidden cursor-pointer"
            >
              <img
                src={gloria[12].id}
                alt=""
                onClick={() => {
                  dispatch(ImagePop())
                  dispatch(count(12))
                  dispatch(countState("gloria"))
                }}
                className='w-full h-full scale-105 hover:scale-100 object-cover'
              />
              <Link to="/urun-detay" className="absolute max-md:hidden info">
                <span>URUNU INCELE</span>
              </Link>
              <Link to="/urun-detay" className="absolute md:hidden infoMobil">
                <span>URUNU INCELE</span>
              </Link>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.8,
                delay: 0.5,
                ease: [0, 0.71, 0.2, 1.01]
              }}
              onClick={() => {
                dispatch(count(8))
                dispatch(countState("gloria"))
                dispatch(state("glo/normal"))
                dispatch(b(5))
              }}
              className="w-full model relative max-h-[250px] min-h-[250px] overflow-hidden cursor-pointer"
            >
              <img
                src={gloria[8].id}
                alt=""
                onClick={() => {
                  dispatch(ImagePop())
                  dispatch(count(8))
                  dispatch(countState("gloria"))
                }}
                className='w-full h-full scale-105 hover:scale-100 object-cover'
              />
              <Link to="/urun-detay" className="absolute max-md:hidden info">
                <span>URUNU INCELE</span>
              </Link>
              <Link to="/urun-detay" className="absolute md:hidden infoMobil">
                <span>URUNU INCELE</span>
              </Link>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.8,
                delay: 0.5,
                ease: [0, 0.71, 0.2, 1.01]
              }}
              onClick={() => {
                dispatch(count(0))
                dispatch(countState("gloria"))
                dispatch(state("glo/normal"))
              }}
              className="w-full model relative max-h-[250px] min-h-[250px] overflow-hidden cursor-pointer"
            >
              <img
                src={gloria[0].id}
                alt=""
                onClick={() => {
                  dispatch(ImagePop())
                  dispatch(count(0))
                  dispatch(countState("gloria"))
                  dispatch(b(8))
                }}
                className='w-full h-full scale-105 hover:scale-100 object-cover'
              />
              <Link to="/urun-detay" className="absolute max-md:hidden info">
                <span>URUNU INCELE</span>
              </Link>
              <Link to="/urun-detay" className="absolute md:hidden infoMobil">
                <span>URUNU INCELE</span>
              </Link>
            </motion.div>
          </div>
        </div>
      </article>
    </div>
  )
}

export default Article2