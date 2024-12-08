import React from 'react'
import Btnbutton from '../samepage/Btnbutton'
import about from './../srcImage/about.jpeg'
import { FaLocationPin } from "react-icons/fa6";
import { FaCalendar } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import Resume from '../srcImage/Resume.pdf'


const About = () => {
    return (
        <div className='mt-40'>
            <div className='w-9/12 flex mx-auto'>
                <div className='flex justify-between items-center text-black w-full gap-x-10'>
                    <div className='p-2 w-fit'>
                        <img src={about} alt="" className=' bg-cover h-[30rem] w-[40rem]' />
                    </div>  
                    <div className='w-full flex flex-col gap-y-5 justify-center text-gray-900'>
                        <div className='flex gap-x-2'>
                            <h1 className='text-2xl font-bold underline underline-offset-[0.5rem]'>About </h1>
                            <span className='text-2xl font-bold'>Me</span>
                        </div>
                        <span className='text-4xl text-blue-700 '>
                            I'm Professional Mern stack Developer having 1+ Years Of Experience.
                        </span>
                        <p className=' text-md text-gray-500 '>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, quisquam quas. Blanditiis iusto error quaerat, aut dicta maxime, eius ullam obcaecati voluptatem expedita minus qui aperiam. Facere suscipit consequatur velit provident beatae iusto et ullam possimus eos voluptates libero illo aliquid ut odit ratione neque reprehenderit vel, quidem repellendus unde.
                        </p>
                        <div className=' grid grid-cols-2 w-full p-2 gap-y-5'>
                             <div className=' flex justify-between items-center'>
                                <p className='flex items-center gap-x-2 w-full'><FaLocationPin/>Location</p>
                                <span className='w-full text-gray-500'>:Gandhinagar</span>
                             </div>
                             <div  className='flex justify-between items-center'>
                                <p className='flex items-center gap-x-2 w-full'><FaCalendar/>Age</p>
                                <span className='w-full text-gray-500'>:20</span>
                             </div>
                             <div  className=' flex justify-between items-center'>
                                <p className='flex items-center gap-x-2 w-full'><FaPhoneAlt/>Phone</p>
                                <span className='w-full text-gray-500'>:+91 63554 34799</span>
                             </div>
                             <div  className=' flex justify-between items-center'>
                                <p className='flex items-center gap-x-2 w-full'><MdEmail/>Email</p>
                                <span className='w-full text-gray-500'>:ankurgodhani218@gmail.com</span>
                             </div>
                        </div>
                        <hr />
                        <a href={Resume} download="Resume"><Btnbutton text="Download Resume"/></a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About