import React from 'react'
import {workson} from '../Data/serivedata'

const Service = () => {
  return (
    <div className='w-full mt-40 bg-gray-50'>
        <div className=''>
            <div className='w-9/12 flex flex-col justify-center items-center mx-auto text-black p-5'>
                <div className='flex flex-col items-center justify-center gap-y-2'>
                    <h3 className='py-1 px-2 text-[10px] font-bold bg-blue-500 rounded-md w-fit text-white'>WHAT WE DO</h3>
                    <h1 className=' text-4xl '>MY SKILS</h1>
                    <p className=' text-sm text-center text-gray-500 w-[60%]'>As a MERN stack developer, I specialize in building dynamic web applications using MongoDB, Express.js, React.js, and Node.js. I excel in creating scalable, responsive, and user-friendly interfaces...</p>
                <span className='border border-blue-800 w-12'></span>
                </div>
                <div className='mt-20'>
                    <div className='grid grid-cols-3 gap-8'>
                        {
                            workson.map((datas)=>(
                                
                                <div className='flex flex-col justify-center items-center p-5 bg-white shadow-sm border border-gray-50 text-center gap-y-5 hover:border-b-2 hover:border-b-blue-500 hover:relative -top-2 transition-all duration-500 ease-in-out group'>
                                    <span><datas.icons size={50} className=' text-blue-500'/></span>
                                    <h1 className=' text-2xl text-gray-900 group-hover:text-blue-500'>{datas.title}</h1>
                                    <p className=' text-gray-500'>{datas.description}</p>
                                    
                                </div>
                                
                            ))
                        }
                        

                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Service