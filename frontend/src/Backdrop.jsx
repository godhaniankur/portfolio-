import React, { useState } from 'react';
import AdBanner from './ads/AdBanner';

const Backdrop = () => {
  const [showBackdrop, setShowBackdrop] = useState(false);

  const handleClick = () => {
    setShowBackdrop(true);
  };

  return (
    <>
    <div className='flex flex-col items-center justify-center min-h-screen text-center relative'>
      {showBackdrop && (
        <div className='absolute top-0 backdrop-brightness-50  left-0 w-full h-full  flex items-center justify-center z-[999]'>
          <div className="text-white text-center bg-red-500 p-10 rounded-2xl shadow-lg">
            <h1 className='text-4xl mb-4'>Welcome To Backdrop</h1>
            <p className='mb-6'>This is a simple backdrop component.</p>
            <button
              onClick={() => setShowBackdrop(false)}
              className='px-6 py-2 bg-red-500 text-white font-medium rounded-lg hover:bg-red-600 transition'
            >
              Close
            </button>
          </div>
        </div>
      )}

      <div className='z-20 h- flex flex-col items-center justify-center'>
        <h1 className='text-6xl font-bold mb-4'>Welcome to the Backdrop</h1>
        <p className='text-xl mb-6'>This is a simple backdrop component.</p>
        <button
          onClick={handleClick}
          className='px-6 py-2 bg-indigo-500 text-white font-medium rounded-lg hover:bg-indigo-600 transition'
        >
          Show Backdrop
        </button>
      </div>
    
    </div>
    <div className=' border'>

      <AdBanner />
    </div>
    </>
  );
};

export default Backdrop;
