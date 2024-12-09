import React from 'react'
import { LiaStreetViewSolid } from "react-icons/lia";
import { GrProjects } from "react-icons/gr";
import { PiCertificateFill } from "react-icons/pi";
import { RiCustomerService2Line } from "react-icons/ri";

const Success = () => {
  return (
    <div className='w-full mt-20 mb-20'>    
        <div className=' bg-fixed bg-relation bg-cover h-[18rem] flex items-center justify-center'>
            <div className='w-9/12 flex justify-around items-center mx-auto backdrop-opacity-20	backdrop-invert p-5 rounded-md'>
                <div className='flex flex-col justify-center items-center gap-y-1.5'>
                    <span><LiaStreetViewSolid size={50}/></span>
                    <p className='text-4xl font-bold'>0</p>
                    <p className='text-2xl'>Happy Clients</p>
                </div>
                <div className='border h-28'></div>
                <div className='flex flex-col justify-center items-center gap-y-1.5'>
                    <span><GrProjects size={40}/></span>
                    <p className='text-4xl font-bold'>5</p>
                    <p className='text-2xl'>Successul Projects</p>
                </div>
                <div className='border h-28'></div>
                <div className='flex flex-col justify-center items-center gap-y-1.5'>
                    <span><PiCertificateFill size={40}/></span>
                    <p className='text-4xl font-bold'>5</p>
                    <p className='text-2xl'>Awards Received</p>
                </div>
                <div className='border h-28'></div>
                <div className='flex flex-col justify-center items-center gap-y-1.5'>
                    <span><RiCustomerService2Line size={40}/></span>
                    <p className='text-4xl font-bold'>0</p>
                    <p className='text-2xl'>Customer</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Success