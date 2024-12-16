import React from 'react'
import { RiReactjsFill } from "react-icons/ri";
import { BiLogoMongodb } from "react-icons/bi";
import { SiExpress } from "react-icons/si";
import { DiNodejs } from "react-icons/di";
import { RiVercelLine } from "react-icons/ri";
import { SiRender } from "react-icons/si";
import { VscGithubInverted } from "react-icons/vsc";
import { SiRazorpay } from "react-icons/si";
import { SiTailwindcss } from "react-icons/si";


const UseLanguage = () => {
  return (
    <div className=' relative w-full grid grid-cols-7 gap-8 mx-auto '>
        

        <div></div>
        <div className=" p-4 w-fit bg-white rounded-full border group"><VscGithubInverted size={30} color="gray"/><span className='hidden absolute -top-10 -mx-3 group-hover:block px-2 rounded-sm bg-black text-white'>Github</span></div>
        <div></div>
        <div className=" p-4 w-fit bg-white rounded-full border group"><RiVercelLine size={30}/><span className='hidden absolute top-20 -mx-3 group-hover:block px-2 rounded-sm bg-black text-white'>Vercel</span></div>
        <div></div>
        <div className=" p-4 w-fit bg-white rounded-full border group"><BiLogoMongodb size={30} color='green'/><span className='hidden absolute -top-10 -mx-6 group-hover:block px-2 rounded-sm bg-black text-white'>Mongodb</span></div>
        <div></div>

        <div></div>
        <div></div>
        <div className=" p-4 w-fit bg-white rounded-full border group"><SiExpress size={30} /><span className='hidden absolute top-16  -mx-6 group-hover:block px-2 rounded-sm bg-black text-white'>Express Js</span></div>
        <div></div>
        <div className=" p-4 w-fit bg-white rounded-full border text-blue-900 group"><RiReactjsFill size={30}/><span className='hidden absolute bottom-14 -mx-5 group-hover:block px-2 rounded-sm bg-black text-white'>React Js</span></div>
        <div></div>
        <div className=" p-4 w-fit bg-white rounded-full border group"><DiNodejs size={30} color='green'/><span className='hidden absolute top-14 -mx-5 group-hover:block px-2 rounded-sm bg-black text-white'>Node Js</span></div>

        <div></div>
        <div className=" p-4 w-fit bg-white rounded-full border text-gray-100 group"><SiRender size={30}/><span className='hidden absolute bottom-20 -mx-3 group-hover:block px-2 rounded-sm bg-black text-white'>Render</span></div>
        <div></div>
        <div className=" p-4 w-fit bg-white rounded-full border group"><SiRazorpay size={30} color='blue'/><span className='hidden absolute -bottom-10 -mx-5 group-hover:block px-2 rounded-sm bg-black text-white'>Razorpay</span></div>
        <div></div>
        <div className=" p-4 w-fit bg-white rounded-full border text-blue-500 group"><SiTailwindcss size={30}/><span className='hidden absolute bottom-20 -mx-6 group-hover:block px-2 rounded-sm bg-black text-white'>Mongodb</span></div>
        <div></div>


    </div>
  )
}

export default UseLanguage