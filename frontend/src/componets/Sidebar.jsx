import React, { useState } from 'react'
import { PiSquaresFourLight, PiListBold, PiXBold } from "react-icons/pi"; // Added List and X icons
import { sidebarapimethod, Validationfiled } from '../constant/web_asseets';
import { Link, useLocation } from 'react-router-dom';

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
        fixed h-full w-[255px] bg-surface-alt z-[60] transition-transform duration-300 ease-in-out
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

          <section className='text-xs p-3 text-primary-50/30'>
            <div className='mb-2 text-secondary-400 text-lg font-semibold'>API METHOD</div>
            <div className='p-2 space-y-2'>
              {sidebarapimethod.map((value)=>(
                <Link  key={value.id} to={value.pageurl}>
                    <div className={`text-white hover:bg-primary-500/10 p-2 rounded transition-all cursor-pointer ${locationpath.pathname === value.pageurl ? "bg-primary-500/10" : ""} `}>
                    <h1>{value.name}</h1>
                    </div>
                </Link>
              ))}
            </div>
            <div>
                <div className='mb-2 text-lg text-secondary-400 font-semibold'>React Document</div>
                <div className='p-2 space-y-2'>
                {Validationfiled.map((value)=>(
                    <Link  key={value.id} to={value.link}>
                        <div className={`text-white hover:bg-primary-500/10 p-2 rounded transition-all cursor-pointer ${locationpath.pathname === value.link ? "bg-primary-500/10" : ""} `}>
                        <span className='text-sm'>{value.name}</span>
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