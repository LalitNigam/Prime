import React from 'react'
import InfiniteHorizontalScroll from '../InfiniteHorizontalScroll'

const Section3 = () => {
  return (
    <div className='w-screen h-screen relative overflow-hidden bg-rose-200'>
      {/* Blur  */}
      <div class="absolute top-0 left-0 h-full ms:w-60 w-15 bg-gradient-to-l from-0 to-black/20 backdrop-blur-[2px] pointer-events-none z-600"></div>
      <div class="absolute top-0 right-0 h-full md:w-60 w-15 bg-gradient-to-r from-0 to-black/20 backdrop-blur-[2px]  pointer-events-none z-600"></div>
      <div className='absolute z-30 top-10 flex justify-center w-full md:text-5xl text-2xl font-bold'><h1 className='bg-white/20 backdrop-blur-md w-1/3 text-center p-2 rounded-2xl text-rose-800'>Customer Reviews</h1>
      </div>
      <div className='absolute md:rotate-[11.2deg] rotate-[8deg] top-100 -left-30'>
        <InfiniteHorizontalScroll/>
      </div>
      <div className='absolute md:rotate-[5deg] rotate-[-7deg] top-70 md:top-180 -left-30'>
        <InfiniteHorizontalScroll/>
      </div>
      <div className='absolute md:rotate-[25deg] rotate-[25deg] top-360 md:top-300 md:-left-80 -left-90'>
        <InfiniteHorizontalScroll/>
      </div>
    </div>
  )
}

export default Section3