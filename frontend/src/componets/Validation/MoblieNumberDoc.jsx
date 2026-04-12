import React from 'react'
import { useContext } from 'react'
import { VideoContext } from '../../ContextProvider/VideoContext'
import MoblieRestriction from '../../assets/video/Moblie-validation.mp4'
import { titleclass } from '../../constant/theme_asseets'
import AdBanner from '../../ads/AdBanner'
import StudentForm from '../../Test/StudentForm'

const MoblieNumberDoc = () => {
    const openVideo = useContext(VideoContext);
    return (
        <div className=' w-8/12 mx-auto py-3'>
            <h1 className={`${titleclass} `}>Restrict input field to digits only on mobile</h1>
            <p className='text-base my-2'>This example shows how to restrict an input field so that users can enter only numeric digits (0–9) on mobile and desktop devices. Using the onInput event in React, any non-numeric characters typed by the user are automatically removed.</p>
             <button type='button' className='bg-primary-500 cursor-pointer p-2 rounded-md text-white text-sm' onClick={()=>openVideo(MoblieRestriction)}>
                 Output
             </button>
             <AdBanner />

        </div>
    )
}

export default MoblieNumberDoc