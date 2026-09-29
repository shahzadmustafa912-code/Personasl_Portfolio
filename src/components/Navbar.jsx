import React, { useState } from 'react'
import { FaBars, FaXmark } from 'react-icons/fa6'

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <nav className='fixed w-full z-50 bg-dark-100/90 backdrop-blur-sm py-3 px-4 shadow-lg sm:px-6 lg:px-8 lg:py-4'>
        <div className='container mx-auto flex items-center justify-between'>
            <div>
                <a href="#" className='text-3xl font-bold text-white'>Muhamad Affaq  
                    <span className='text-purple'>Mustafa</span>
                    <div className='w-4 h-4 bg-purple rounded-full'></div>
                </a>
            </div>
            <div className='hidden md:flex md:space-x-6 lg:space-x-10'>
                <a href="#home" className='nav-link relative inline-block pb-1 text-white/80 transition-colors duration-300 hover:text-purple group'>
                    <span>Home</span>
                </a>
                <a href="#about" className='nav-link relative inline-block pb-1 text-white/80 transition-colors duration-300 hover:text-purple group'>
                    <span>About</span>
                </a>
                <a href="#skills" className='nav-link relative inline-block pb-1 text-white/80 transition-colors duration-300 hover:text-purple group'>
                    <span>Skills</span>
                </a>
                <a href="#projects" className='nav-link relative inline-block pb-1 text-white/80 transition-colors duration-300 hover:text-purple group'>
                    <span>Projects</span>
                </a>
                <a href="#experience" className='nav-link relative inline-block pb-1 text-white/80 transition-colors duration-300 hover:text-purple group'>
                    <span>Experience</span>
                </a>

                <a href="#contact" className='nav-link relative inline-block pb-1 text-white/80 transition-colors duration-300 hover:text-purple group'>
                    <span>Contact</span>
                </a>
            </div>


            {/* Mobile Menu Button */}
            <button
                type='button'
                aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
                aria-expanded={isMenuOpen}
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className='md:hidden text-white text-2xl cursor-pointer'
            >
                {isMenuOpen ? <FaXmark /> : <FaBars />}
            </button>

        </div>

       {/*Mobile  menu */}
       {
        isMenuOpen && (
            <div className='absolute inset-x-4 top-full mt-2 flex max-h-[calc(100dvh-6rem)] flex-col justify-center space-y-4 overflow-y-auto rounded-lg bg-dark-300 p-4 text-center sm:inset-x-6'>
                <a href="#home" className='nav-link relative inline-block pb-1 text-white/80 transition-colors duration-300 hover:text-purple group'>
                    <span>Home</span>
                </a>
                <a href="#about" className='nav-link relative inline-block pb-1 text-white/80 transition-colors duration-300 hover:text-purple group'>
                    <span>About</span>
                </a>
                <a href="#skills" className='nav-link relative inline-block pb-1 text-white/80 transition-colors duration-300 hover:text-purple group'>
                    <span>Skills</span>
                </a>
                <a href="#projects" className='nav-link relative inline-block pb-1 text-white/80 transition-colors duration-300 hover:text-purple group'>
                    <span>Projects</span>
                </a>
                <a href="#experience" className='nav-link relative inline-block pb-1 text-white/80 transition-colors duration-300 hover:text-purple group'>
                    <span>Experience</span>
                </a>

                <a href="#contact" className='nav-link relative inline-block pb-1 text-white/80 transition-colors duration-300 hover:text-purple group'>
                    <span>Contact</span>
                </a>
            </div>
        )
       }

    </nav>
  )
}

export default Navbar
