import React, { useState } from 'react'
import { PiSquaresFourLight, PiListBold, PiXBold } from "react-icons/pi"; // Added List and X icons
import { sidebarapimethod, Validationfiled } from '../constant/web_asseets';
import { Link, useLocation } from 'react-router-dom';
import { AiFillApi } from "react-icons/ai";
import { BsFiletypeDoc } from "react-icons/bs";

const Sidebar = () => {
  // 1. State to manage visibility on mobile
  const [isOpen, setIsOpen] = useState(false);

  const locationpath = useLocation();

  return (
    <>
      {/* 2. Mobile Menu Button (Visible only on mobile/tablet) */}
      <button 
        onClick={() => setIsOpen(true)}
        className='lg:hidden fixed top-18 right-2 z-50 p-2 bg-surface-alt text-white rounded-md shadow-lg'
      >
        <PiListBold size={10} />
      </button>

      {/* 3. Overlay (Darkens the background when sidebar is open) */}
      {isOpen && (
        <div 
          className='fixed inset-0 bg-black/50 z-[55] lg:hidden' 
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* 4. The Sidebar Container */}
      <div className={`
        fixed h-full w-[255px] bg-base z-[60] transition-transform duration-300 ease-in-out
        ${isOpen ? 'translate-x-0' : '-translate-x-full'} 
        lg:translate-x-0
      `}>
        
        {/* Close Button for Mobile */}
        <div className='lg:hidden flex items-center justify-center p-2'>
             <span className='text-white flex-1 tracking-wide px-2 '>Documentation</span>
            <button onClick={() => setIsOpen(false)} className='text-white p-2'>
                <PiXBold size={24} />
            </button>
        </div>

        <div>
          {/* <section>
            <div className='flex items-center p-3 gap-x-2'>
              <PiSquaresFourLight className='text-primary-50'/>
              <h1 className='text-primary-500 font-bold'>API Endpoint</h1>
            </div> 
          </section> */}

          <section className=' p-3 '>
            <div className='mb-2  text-lg text-primary-500 font-medium tracking-wider flex items-center gap-2'><AiFillApi className='w-5 h-5'/>Https Method</div>
            <div className='flex flex-col gap-1'>
              {sidebarapimethod.map((value)=>(
                <Link  key={value.id} to={value.pageurl}>
                    <div className={` hover:bg-primary-500 hover:text-black p-2 rounded transition-all cursor-pointer ${locationpath.pathname === value.pageurl ? "bg-primary-500 text-base font-medium" : "text-white"} `}>
                    <h1 className=' tracking-wide text-[14px]'>{value.name}</h1>
                    </div>
                </Link>
              ))}
            </div>
            <hr className='text-white/80 my-2'/>
            <div>
                <div className='my-3 text-lg text-primary-500 font-medium tracking-wider flex gap-2 items-center'><BsFiletypeDoc className='w-5 h-5'/>React Document</div>
                <div className='flex flex-col gap-1'>
                {Validationfiled.map((value)=>(
                    <Link  key={value.id} to={value.link}>
                        <div className={` hover:bg-primary-500 hover:text-black p-2 rounded transition-all cursor-pointer ${locationpath.pathname === value.link ? "bg-primary-500 text-base font-medium" : "text-white"} `}>
                        <span className='text-[14px] tracking-wide'>{value.name}</span>
                        </div>
                    </Link>
                ))}
                </div>
            </div>
          </section>
        </div>
      </div>
    </>
  )
}

export default Sidebar