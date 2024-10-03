import React from 'react'

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="pt-[12%] px-6 md:px-10 lg:px-20 text-white bg-gradient-to-r from-black w-full aspect-video absolute">
      <div className='hidden lg:flex md:flex sm:flex flex-col '>
      <h1 className="text-3xl md:text-4xl lg:text-5xl font-medium">{title}</h1>
      <p className="py-4 hidden lg:flex xl:flex md:flex text-sm md:text-base lg:text-lg w-full md:w-2/3 lg:w-1/3">{overview}</p>
      <div className="flex justify-between w-full md:w-[50%] lg:w-[27%] px-0 md:px-5">
        <button className="rounded-lg p-2 px-5 md:px-7 lg:px-9 text-base md:text-lg lg:text-xl bg-white text-black"> 
          Play
        </button>
        <button className="rounded-lg p-2 px-5 md:px-7 lg:px-9 text-base md:text-lg lg:text-xl text-white bg-opacity-50 bg-gray-500">
          More Info
        </button>
      </div>
      </div>
    </div>
  )
}

export default VideoTitle
