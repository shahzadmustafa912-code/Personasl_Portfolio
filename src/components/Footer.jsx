import React from 'react'

const Footer = () => {
  return (
    <footer className='border-t border-dark-400 bg-dark-300 px-6 py-6 text-center text-gray-400'>
      <p>
        &copy; {new Date().getFullYear()} Created by <span className='text-purple'>Muhammad Affaq Mustafa</span>. All rights reserved.
      </p>
    </footer>
  )
}

export default Footer
