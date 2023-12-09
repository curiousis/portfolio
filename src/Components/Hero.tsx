'use client'
import React, { useRef } from 'react';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import GitHubIcon from '@mui/icons-material/GitHub';
import { IconButton, Link } from '@mui/material';
import { motion,useScroll,useTransform } from 'framer-motion'; 


export default function Hero() {
const targetRef = useRef<HTMLDivElement>(null)
const {scrollYProgress} = useScroll({
  target: targetRef,
  offset: ['end end', 'end start'],
})
const scale = useTransform(scrollYProgress, [0, .5], [1, .6])
const opacity = useTransform(scrollYProgress, [0, .5], [1, 0])
  return (
    <motion.section
    style={{opacity,scale}}
    transition={{duration:1}}
      ref={targetRef}
      className='w-full h-1/3 flex justify-between items-center'
    >
      <motion.div
        className='w-1/3'
      >
        <img src="/isra.png" alt="photo of israel with a black headsock and a black jacket" />
      </motion.div>
      <motion.div
        initial={{ x: '100%', opacity: 0.5 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className='flex flex-col justify-center items-center w-2/3'
      >
        <h1 className='text-4xl text-slate-50 font-bold'>Curious Programmer</h1>
        <p className='text-xl text-slate-50 w-1/2 py-3'>
          Hi, my name is Israel but you can call me Isra. I am a full-stack web developer.
          Tag along and see what I do.
        </p>
        <div className='flex justify-around w-1/2 items-center p-3'>
          <IconButton>
            <Link href='your-link-to-LinkedIn' target="_blank" rel="noopener noreferrer">
              <LinkedInIcon fontSize='large' color='warning' className='hover:text-cyan-500 cursor-pointer' />
            </Link>
          </IconButton>
          <IconButton>
            <Link href='your-link-to-Instagram' target="_blank" rel="noopener noreferrer">
              <InstagramIcon fontSize='large' color='warning' className='hover:text-cyan-500 cursor-pointer' />
            </Link>
          </IconButton>
          <IconButton>
            <Link href='your-link-to-Twitter' target="_blank" rel="noopener noreferrer">
              <TwitterIcon fontSize='large' color='warning' className='hover:text-cyan-500 cursor-pointer' />
            </Link>
          </IconButton>
          <IconButton>
            <Link href='your-link-to-GitHub' target="_blank" rel="noopener noreferrer">
              <GitHubIcon fontSize='large' color='warning' className='hover:text-cyan-500 cursor-pointer' />
            </Link>
          </IconButton>
        </div>
      </motion.div>
    </motion.section>
  );
}
