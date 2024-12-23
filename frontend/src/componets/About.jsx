import React from 'react'
import Btnbutton from '../samepage/Btnbutton'
import about from './../srcImage/about.jpeg'
import { FaLocationPin } from "react-icons/fa6";
import { FaCalendar } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import Resume from '../srcImage/Resume.pdf'
import {motion} from 'motion/react'

const About = () => {
    return (
        <div className=' mt-40' id='about'>
            <div className='w-9/12 flex mx-auto'>
                <div className='flex max-md:flex-col justify-between md:justify-center items-center text-black w-full gap-x-10'>
                    <motion.div initial={{x:-100,opacity:0}} whileInView={{x:0,opacity:1}} transition={{delay:0.2,x:{type:"spring",stiffness:60},opacity:{duration:1},ease:"easeIn",duration:2}}  className='p-2 w-fit'>
                        <img src={about} alt="" className=' bg-cover h-[30rem] w-[40rem]' />
                    </motion.div>  
                    <div className='w-full flex flex-col gap-y-5 justify-center text-gray-900'>
                        <div className='flex gap-x-2'>
                            <h1 className='text-2xl font-bold underline underline-offset-[0.5rem]'>About </h1>
                            <span className='text-2xl font-bold'>Me</span>
                        </div>
                        <motion.span initial={{x:100,opacity:0}} whileInView={{x:0,opacity:1}} transition={{delay:1.8,x:{type:"spring",stiffness:60},opacity:{duration:1},ease:"easeIn",duration:1}} className='text-4xl text-blue-700 '>
                            I'm Professional Mern stack Developer having 1+ Years Of Experience.
                        </motion.span>
                        <motion.p initial={{x:100,opacity:0}} whileInView={{x:0,opacity:1}} transition={{delay:1.8,x:{type:"spring",stiffness:60},opacity:{duration:0.6},ease:"easeIn",duration:1}} className=' text-md text-gray-500 '>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, quisquam quas. Blanditiis iusto error quaerat, aut dicta maxime, eius ullam obcaecati voluptatem expedita minus qui aperiam. Facere suscipit consequatur velit provident beatae iusto et ullam possimus eos voluptates libero illo aliquid ut odit ratione neque reprehenderit vel, quidem repellendus unde.
                        </motion.p>
                        <motion.div initial={{x:100,opacity:0}} whileInView={{x:0,opacity:1}} transition={{delay:2,x:{type:"spring",stiffness:60},opacity:{duration:1},ease:"easeIn",duration:1}} className=' grid grid-cols-2 max-md:grid-cols-1 w-full p-2 gap-y-5'>
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
                        </motion.div>
                        <hr />
                        <motion.a initial={{x:100,opacity:0}} whileInView={{x:0,opacity:1}} transition={{delay:2,x:{type:"spring",stiffness:60},opacity:{duration:1},ease:"easeIn",duration:1}} href={Resume} download="Resume"><Btnbutton text="Download Resume"/></motion.a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About