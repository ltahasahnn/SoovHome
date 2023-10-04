import React, { useState, useEffect } from 'react'
import { ChevronLeftIcon, ChevronRightIcon, chevron } from '@heroicons/react/24/outline'
import Image1 from '../assets/images/DORTMUND PART 2/DORTMUND KOLTUK TAKIMI/IMG_0001_19.jpeg'
import { useDispatch, useSelector } from 'react-redux'
import { count, countState, state } from '../store/reducers/exampleReducer'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const HeaderContent = () => {
  const dispatch = useDispatch();
  const [currentImageIndexBefore, setCurrentImageIndexBefore] = useState(0);
  const [currentImageIndex, setCurrentImageIndex] = useState(1);
  const [currentImageIndexAfter, setCurrentImageIndexAfter] = useState(2);

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % 3);
    setCurrentImageIndexBefore((prevIndex) => (prevIndex + 1) % 3);
    setCurrentImageIndexAfter((prevIndex) => (prevIndex + 1) % 3);
  };

  const prevImage = () => {
    setCurrentImageIndex(
      (prevIndex) => (prevIndex - 1 + 3) % 3
    );
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextImage();
    }, 3000);

    return () => clearInterval(interval);
  }, [currentImageIndex]);

  const { media, countt } = useSelector((state) => state.userManagament);

  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.pageX - e.target.offsetLeft);
    setScrollLeft(e.target.scrollLeft);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    const x = e.pageX - e.target.offsetLeft;
    const walk = (x - startX) * 3; // Ayarlayabilirsiniz
    e.target.scrollLeft = scrollLeft - walk;
  };
  const handleMouseUp = () => {
    setIsDragging(false);
  };

  return (
    <div className='w-full select-none relative  max-lg:min-h-[60vh] max-sm:min-h-[10vh] max-md:min-h-[42vh] min-h-[80vh] max-lg:mt-10 lg:my-4 max-sm:p-2 lg:p-10'
      onMouseMove={handleMouseMove}
    >
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="lg:container relative text-black m-auto flex items-center justify-center">
        <ChevronLeftIcon className='h-24 z-50 md:mr-10 hover:text-[#FFB000] text-[#FFCC70] ts cursor-pointer'
          onClick={prevImage}
        />
        <div className="flex w-full relative justify-center">
          <div className="absolute min-w-[110%] blur grid grid-cols-2">
            <img
              src={media[currentImageIndexBefore].id}
              draggable="false"
              className='object-cover max-md:hidden ts border z-5 rounded min-w-[100%] max-h-[60vh]'
              alt=""
            />
            <img
              src={media[currentImageIndexAfter].id}
              draggable="false"
              className='object-cover max-md:hidden ts border z-5 rounded min-w-[100%] max-h-[60vh]'
              alt=""
            />
          </div>
          <Link
            to="/urun-detay"
            className='z-50 min-w-[90%] max-md:max-w-[100%] max-md:min-w-[100%] max-w-[90%]'
          >
            <img
              src={media[currentImageIndex].id}
              onClick={() => {
                dispatch(count(currentImageIndex))
                dispatch(countState("media"))
                dispatch(state("dort/normal"))
              }}
              draggable="false"
              className='object-cover ts shadow rounded min-w-[100%] max-md:max-h-[30vh] max-md:min-h-[30vh] max-lg:min-h-[45vh] max-lg:max-h-[45vh] max-h-[70vh]'
              alt=""
            />
          </Link>
        </div>
        <ChevronRightIcon className='h-24 z-50 md:ml-10 hover:text-[#FFB000] text-[#FFCC70] ts cursor-pointer'
          onClick={nextImage}
        />
        <div className="l50 flex">
          <div className={`dot ${currentImageIndex === 0 ? 'active' : ''}`}></div>
          <div className={`dot ${currentImageIndex === 1 ? 'active' : ''}`}></div>
          <div className={`dot ${currentImageIndex === 2 ? 'active' : ''}`}></div>
        </div>
      </motion.div>
    </div>
  )
}

export default HeaderContent