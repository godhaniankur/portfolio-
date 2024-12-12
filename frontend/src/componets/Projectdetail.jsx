import React from 'react'
import { HiCursorClick } from "react-icons/hi";
import { SiAffinitydesigner } from "react-icons/si";
import { MdOutlineDocumentScanner } from "react-icons/md";
import { FiGithub } from "react-icons/fi";
import { RiVideoOnLine } from "react-icons/ri";
import {Link} from 'react-router-dom'
import { useLocation } from 'react-router-dom';
import Detailspro from '../samepage/Detailspro';
import UseLanguage from '../samepage/UseLanguage';

const Projectdetail = () => {
    const location = useLocation();
  return (
    <div className='w-full'>
        <div >
            <div className='w-9/12 flex flex-col justify-center items-center mx-auto mb-16'>
                <div className=' relative flex  flex-col gap-y-10 mt-20 rounded-md border-blue-500'>
                        <div className='w-[350px] h-[180px] border hover:scale-105 hover:z-50 transition-all duration-200 ease-linear overflow-hidden rounded-md border-blue-500'>
                            <img src="https://th.bing.com/th/id/OIP.6L7shpwxVAIr279rA0B1JQHaE7?rs=1&pid=ImgDetMain" alt="" />
                        </div>
                        <div className='absolute w-[350px] h-[180px]  top-28 right-32 hover:scale-105 transition-all duration-200 ease-linear overflow-hidden rounded-md border-blue-500'>
                            <img src="https://wallup.net/wp-content/uploads/2016/02/18/286966-nature-photography.jpg" alt="" />
                        </div>
                        <div className='w-[350px] h-[180px] border  overflow-hidden  hover:scale-105 hover:z-50 transition-all duration-200 ease-linear rounded-md border-blue-500'>
                            <img src="https://wallpaperset.com/w/full/c/9/0/522708.jpg" alt="" />
                        </div>
                </div>
                {/* build a project availble idea!  */}
                <div className='flex flex-col mx-auto mt-20'>
                    <div className='mx-auto text-center space-y-4'>
                        <h1 className='text-4xl text-gray-700 font-bold'>Build accessible Mern stack apps with speed</h1>
                        <p className='text-2xl text-gray-500 '>Build a beautiful, modern website with flexible, fully customizable, atomic MUI components.</p>
                    </div>
                    <div className='grid grid-cols-3 gap-x-10 text-center mt-5'>
                         <div className='flex flex-col gap-y-3 p-5'>
                             <span className='flex items-center mx-auto text-blue-500 rounded-full bg-blue-100 p-4'><HiCursorClick size={30}/></span>
                             <h1 className='text-xl text-gray-900'>Built for developers</h1>
                             <p className='w-[95%] text-gray-500'>theFront is built to make your life easier. Variables, build tooling, documentation, and reusable components.</p>
                         </div>
                         <div className='flex flex-col gap-y-3 p-5'>
                            <span className='flex items-center mx-auto text-blue-500 rounded-full bg-blue-100 p-4'><SiAffinitydesigner size={30}/></span>
                            <h1 className='text-xl text-gray-900'>Designed to be modern</h1>
                            <p className='w-[95%] text-gray-500'>Designed with the latest design trends in mind. theFront feels modern, minimal, and beautiful.</p>
                         </div>
                         <div className='flex flex-col gap-y-3 p-5'>
                                <span className='flex items-center mx-auto text-blue-500 rounded-full bg-blue-100 p-4'><MdOutlineDocumentScanner size={30}/></span>
                                <h1 className='text-xl text-gray-900'>Documentation for everything</h1>
                                <p className='w-[95%] text-gray-500'>We've written extensive documentation for components and tools, so you never have to reverse engineer anything.</p>
                         </div>
                    </div>
                </div>
                <div className='mt-20'>
                    <div className='flex flex-col gap-y-10'>
                        <h1 className='text-4xl text-center font-bold text-gray-700'>Build tools and full documention</h1>
                        <p className='text-lg w-[80%] text-center mx-auto'>Components, plugins, and build tools are all thoroughly documented with live examples and markup for easier use and customization.</p>
                        <div className='flex flex-col w-full text-white bg-blue-950 px-4 py-8 gap-y-24 rounded-md'>
                             <div className=' flex flex-col gap-y-5'>
                                 <p> {">"} $ yarn install</p>
                                 <p>{">"} $ npm install</p>
                                 <span className='text-green-600'>// Everything installed!</span>
                             </div>
                             <div className=' flex flex-col gap-y-5'>
                                <p>{">"}  $ yarn start</p>
                                <p>{">"} $ npm run start</p>
                                <span className='text-green-600'>// LiveReload started. Opening localhost:3000</span>
                             </div>
                        </div>
                        <div className='flex  mx-auto gap-x-10'>
                            <Link to="https://hosting-hotel.vercel.app/">
                            
                                <button className='flex items-center gap-x-3 hover:bg-blue-950 hover:text-white transition-all duration-200 ease-linear py-4 px-5 bg-gray-100 font-semibold text-lg rounded-lg '><RiVideoOnLine size={25}/>View Project</button>
                            </Link>
                            <Link to="https://github.com/godhaniankur/Hotelhub">
                                <button className='flex items-center gap-x-3 py-4 px-5 bg-blue-950 hover:bg-gray-100 hover:text-black transition-all duration-200 ease-linear text-white font-semibold text-lg rounded-lg '><FiGithub size={25}/>Course Code</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
             {/* use language in project  */}
            <div className='w-full'>
                <div className='w-9/12 flex flex-col justify-center items-center mx-auto mb-20'>
                      <UseLanguage/>
                </div>
            </div>
            {/* project key points  */}
            <div className=' bg-white'>
                <div className='w-9/12 flex flex-col justify-center items-center mx-auto'>
                      <Detailspro url={location.pathname}/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Projectdetail