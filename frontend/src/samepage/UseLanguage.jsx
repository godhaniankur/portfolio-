import React from 'react'
import { RiReactjsFill } from "react-icons/ri";
import { BiLogoMongodb } from "react-icons/bi";
import { SiExpress } from "react-icons/si";
import { DiNodejs } from "react-icons/di";
import { RiVercelFill } from "react-icons/ri";
import { SiRender } from "react-icons/si";
import { VscGithubInverted } from "react-icons/vsc";
import { SiRazorpay } from "react-icons/si";
import { SiTailwindcss } from "react-icons/si";


const UseLanguage = () => {
  return (
    <div className='w-full grid grid-cols-7 gap-8 mx-auto'>
        

        <div></div>
        <div className=" p-4 w-fit bg-white rounded-full border"><VscGithubInverted size={30}/></div>
        <div></div>
        <div className=" p-4 w-fit bg-white rounded-full border"><RiVercelFill size={30}/></div>
        <div></div>
        <div className=" p-4 w-fit bg-white rounded-full border"><BiLogoMongodb size={30}/></div>
        <div></div>

        <div></div>
        <div></div>
        <div className=" p-4 w-fit bg-white rounded-full border"><SiExpress size={30}/></div>
        <div></div>
        <div className=" p-4 w-fit bg-white rounded-full border"><RiReactjsFill size={30}/></div>
        <div></div>
        <div className=" p-4 w-fit bg-white rounded-full border"><DiNodejs size={30}/></div>

        <div></div>
        <div className=" p-4 w-fit bg-white rounded-full border"><SiRender size={30}/></div>
        <div></div>
        <div className=" p-4 w-fit bg-white rounded-full border"><SiRazorpay size={30}/></div>
        <div></div>
        <div className=" p-4 w-fit bg-white rounded-full border"><SiTailwindcss size={30}/></div>
        <div></div>


    </div>
  )
}

export default UseLanguage