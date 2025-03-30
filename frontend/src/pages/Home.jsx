import Demo from '@/components/Demo'
import Hero from '@/components/Hero'
import Offerings from '@/components/Offerings'
import VideoCarousel from '@/components/VideoCarousel'
import React from 'react'

function Home() {
  return (
    <div className='flex flex-col items-center'>
        <Hero />
        <Demo />
        <VideoCarousel/>
        <Offerings/>
    </div>
  )
}

export default Home