import React, { useState } from 'react'
import {useLocation } from 'react-router-dom'
import { IoReorderThreeSharp } from "react-icons/io5";
import { RxCross2 } from "react-icons/rx";

const Navbar = () => {
    const [scroll,setscroll] = useState(false)
    const [hiddens,sethiddens] = useState('hidden')
    const location = useLocation()

    window.onscroll = () =>{
        setscroll(window.pageYOffset === 0 ? false : true)
        return () => (window.onscroll === null)
    }

    console.log(location)
  return (
    <div className='relative cursor-pointer'>
        <div className={`fixed w-full h-16 md:overflow-hidden flex items-center ${scroll ? "bg-white text-black shadow-md border" : "bg-transparent"} transition-all duration-400 ease-linear z-[9999]`}>
            <header className=' w-9/12 flex mx-auto justify-center items-center '>
                <div className='flex justify-between w-full'>
                      <div className='text-2xl  font-bold'>AG</div>
                      <div className='flex justify-center items-center group'>
                           <span className='hidden max-md:block '><IoReorderThreeSharp size={35}/></span>
                         <div className='max-md:hidden max-md:group-hover:block max-md:text-black'>
                                <ul className='max-md:h-[100vh] max-md:w-full flex max-md:flex-col max-md:justify-around max-md:items-center
                                 max-md:absolute max-md:top-0 max-md:right-0 max-md:left-0 max-md:bg-white gap-x-5 font-semibol transition-all duration-200 ease-in-out  text-md capitalize '>
                                        <li className={`${location.hash === "#home" && "text-blue-500"}`}><a href="#home">Home</a></li>
                                        <li className={`${location.hash === "#about" && "text-blue-500"}`}><a href="#about">About</a></li>
                                        <li className={`${location.hash === "#skills" && "text-blue-500"}`}><a href='#skills'>Skill</a></li>
                                        <li className={`${location.hash === "#Project" && "text-blue-500"}`}><a href="#Project">Project</a></li>
                                        <li><a href="#exprince">Resume</a></li>
                                        <li>Blog</li>
                                        <li className={`${location.hash === "#contact" && "text-blue-500"} `}><a href="#contact">Contact</a></li>
                                        <p className='md:hidden max-md:block border max-md:flex items-center justify-center shadow-lg w-12 h-12 rounded-full' onClick={()=>window.location.reload()}><RxCross2 size={20}/></p>
                                </ul>
                         </div>
                      </div>
                </div>
            </header>
        </div>
    </div>
  )
}

export default Navbar