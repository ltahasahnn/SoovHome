import React, { useEffect, useState } from 'react'

const Loading = () => {
  useEffect(() => {
    setTimeout(() => {
      window.location.href = "/home"
    }, 3000);
  }, [])
  return (
    <div className="w-full bg-[#f2f2f2] h-full min-h-[100vh] max-h-[100vh] flex flex-col items-center justify-center">
      <span className='font-bold gold mb-4'>Yükleniyor <span id='dot'></span></span>
      <div className="animate flex flex-col">
        <div className='circle'></div>
      </div>
    </div >
  )
}

export default Loading