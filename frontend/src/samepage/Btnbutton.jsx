import React from 'react'

const Btnbutton = ({text}) => {
  return (
    <div>
        <button className='py-3 px-5 bg-blue-500 text-white rounded-full hover:text-blue-500 transition-all duration-200 ease-linear hover:bg-white shadow-md border '>
             {text}
        </button>
    </div>
  )
}

export default Btnbutton