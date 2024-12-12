import React from 'react'
import { BikeprojectDetail } from '../Data/serivedata'

const Detailspro = ({url}) => {
  return (
    <div className='grid grid-cols-3 gap-10 p-10 mt-10'>
       {
          "/Hotel" === url && BikeprojectDetail.map((detail)=>(
                <div className='flex flex-col gap-y-5'>
                    <p className='flex items-center gap-x-3 text-lg font-semibold p-5 bg-blue-100 rounded-full '><detail.icons size={30}/><span>{detail.title}</span></p>
                    <p className='px-5'>{detail.decscription}</p>
                </div>
          ))
       }
       {
          "/" === url && BikeprojectDetail.map((detail)=>(
                <div className='flex flex-col gap-y-5'>
                    <p className='flex items-center gap-x-3 text-lg font-semibold p-5 bg-blue-100 rounded-full '><detail.icons size={30}/><span>{detail.title}</span></p>
                    <p className='px-5 text-gray-500'>{detail.decscription}</p>
                </div>
          ))
       }
    </div>
  )
}

export default Detailspro