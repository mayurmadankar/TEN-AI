import React, { useEffect, useState } from 'react';
import { Separator } from './ui/separator';
import { Landmark, Mic, Store, TreePalm, Umbrella } from 'lucide-react';
import { Link } from 'react-router-dom';
import {Swiper, SwiperSlide} from "swiper/react";
import {Autoplay} from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import { useTheme } from '../context/ThemeContext';

const demoData = [
  {
    type : "Travel",
    icon : <TreePalm />,
    data : "Simplify flight rescheduling in just a few steps. Your PNR is ABC123 and last name is Johnson"
  },
  {
    type : "Insurance",
    icon : <Umbrella />,
    data : "Talk to our agent who will access customer needs and suggest the best-suited policy for yur insurance needs."
  },
  {
    type : "Retail",
    icon : <Store />,
    data : "Check order details and make changes with ease. Ask about a bluetooth speaker (ID: #202) and security camera (ID: #456)"
  },
  {
    type : "Collections",
    icon : <Landmark />,
    data : "This collection agent helps you manage payment-related matters, such as overdue payments, payment plan options, etc. Hint: Last digits of social security are 3456."
  },
];


function Demo() {
  const [demoType, setDemoType] = useState(null);
  let [brands, setBrands] = useState([
    '/cultfit.svg', 
    "/grow.svg", 
    "/supermoney.svg"
  ]);

  const {theme} = useTheme();

  useEffect(() => {
    if(theme === "dark"){
      setBrands(['/cultfit_dark.svg', "/grow_dark.svg", "/supermoney_dark.svg"]);
    }
    else{
      setBrands(['/cultfit.svg', "/grow.svg", "/supermoney.svg"]);
    }
  }, [theme])

  const typeHandler = (type) => {
    setDemoType(type);
  }

  return (
    <>
      <div className='flex flex-col lg:w-[80vw] w-2/3 min-h-[80vh] overflow-hidden border border-gray-600 rounded-lg'>
          <div className='w-full flex p-3 items-center gap-2'>
            <h1 className='text-lg font-semibold'>TenAI</h1>
            <Separator orientation='vertical' style={{height : "16px"}} className="bg-gray-400 dark:bg-gray-400" />
            <h1 className='text-lg font-semibold'>Experience Our AI Agents</h1>
          </div>

          <Separator className="bg-gray-600"/>

          <div className='m-3 bg-gray-200 flex flex-col flex-1 rounded-lg px-12'>
            <div className='flex flex-col gap-3 w-full py-4 flex-1 lg:justify-center lg:items-center lg:flex-row'>
                <div className='max-w-1/3 w-full flex flex-col gap-4'>
                  <h1 className='text-xl text-gray-400 pl-6 font-bold'>SELECT USE CASE</h1>
                  <div className='flex flex-col gap-3'>
                    {demoData.map((demo) => (
                        <DemoType
                          type={demo.type}
                          icon={demo.icon}
                          key={demo.type}
                          demoType={demoType}
                          typeHandler={typeHandler}
                        />
                    ))}
                  </div>
                </div>

                <div className='max-w-1/3 w-full flex flex-col items-center gap-4'>
                    <button className='w-[90px] h-[90px] text-white border-0 p-8 bg-blue-600 rounded-full outline-white outline-[10px] -outline-offset-[12px]'><Mic /></button>
                    <p className='text-sm text-black font-semibold'>Tap the mic and experience out AI agents</p>
                </div>
                
                <div className='w-1/3 flex justify-center'>
                    {!demoType && <DemoTypeCard type={"Voice"} data={"Human-like voice agents assist, provide insights, and complete enterprise tasks efficiently through seamless interaction"}/>}
                    {demoType && <DemoTypeCard type={demoType} data={demoData.find((demo) => demo.type === demoType).data} />}
                </div>
            </div>

            <div className='flex flex-col pl-4 gap-3 items-center mb-4'>
                  <div className='border border-gray-500 p-2 rounded-full text-gray-500 font-bold'>0:00</div>
                  <div className='text-xs text-gray-700 font-semibold'>Trial ends in 1 minute! <Link to="#" className='text-blue-600'>Signup now</Link> to experience our AI Agent.</div>
            </div>
          </div>
      </div>

      <div className="flex flex-col w-full items-center mt-3 gap-2 text-black">

          <p className="text-sm font-semibold text-gray-600">Trusted by Leading Brands</p>
        
          <div className="w-[22rem] relative overflow-hidden">
              {theme === "light" && <div className="fade-overlay left-fade"></div>}
              <Swiper
                spaceBetween={25} // Space between slides
                slidesPerView={2} // Number of slides visible at a time
                loop={true} // Enable infinite loop
                autoplay={{
                  delay: 0, // Delay between slides (in milliseconds)
                  disableOnInteraction: false, // Keep autoplay running even after user interaction
                }}
                speed={3000}

                className='mySwiper'
                modules={[Autoplay]} // Add the Autoplay module
              >
                {brands.map((brand, index) => (
                    <SwiperSlide key={index}>
                      <div className="brand-logo">
                        <img 
                          src={brand} 
                          alt={`Brand ${index + 1}`}
                          className="logo-image"
                        />
                      </div>
                    </SwiperSlide>
                ))}
              </Swiper>
              {theme === "light" &&  <div className="fade-overlay right-fade"></div>}
          </div>
      </div>
    </>
  )
}

export default Demo;




function DemoType({type, icon, typeHandler, demoType}){
  return (
    <button onClick={() => typeHandler(type)} className={`flex w-[80%] items-center gap-3 ${demoType === type ? "bg-blue-600" : "bg-white"} rounded-2xl overflow-hidden p-1 outline-0 border-0 cursor-pointer`}>
      <div className='bg-[#d6f549] rounded-full p-1 text-black'>
        {React.cloneElement(icon, {size : 20})}
      </div>
      <div className='font-bold text-sm text-black'>{type}</div>
    </button>
  )
}

function DemoTypeCard({type, data}){
  return (
    <div className='flex max-w-[80%] dark:text-black bg-white rounded-lg flex-col gap-3 justify-center p-8'>
        <h1 className='font-bold text-2xl'>Our {type} Agents</h1>
        <p className='text-sm text-gray-600'>{data}</p>
    </div>
  )
}