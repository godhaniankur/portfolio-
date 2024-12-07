import React, { useState } from 'react'

const Navbar = () => {
    const [scroll,setscroll] = useState(false)

    window.onscroll = () =>{
        setscroll(window.pageYOffset === 0 ? false : true)
        return () => (window.onscroll === null)
    }
  return (
    <div className=' relative cursor-pointer'>
        <div className={`fixed w-full h-16  flex items-center ${scroll ? "bg-white text-black shadow-md border" : "bg-transparent"} transition-all duration-400 ease-linear z-[9999]`}>
            <header className=' w-9/12 flex mx-auto justify-center items-center'>
                <div className='flex justify-between w-full'>
                      <div className='text-2xl  font-bold'>AG</div>
                      <div>
                          <ul className='flex gap-x-5 font-semibold text-md capitalize'>
                                <li>Home</li>
                                <li>About</li>
                                <li>Service</li>
                                <li>Work</li>
                                <li>Resume</li>
                                <li>Blog</li>
                                <li>Contact</li>
                          </ul>
                      </div>
                </div>
            </header>
        </div>
    </div>
  )
}

export default Navbar