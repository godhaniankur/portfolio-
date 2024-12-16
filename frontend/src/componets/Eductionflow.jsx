import React from 'react';
import { Eductions, experience } from '../Data/serivedata';
import { motion } from 'motion/react';

const EducationFlow = () => {
    return (
        <div className="w-full mt-10 bg-gray-50">
            <div className="w-9/12 mx-auto  p-3">
                <div className=' mb-10'>
                    <h1 className=' text-2xl text-gray-800 underline underline-offset-8'>Eduction Details</h1>
                </div>
                <div className="flex justify-between items-center text-black mb-10">
                    {/* Education Section */}
                    <div className="flex flex-col gap-y-10 w-full">
                        {Eductions.map((item, index) => (
                            <motion.div key={index} initial={{x:100,opacity:0}} whileInView={{x:0,opacity:1}} transition={{duration:1,delay:[index/10],y:{type:"inertia",duration:0.8}}} className="flex flex-col gap-y-3 w-full">
                                <div className="flex max-md:flex-col max-md:justify-center items-center gap-x-3">
                                    <span className="flex items-center justify-center w-16 h-16 rounded-full bg-blue-800">
                                        <item.icons size={35} color="white" />
                                    </span>
                                    <div className="flex flex-col max-md:justify-center max-md:items-center max-md:text-center">
                                        <p className="font-bold text-blue-800">{item.year}</p>
                                        <span className="text-gray-800 font-semibold max-md:text-sm">{item.title}</span>
                                    </div>
                                </div>
                                <ul className="mx-[80px] max-md:w-full  text-gray-700 list-disc">
                                    <li>{item.dec1}</li>
                                </ul>
                            </motion.div>
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
                            <motion.div initial={{x:100,opacity:0}} whileInView={{x:0,opacity:1}} transition={{duration:1,delay:[index/10],y:{type:"inertia",duration:0.8,bounce:0.2}}} key={index} className="flex flex-col gap-y-3 w-full">
                                <div className="flex max-md:flex-col max-md:justify-center items-center gap-x-3">
                                    <span className="flex items-center justify-center w-16 h-16 rounded-full bg-blue-800">
                                        <item.icons size={35} color="white" />
                                    </span>
                                    <div className="flex flex-col max-md:justify-center max-md:items-center max-md:text-center">
                                        <p className="font-bold text-blue-800">{item.year}</p>
                                        <span className="text-gray-800 max-md:text-sm w-full font-semibold">{item.title}</span>
                                    </div>
                                </div>
                                <ul className="mx-[80px] max-md:w-full max-md:-mx-2 text-gray-700 list-disc">
                                    <li>{item.dec1}</li>
                                </ul>
                            </motion.div>
                        ))}
                    </div>
                </div>
                </div>
            </div>
        </div>
    );
};

export default EducationFlow;
