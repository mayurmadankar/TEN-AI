import Demo from '@/components/Demo'
import Hero from '@/components/Hero'
import React from 'react'

function Home() {
  return (
    <div className='flex flex-col items-center'>
        <Hero />
        <Demo />
    </div>
  )
}

export default Home