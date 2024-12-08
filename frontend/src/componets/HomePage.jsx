import React, { useEffect, useState } from 'react'
import { FaSquareFacebook } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaSquareGithub } from "react-icons/fa6";
import { FaSquareInstagram } from "react-icons/fa6";
import Navbar from './Navbar'
import { TypeAnimation } from 'react-type-animation';
import About from './About';
import Service from './Service';

const HomePage = () => {
    return (
        <div className='h-screen bg-mainImage bg-cover bg-left text-white'>
            <Navbar />
            <div className='relative w-full h-screen flex items-center justify-center overflow-hidden'>
                <div className='w-9/12 flex flex-col gap-y-5 -mt-20'>
                    <div className='py-2 px-5 border-2 text-lg font-bold rounded-lg bg-transparent border-blue-400 text-white w-fit'>
                        HELLO !
                    </div>
                    <div className=' text-5xl font-bold flex gap-x-4 '>
                        I AM  
                        <TypeAnimation 
                            sequence={[" ANKUR GODHANI",1000,"MERN STACK DEVELOPER",1000]}
                            wrapper='span'
                            speed={20}
                            style={{fontSize:"3rem",display:"flex",fontWeight:"normal"}}
                            repeat={Infinity}
                            
                        />
                    </div>
                    <div className='w-[68%]'>
                        I'm a mern stack Developer with extensive experience for over 1+ years.I am a MERN Stack Developer with expertise in building dynamic and responsive web applications using MongoDB, Express.js, React.js, and Node.js. I specialize in developing intuitive user interfaces, creating robust backend APIs, and managing databases efficiently. My skills in JavaScript enable seamless integration between frontend and backend, ensuring optimal performance.
                    </div>
                    <div>
                        <div className='flex gap-x-5'>
                            <p className='p-3 rounded-full border-2 flex items-center hover:bg-white hover:text-black'><FaSquareFacebook size={25}/></p>
                            <p className='p-3 rounded-full border-2 flex items-center hover:bg-white hover:text-black'><FaLinkedin size={25}/></p>
                            <p className='p-3 rounded-full border-2 flex items-center hover:bg-white hover:text-black'><FaSquareGithub size={25}/></p>
                            <p className='p-3 rounded-full border-2 flex items-center hover:bg-white hover:text-black'><FaSquareInstagram size={25}/></p>
                        </div>
                    </div>
                </div>
            <div className=' absolute left-[-150px]   w-52 h-52 bg-[#b5b6b87c] hover:bg-white transition-colors duration-200 rotate-[45deg] overflow-hidden'></div>
            <div className='absolute right-[-150px]  w-52 h-52 bg-[#b5b6b87c] hover:bg-white transition-colors duration-200 rotate-[45deg] overflow-hidden'></div>
            </div>
            <About/>
            <Service/>
        </div>
    )
}

export default HomePage