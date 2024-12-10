import React from 'react'
import Btnbutton from '../samepage/Btnbutton'
import { IoHome } from "react-icons/io5";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Contact = () => {
  return (
    <div className='w-full text-black bg-white' id='contact'>
        <div className='py-10'>
            <div className='w-9/12 mx-auto flex flex-col justify-center items-center'>
                <div className='flex flex-col items-center justify-center gap-y-2'>
                            <h3 className='py-1 px-2 text-[10px] font-bold bg-blue-500 rounded-md w-fit text-white'>TOUCH</h3>
                            <h1 className=' text-4xl '>Get In Toch</h1>
                            <p className=' text-sm text-center text-gray-500 w-[60%] max-md:w-[99%]'>As a MERN stack developer, I specialize in building dynamic web applications using MongoDB, Express.js, React.js, and Node.js. I excel in creating scalable, responsive, and user-friendly interfaces...</p>
                        <span className='border border-blue-800 w-12'></span>
                </div>
                <div className='flex max-md:flex-col max-md:gap-y-14 justify-between w-full mt-20 gap-x-14'>
                        <div className='w-full'>
                             <div className='flex flex-col gap-y-3 w-full'>
                                <input type="text" placeholder='Name *' className='w-full p-2 border rounded-md outline-none'/>
                                <div className='flex max-md:flex-col gap-y-3 gap-x-3 w-full'>
                                    <input type="email" placeholder='Email *'  className='w-full p-2 border rounded-md outline-none'/>
                                    <input type="text" placeholder='Subject *' className='w-full p-2 border rounded-md outline-none'/>
                                </div>
                                <textarea rows={10} placeholder='Your Message Here'  className='w-full p-2 border rounded-md outline-none'></textarea>
                                <Btnbutton text="Send Message" className="w-full" />
                             </div>
                        </div>
                        <div className='w-[80%] max-md:w-full'>
                            <div className='flex flex-col w-full p-5 max-md:p-3 gap-y-10 shadow-md border rounded-md'>
                                <div className='flex gap-x-5'>
                                     <p ><IoHome size={30} color='blue'/></p>
                                     <div className='flex flex-col gap-y-3'>
                                        <p className=' text-lg font-semibold'>Home</p>
                                        <span >Sector - 15, Near KH - 5, Gandhinagar-382016, Gujarat, India</span>
                                     </div>
                                </div>
                                <div className='flex gap-x-5'>
                                     <p ><FaPhoneAlt size={30} color='blue'/></p>
                                     <div className='flex flex-col gap-y-3'>
                                        <p className=' text-lg font-semibold'>Phone</p>
                                        <span>+91 63554 34799</span>
                                     </div>
                                </div>
                                <div className='flex gap-x-5'>
                                     <p ><MdEmail size={30} color='blue'/></p>
                                     <div className='flex flex-col gap-y-3'>
                                        <p className=' text-lg font-semibold'>Email</p>
                                        <span>ankurgodhani218@gmail.com</span>
                                     </div>
                                </div>
                            </div>
                        </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Contact