import React, { useState, useEffect } from 'react'
import { UserIcon, UserPlusIcon, Bars3Icon } from '@heroicons/react/24/outline'
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { headers } from '../store/reducers/exampleReducer';

const Header = () => {
  const { header } = useSelector((state) => state.userManagament);
  const [menuBar, setMenuBar] = useState(true)
  const dispatch = useDispatch();

  return (
    <header className='w-full z-50 bg-gradient text-white border-[7D7C7C] border-b'>
      <div className="container py-2 m-auto max-lg:flex max-lg:items-start">
        <div className="flex max-lg:hidden max-lg:flex-col w-full lg:p-2 justify-between lg:items-center">
          <div className="flex justify-between lg:items-center">
            <div className="brand">
              <img
                src="assets/images/soovlogo.png"
                alt=""
                className='h-14 object-cover cursor-pointer border-[#545454] rounded'
              />
            </div>
          </div>
          <ul className="navigation lg:grid text-center lg:grid-cols-4 gap-4 lg:px-10 ">
            <Link to="/home"
              className='px-2'
            >
              <li
                className={`navigation-item item  ${header === 0 ? 'active' : ''}`}
                onClick={() => dispatch(headers(0))}
              >
                Anasayfa
              </li>
            </Link>
            <Link to="/models"
              className='px-2'
            >
              <li
                className={`navigation-item item ${header === 1 ? 'active' : ''}`}
                onClick={() => dispatch(headers(1))}
              >
                Ürünler
              </li>
            </Link>
            <Link to="/aboutus"
              className='px-2'
            >
              <li
                className={`navigation-item item ${header === 2 ? 'active' : ''}`}
                onClick={() => dispatch(headers(2))}
              >
                Hakkımızda
              </li>
            </Link>
            <Link to="/contact"
              className='px-2'
            >
              <li
                className={`navigation-item item ${header === 3 ? 'active' : ''}`}
                onClick={() => dispatch(headers(3))}
              >
                Bize Ulaşın
              </li>
            </Link>
          </ul>
        </div>
        <div className={`flex lg:hidden max-lg:flex-col w-full lg:p-2 justify-between lg:items-center`}>
          <div className="flex justify-between items-center">
            <div className="brand">
              <img
                src="assets/images/soovlogo.png"
                alt=""
                className='h-14 object-cover cursor-pointer border-[#545454] rounded'
              />
            </div>
            <Bars3Icon
              className='h-10 lg:hidden cursor-pointer'
              onClick={() => setMenuBar(!menuBar)}
            />
          </div>
          <ul className={`navigation items-center select-none lg:grid text-center lg:grid-cols-4 gap-4 lg:px-10 ${menuBar ? 'hidden' : ''}`}>
            <Link to="/home"
              className='px-2'
            >
              <li
                className={`navigation-item item  ${header === 0 ? 'active' : ''}`}
                onClick={() => dispatch(headers(0))}
              >
                Anasayfa
              </li>
            </Link>
            <Link to="/models"
              className='px-2'
            >
              <li
                className={`navigation-item item ${header === 1 ? 'active' : ''}`}
                onClick={() => dispatch(headers(1))}
              >
                Ürünler
              </li>
            </Link>
            <Link to="/aboutus"
              className='px-2'
            >
              <li
                className={`navigation-item item ${header === 2 ? 'active' : ''}`}
                onClick={() => dispatch(headers(2))}
              >
                Hakkımızda
              </li>
            </Link>
            <Link to="/contact"
              className='px-2'
            >
              <li
                className={`navigation-item item ${header === 3 ? 'active' : ''}`}
                onClick={() => dispatch(headers(3))}
              >
                Bize Ulaşın
              </li>
            </Link>
          </ul>
        </div>
      </div>
    </header>
  )
}

export default Header