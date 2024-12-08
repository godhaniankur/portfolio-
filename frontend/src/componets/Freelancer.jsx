import React from 'react'
import Btnbutton from '../samepage/Btnbutton'

const Freelancer = () => {
  return (
    <div className='mt-20'>
        <div className=' bg-fixed bg-cover bg-Freelancer bg-left-top h-[22rem] flex justify-center items-center'>
            <div className='w-9/12 flex flex-col justify-center items-center gap-y-10 backdrop-brightness-100'>
                <h1 className='text-4xl '>I Am Available For Freelancer !</h1>
                <Btnbutton text="Hire Me"/>
            </div>
        </div>
    </div>
  )
}

export default Freelancer