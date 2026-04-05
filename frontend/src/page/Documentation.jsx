import React from 'react'
import {Outlet} from 'react-router-dom'
import Sidebar from '../componets/Sidebar'

const Documentation = () => {
  return (
      <div className='flex h-[calc(100vh-100px)]'>
           
                <Sidebar />
           
           <div className='flex-1 h-full lg:pl-[255px] w-full overflow-y-auto bg-white border-l border-gray-200'>
               <Outlet />
           </div>
      </div>
  )
}

export default Documentation