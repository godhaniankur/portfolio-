import React from 'react';
import { Eductions, experience } from '../Data/serivedata';

const EducationFlow = () => {
    return (
        <div className="w-full mt-10">
            <div className="w-9/12 mx-auto  p-3">
                <div className=' mb-10'>
                    <h1 className=' text-2xl text-gray-800 underline underline-offset-8'>Eduction Details</h1>
                </div>
                <div className="flex justify-between items-center text-black mb-10">
                    {/* Education Section */}
                    <div className="flex flex-col gap-y-10 w-full">
                        {Eductions.map((item, index) => (
                            <div key={index} className="flex flex-col gap-y-3 w-full">
                                <div className="flex items-center gap-x-3">
                                    <span className="flex items-center justify-center w-16 h-16 rounded-full bg-blue-800">
                                        <item.icons size={35} color="white" />
                                    </span>
                                    <div className="flex flex-col">
                                        <p className="font-bold text-blue-800">{item.year}</p>
                                        <span className="text-gray-800 font-semibold">{item.title}</span>
                                    </div>
                                </div>
                                <ul className="mx-[80px] text-gray-700 list-disc">
                                    <li>{item.dec1}</li>
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
                <hr />
            <div>
                <div className=' mb-10 mt-10'>
                    <h1 className=' text-2xl text-gray-800 underline underline-offset-8'>Experience Details</h1>
                </div>
                <div className="flex justify-between items-center text-black">
                    {/* Education Section */}
                    <div className="flex flex-col gap-y-10 w-full">
                        {experience.map((item, index) => (
                            <div key={index} className="flex flex-col gap-y-3 w-full">
                                <div className="flex items-center gap-x-3">
                                    <span className="flex items-center justify-center w-16 h-16 rounded-full bg-blue-800">
                                        <item.icons size={35} color="white" />
                                    </span>
                                    <div className="flex flex-col">
                                        <p className="font-bold text-blue-800">{item.year}</p>
                                        <span className="text-gray-800 font-semibold">{item.title}</span>
                                    </div>
                                </div>
                                <ul className="mx-[80px] text-gray-700 list-disc">
                                    <li>{item.dec1}</li>
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
                </div>
            </div>
        </div>
    );
};

export default EducationFlow;
