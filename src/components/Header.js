import React, { useState, useEffect } from 'react'
import { UserIcon, UserPlusIcon, ChevronDownIcon, ChevronRightIcon, Bars3Icon } from '@heroicons/react/24/outline'
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { headers, wrapper, ca, falsee, menuBar } from '../store/reducers/exampleReducer';
import { motion, wrap } from 'framer-motion';

const Header = () => {
  const { header, modelWrapper, menu, bar } = useSelector((state) => state.userManagament);
  const dispatch = useDispatch();

  const container = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  }

  const wrap = () => {
    setTimeout(() => {

    }, 100);
  }

  return (
    <header
      id='sayfa'
      className={`w-full z-50 bg-gradient text-white border-[7D7C7C] border-b ${bar ? 'barActive' : ''}`}
      onBlur={() => dispatch(falsee())}
    >
      <div className="lg:container max-lg:p-4 py-2 m-auto max-lg:flex max-lg:items-start">
        <div className="flex max-lg:hidden max-lg:flex-col w-full lg:p-2 justify-between lg:items-center">
          <div className="flex justify-between lg:items-center">
            <div className="brand">
              <Link to="/"
                onClick={() => { dispatch(falsee()) }}
              >
                <img
                  src="assets/images/soovlogo.png"
                  alt=""
                  className='md:h-14 max-md:h-12 object-cover cursor-pointer border-[#545454] rounded'
                />
              </Link>
            </div>
          </div>
          <ul className="navigation lg:grid text-center lg:grid-cols-4 gap-4 lg:px-10 ">
            <Link to="/"
              className='px-2'
            >
              <motion.div
                className={`navigation-item item  ${header === 0 ? 'active' : ''}`}
                onClick={() => {
                  dispatch(headers(0))
                  dispatch(falsee())
                  dispatch(ca(0))
                }}
              >
                Anasayfa
              </motion.div>
            </Link>
            <a
              className='px-2'
            >
              <motion.div

                className={`navigation-item model flex items-center item ${header === 1 ? 'active' : ''}`}
                onClick={() => {
                  dispatch(headers(1))
                  dispatch(wrapper())
                  dispatch(ca(0))
                }}
              >
                Modeller
                <ChevronRightIcon className={`h-4 rotate ts ml-2 ${modelWrapper ? 'active' : ''}`} />
              </motion.div>
              <ul className={`flex menuBarWrapper bg-[#353535] text-white font-bold flex-col ${modelWrapper ? '' : 'hidden'}`}>
                <Link
                  to="/"
                  onClick={() => {
                    dispatch(ca(4))
                    dispatch(wrapper())
                    dispatch(menuBar())
                  }}
                  className=''
                >
                  Dortmund
                </Link>
                <Link
                  to="/"
                  onClick={() => {
                    dispatch(ca(5))
                    dispatch(wrapper())
                    dispatch(menuBar())
                  }}
                  className=''
                >
                  Gloria
                </Link>
                <Link
                  to="/"
                  onClick={() => {
                    dispatch(ca(6))
                    dispatch(wrapper())
                    dispatch(menuBar())
                  }}
                  className=''
                >
                  Wood
                </Link>
              </ul>
            </a>
            <Link to="/hakkimizda"
              className='px-2'
            >
              <motion.div

                className={`navigation-item item ${header === 2 ? 'active' : ''}`}
                onClick={() => {
                  dispatch(headers(2))
                  dispatch(ca(0))
                }}
              >
                Hakkımızda
              </motion.div>
            </Link>
            <Link to="/iletisim"
              className='px-2'
            >
              <motion.div

                className={`navigation-item item ${header === 3 ? 'active' : ''}`}
                onClick={() => {
                  dispatch(headers(3))
                  dispatch(ca(0))
                }}
              >
                Bize Ulaşın
              </motion.div>
            </Link>
          </ul>
        </div>
        <div className={`flex lg:hidden max-lg:flex-col w-full lg:p-2 justify-between lg:items-center`}>
          <div className="flex max-md:p-2 justify-between items-center">
            <div className="brand">
              <Link to="/"
                onClick={() => {
                  dispatch(headers(0))
                  dispatch(falsee())
                  dispatch(ca(0))
                }}
              >
                <img
                  src="assets/images/soovlogo.png"
                  alt=""
                  className='h-14 max-md:h-10 object-cover cursor-pointer border-[#545454] rounded'
                />
              </Link>
            </div>
            <Bars3Icon
              className='h-10 lg:hidden cursor-pointer'
              onClick={() => dispatch(menuBar())}
            />
          </div>
          <ul className={`navigation px-2 items-center select-none lg:grid lg:grid-cols-4 gap-4 lg:px-10 ${menu ? '' : 'hidden'}`}>
            <Link to="/"
              className='px-2'
            >
              <motion.div

                className={`navigation-item item  ${header === 0 ? 'active' : ''}`}
                onClick={() => {
                  dispatch(headers(0))
                  dispatch(ca(0))
                }}
              >
                Anasayfa
              </motion.div>
            </Link>
            <a
              className='px-2'>
              <motion.div

                className={`navigation-item flex items-center justify-between model item ${header === 1 ? 'active' : ''}`}
                onClick={() => {
                  dispatch(headers(1))
                  dispatch(wrapper())
                  dispatch(ca(0))
                }}

              >
                Modeller
                <ChevronRightIcon className={`h-4 rotate ts ml-2 ${modelWrapper ? 'active' : ''}`} />
              </motion.div>
            </a>
            <ul className={`flex font-bold flex-col ${modelWrapper ? '' : 'hidden'}`}>
              <Link to='/'
                onClick={() => {
                  dispatch(ca(4))
                  dispatch(wrapper())
                  dispatch(menuBar())
                }}
                className='py-2 my-2 relative left-0 hover:left-1 hover:text-[#FFCC70] ts w-full cursor-pointer'
              >
                Dortmund
              </Link>
              <Link to='/'
                onClick={() => {
                  dispatch(ca(5))
                  dispatch(wrapper())
                  dispatch(menuBar())
                }}
                className='py-2 my-2 relative left-0 hover:left-1 hover:text-[#FFCC70] ts w-full cursor-pointer'
              >
                Gloria
              </Link>
              <Link to='/'
                onClick={() => {
                  dispatch(ca(6))
                  dispatch(wrapper())
                  dispatch(menuBar())
                }}
                className='py-2 my-2 relative left-0 hover:left-1 hover:text-[#FFCC70] ts w-full cursor-pointer'
              >
                Wood
              </Link>
            </ul>
            <Link to="/hakkimizda"
              className='px-2'
            >
              <motion.div

                className={`navigation-item item ${header === 2 ? 'active' : ''}`}
                onClick={() => {
                  dispatch(headers(2))
                  dispatch(ca(0))
                }}
              >
                Hakkımızda
              </motion.div>
            </Link>
            <Link to="/iletisim"
              className='px-2'
            >
              <motion.div

                className={`navigation-item item ${header === 3 ? 'active' : ''}`}
                onClick={() => {
                  dispatch(headers(3))
                }}
              >
                Bize Ulaşın
              </motion.div>
            </Link>
          </ul>
        </div>
      </div>
    </header >
  )
}

export default Header