import React from 'react'

const VideoTitle = ({title,overview}) => {
  return (
    <div className='w-screen aspect-video pt-[21%] px-24 absolute bg-gradient-to-r from-black text-white'>
      <h1 className='text-4xl font-bold'>{title}</h1>
      <p className='py-6 text-lg w-1/4 '>{overview}</p>
     <div> 
        <button className='bg-white text-black text-xl p-4 px-10 m-2 rounded-lg hover:bg-opacity-85 '> ▶︎ Play</button>
        <button className='bg-gray-500 text-white text-xl p-4 px-10 m-2 rounded-lg bg-opacity-50'> 🛈 More info</button>
     </div>
    

    </div>
  )
}

export default VideoTitle
