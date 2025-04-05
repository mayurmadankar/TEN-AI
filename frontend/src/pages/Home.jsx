import { Contact } from '@/components/Contact';
import Demo from '@/components/Demo'
// import Experts from '@/components/Experts';
import Hero from '@/components/Hero'
import Offerings from '@/components/Offerings'
import Reviews from '@/components/Reviews';
import VideoCarousel from '@/components/VideoCarousel'
import React from 'react'

function Home() {
  return (
    <div className='flex flex-col items-center'>
        <Hero />
        <Demo />
        <VideoCarousel/>
        <Offerings/>
        {/* <Experts /> */}
        <Contact />
        <Reviews/>
    </div>
  )
}

export default Home