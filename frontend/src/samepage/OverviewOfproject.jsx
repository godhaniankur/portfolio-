import React from 'react'
import Btnbutton from './Btnbutton'

const OverviewOfproject = () => {
    return (
        <div className=' bg-gradient-to-t to-blue-300 from-white'>
            <div className='flex w-11/12 flex-col mx-auto p-5'>
                <div className='flex justify-between gap-x-5 text-gray-600'>
                    <div className='flex flex-col justify-center gap-y-5'>
                        <h1 className=' text-5xl max-w-xl text-white tracking-wide leading-snug  font-semibold'>Ready to view of overall project</h1>
                        <p className=' max-w-2xl  text-justify'>This project includes a responsive footer component built using React and Tailwind CSS. The design features a grid layout that adjusts dynamically across devices, ensuring a user-friendly experience. It provides links for Solutions, Support, Company, and Legal sections, alongside social media icons using React Icons. The footer’s styling highlights a modern, clean interface with hover effects. Perfect for enhancing the professionalism and usability of any web application.</p>
                        <Btnbutton text="Contact Me"/>
                    </div>
                    <div className=' w-[645px] rounded-md overflow-hidden hover:grayscale transition-all duration-150 ease-linear'>
                        <img src="https://img.freepik.com/free-photo/businessman-provides-information-front-desk-check-procedure-travelling-work-purposes-attend-official-conference-receptionist-greeting-professional-client-lobby_482257-65299.jpg?t=st=1737779731~exp=1737783331~hmac=e6c73205b24e271f1033e86231b4884998ca0481394b9784d2b32702f890a60f&w=996" alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OverviewOfproject