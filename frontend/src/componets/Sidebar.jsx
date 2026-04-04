import React from 'react'
import { PiSquaresFourLight } from "react-icons/pi";
import { sidebarapimethod } from '../constant/web_asseets';

const Sidebar = () => {
  return (
    <div className='fixed h-full  w-[255px] bg-surface-alt'>
        <div>
          <section>
                 <div className='flex items-center p-3 gap-x-2'>
                    <PiSquaresFourLight className='text-primary-50'/>
                    <h1 className='text-primary-500'>API Endpoint</h1>
                 </div> 
          </section>
          <section className='text-xs px-3 text-primary-50/30'>
                 <div>API METHOD</div>
                 <div className='p-2 space-y-1.5'>
                    {
                        sidebarapimethod.map((value)=>(
                            <div key={value.id} className=' text-white'>
                                <h1>{value.name}</h1>
                            </div>
                        ))
                    }
                 </div>
          </section>
        </div>
    </div>
  )
}

export default Sidebar