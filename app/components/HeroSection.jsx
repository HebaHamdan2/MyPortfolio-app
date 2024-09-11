"use client"
import React from 'react'
import Image from 'next/image';
import { TypeAnimation } from 'react-type-animation';
import {motion} from "framer-motion"
const HeroSection = () => {
  return <section className='lg:py-16'>
  <div className="grid grid-cols-1 sm:grid-cols-12">
 <motion.div 
 initial={{opacity:0 ,scale:0.5}}
  animate={{opacity:1 , scale:1}}
   transition={{duration:0.5}}
  className="col-span-7 place-self-center text-center sm:text-left justify-self-start">
 <div>
 <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-6xl lg:leading-normal font-extrabold">
  <span className='text-transparent bg-clip-text bg-gradient-to-r from-pink-300 to-purple-200 '>Hello, I&apos;m{" "}</span>
<br />
  <TypeAnimation
      sequence={[
        'Heba Hamdan',
        1000,
        'Software Engineer',
        1000, // wait 1s before replacing "Mice" with "Hamsters"
        'Frontend Developer',
        1000,
        'Backend Developer',
        1000,
        'Problem Solver',
        
      ]}
      wrapper="span"
      speed={50}
      repeat={Infinity}
    />
    </h1>
 </div>

   
    <div>
    <button className='px-6 py-3  w-fit rounded-full mr-4 bg-gradient-to-br from-pink-300 via-pink-400  to-pink-500 hover:bg-slate-200 text-white'>Hire Me</button>
       <button className='px-1 py-1 w-fit rounded-full bg-gradient-to-br from-pink-300 via-pink-400   hover:bg-slate-800 text-white mt-3'>
      <span className='block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2'> Download CV</span>
        </button>
    </div>
 </motion.div>
<motion.div 
 initial={{opacity:0 ,scale:0.5}}
  animate={{opacity:1 , scale:1}}
   transition={{duration:0.5}} className="col-span-5 place-self-center mt-4 lg:mt-0">
  <div className="rounded-full bg-[#181818] w-[200px] h-[200px] relative lg:h-[400px] lg:w-[400px]">
    <Image src="/images/heba.png" alt="heba hamdan" className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 w-full h-auto" 
           width="0"
           height="0"
           sizes="95vw"
    priority />
  </div>
  </motion.div>
  </div>
 
  </section>

}

export default HeroSection