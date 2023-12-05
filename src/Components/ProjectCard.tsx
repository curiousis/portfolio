import React from 'react';
import { motion } from 'framer-motion';

export default function ProjectCard() {
    const boxShadowVariants = {
        initial: {
          boxShadow: "0px 0px 0px rgba(0, 0, 0, 0)",
        },
        hover: {
          boxShadow: "0px 0px 20px rgba(0, 0, 0, 0.2)",
        },
      };
  return (  
      <motion.div
        transition={{ duration: 0.5 }}
        className='p-4 m-3 md:w-1/3 lg:w-auto md:mb-[5%]  flex flex-col sm:w-11/12 h-1/2 rounded-md'
        whileHover={{
          scale: 1.1,
          boxShadow: '0px 0px 20px rgba(255, 69, 0, 1)',
        }}
        style={{boxShadow: '0px 0px 2px rgba(255, 69, 0, 1)',}}
      >
        <h3 className='font-size-2 font-bold text-l text-slate-50'>Weather App</h3>
        <img src="/weather.jpeg" className='w-1/2' alt="an image of a weather app project"/>
        <div className='flex gap-2 mt-4 text-center'>
          <button type='button'className=' bg-cyan-700 text-white px-4 py-2 rounded'>
            Browse App
          </button>
          <button type='button' className='bg-gray-800 text-white px-4 py-2 rounded'>
            View Code
          </button>
        </div>
      </motion.div>
  );
}

