import React from 'react'
import { project } from '../Data/serivedata'
import Btnbutton from "../samepage/Btnbutton"
import { Link } from 'react-router-dom'

const Project = () => {
  return (
    <div className='w-full text-black p-2' id='Project'>
        <div>
            <div className='w-9/12 flex flex-col justify-center items-center mx-auto'>
                <div className='flex flex-col items-center justify-center gap-y-2'>
                        <h3 className='py-1 px-2 text-[10px] font-bold bg-blue-500 rounded-md w-fit text-white'>PROJECT</h3>
                        <h1 className=' text-4xl '>MY PROJECT</h1>
                        <p className=' text-sm text-center text-gray-500 w-[60%] max-md:w-[99%]'>As a MERN stack developer, I specialize in building dynamic web applications using MongoDB, Express.js, React.js, and Node.js. I excel in creating scalable, responsive, and user-friendly interfaces...</p>
                    <span className='border border-blue-800 w-12'></span>
                </div>
                <div className='grid grid-cols-3 max-md:grid-cols-1 gap-8 mt-20 mb-20 bg-white'>
                   {
                      project.map((pro)=>(
                        <div className='shadow-md  rounded-sm'>
                            <div className='h-[250px] overflow-hidden'>
                                <img src={pro.image} className='h-[250px] bg-cover' />
                            </div>
                            <div className='flex flex-col gap-y-2 mt-5 px-5'>
                                <p className='text-blue-500 text-xs px-1'>{pro.date}</p>
                                <h1 className=' text-2xl text-gray-800'>{pro.title}</h1>
                                <p className='text-gray-500'>{pro.dcescription}</p>
                                <Link to={pro.Link} className='mt-5 mb-5'>
                                    <Btnbutton text="Read More"/>
                                </Link>
                            </div>
                        </div>
                      ))
                   }
                </div>
            </div>
        </div>
    </div>
  )
}

export default Project