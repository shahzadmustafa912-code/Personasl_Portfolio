import React from 'react'
import { motion 

} from 'framer-motion'
import { aboutInfo, assets } from '../assets/assets'
const About = () => {
  return (
    <motion.div
     initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeInOut' }}
      viewport={{ once: true }}
        id='about'
        className='py-20 bg-dark-200 '
      >
        <div className='container mx-0 px-4 '>
          {/* Heading */}
          <h2 className='text-4xl font-bold text-center mb-4'> About
          <span className='text-purple'>Me</span>
</h2>
<p className='text-gray-400 text-center max-w-2xl mx-auto mb-16'>Get to know more about me and my journey and background.</p>
        </div>

{/* image + my journey*/}
<div className='flex flex-col md:flex-row items-center gap-12'>
  {/* image */}
  <div className='nd:w-1/2 rounded-2xl overflow-hidden'>
  <motion.img
   initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.9, ease: 'easeInOut' }}
      viewport={{ once: false, amount:0.2 }} 
      className='w-full h-full object-cover'
  src={assets.profileImg} alt="Profile Image" />
  </div>
  {/* Text Content */}
  <motion.div className='md:w-1/2'
  initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.9, ease: 'easeInOut' }}
      viewport={{ once: false, amount:0.2 }} 
      classNme='md:w-1/2'
      >
        <div className='rounded-2xl  p-8'>
          <h3 className='text-4xl font-semibold mb-6'>My Journey</h3>
          <p className='text-2xl text-gray-300 mb-12  '>I'm a passionate developer with a love for creating innovative solutions with our  1 Year of experience creating digital solutions for busniesses around the world. My journey started with a basic HTML CSS AND JS websites and has evolved into building   complex web applications with modern frameworks</p>
          <p className='text-2xl'>When I'm not coding, you can find me exploring new technologies or contributing to open-source projects or sharing my knowledge through tech blogs and tutorials. I believe in the power of continuous learning and collaboration.</p>
          {/*Cards */}
          <div className='mt-8 grid grid-cols-1 md:grid-cols-2 gap-6'>
            {
              aboutInfo.map((data, index)=>(
                <div key= {index} className='bg-dark-300 rounded-2xl p-6 transition-transform duration-300 hover:-translate-y-2 cursor-pointer'>
                  <div className='text-purple text-4xl mb-4'>
                    <data.icon />
                  </div>
                  <h3 className='text-xl font-semibold mb-3'>{data.title}</h3>
                  <p className='text-gray-400'>{data.description}</p>
                </div>
              ))
            }
          </div>

        </div>
  </motion.div>
</div>

    </motion.div>
  )
}

export default About
