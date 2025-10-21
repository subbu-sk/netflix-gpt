import React from 'react'

const VideoTitle = ({title,overview}) => {
  return (
    <div className='w-screen aspect-video pt-[21%] px-6 md:px-24 absolute bg-gradient-to-r from-black text-white'>
      <h1 className='text-4xl font-bold'>{title}</h1>
      <p className='hidden md:inline-block py-6 text-lg w-1/2 '>{overview}</p>
     <div className='my-4 md:m-0'> 
        <button className='bg-white text-black text-xl py-1 md:py-4 px-3 md:px-10 m-2 rounded-lg hover:bg-opacity-85 '> ▶︎ Play</button>
        <button className='hidden md:inline-block bg-gray-500 text-white text-xl p-4 px-10 m-2 rounded-lg bg-opacity-50'> 🛈 More info</button>
     </div>
    

    </div>
  )
}

export default VideoTitle
