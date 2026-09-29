import React from 'react'
import { motion } from 'framer-motion'
import { assets } from '../assets/assets'
const Hero = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeInOut' }}
      viewport={{ once: true }}
      id='home'
      className='flex min-h-screen flex-col items-center justify-center bg-linear-to-r from-dark-100 via-dark-300 to-dark-100 px-4 pb-16 pt-28 sm:px-6'
    >
      <div className='container mx-auto flex w-full flex-col items-center justify-between md:flex-row'>
        {/* Left Section */}
        <div className='mb-10 w-full text-left md:mb-0 md:w-1/2'>
          <h1 className='mb-4 text-4xl font-bold text-white sm:text-5xl'>
            Hi, I'm <span className='text-purple-500'>Muhammad Affaq Mustafa</span>
          </h1>
          <h2 className='typewriter mb-6 text-2xl font-semibold sm:text-3xl md:text-4xl'>
            Full Stack Developer
          </h2>
          <p className='text-lg text-gray-300 mb-8'>
            I'm a passionate full stack developer with experience in building modern web applications.
          </p>
          <div className='flex space-x-4'>
            <a href='#projects' className=' bg-purple-500 px-6 py-3 rounded-lg font-medium text-white hover:bg-purple-600 transition duration-300'>
              View My Work
            </a>
            <a href='#contact' className='rounded-lg border border-purple px-6 py-3 font-medium text-white transition duration-300 hover:bg-purple/20'>
              Contact Me
            </a>
          </div>
        </div>
        {/* Right Section */}
        <div className='flex justify-center md:w-1/2'>
          <div className='relative aspect-square w-64 md:w-80'>
            <div className='absolute inset-0 translate-y-5 rounded-full bg-linear-to-r from-purple to-pink opacity-70' />
            <motion.img
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 4, repeat: Infinity, repeatType: 'loop', ease: 'easeInOut' }}
              className='relative z-10 h-full w-full rounded-full object-cover'
              src={assets.profileImg}
              alt='Profile'
            />
          </div>
        </div>
      </div>
    </motion.div>
  )
}
export default Hero
