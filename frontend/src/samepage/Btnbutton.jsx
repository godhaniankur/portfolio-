import React from 'react'

const Btnbutton = ({text}) => {
  return (
    <div>
        <button className='p-3 bg-blue-400 text-white rounded-lg hover:text-blue-500 transition-all duration-200 ease-linear hover:bg-white shadow-md border '>
             {text}
        </button>
    </div>
  )
}

export default Btnbutton