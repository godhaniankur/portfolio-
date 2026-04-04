import React from 'react'
import {Outlet} from 'react-router-dom'
import Sidebar from '../componets/Sidebar'

const Documentation = () => {
  return (
      <div className='flex h-[calc(100vh-60px)]'>
           <div className='w-[255px] bg-surface-alt z-50'>
                <Sidebar />
           </div>
           <div className='w-full py-2'>
               <Outlet />
               
           </div>
      </div>
  )
}

export default Documentation