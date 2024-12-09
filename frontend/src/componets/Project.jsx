import React from 'react'

const Project = () => {
  return (
    <div className='w-full text-black'>
        <div>
            <div className='w-9/12 flex justify-center items-center mx-auto'>
                <div className='flex flex-col items-center justify-center gap-y-2'>
                        <h3 className='py-1 px-2 text-[10px] font-bold bg-blue-500 rounded-md w-fit text-white'>PROJECT</h3>
                        <h1 className=' text-4xl '>MY PROJECT</h1>
                        <p className=' text-sm text-center text-gray-500 w-[60%]'>As a MERN stack developer, I specialize in building dynamic web applications using MongoDB, Express.js, React.js, and Node.js. I excel in creating scalable, responsive, and user-friendly interfaces...</p>
                    <span className='border border-blue-800 w-12'></span>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Project