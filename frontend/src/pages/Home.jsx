import { Contact } from '@/components/Contact';
import Demo from '@/components/Demo'
import Hero from '@/components/Hero'
import Offerings from '@/components/Offerings'
import Reviews from '@/components/Reviews';
import VideoCarousel from '@/components/VideoCarousel'
import Impact from '@/components/Impact';
import React from 'react'

function Home() {
  return (
    <div className='flex flex-col items-center'>
        <Hero />
        <Demo />
        <VideoCarousel/>
        <Offerings/>
        <Reviews/>
        <Impact/>
        <Contact />
    </div>
  )
}

export default Home