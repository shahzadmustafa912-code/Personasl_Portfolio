import React from 'react'
import { motion } from "framer-motion";
import { FaEnvelope, FaFacebookF, FaGithub, FaLinkedinIn, FaMapMarkerAlt, FaPhoneAlt, FaWhatsapp } from 'react-icons/fa'

const socialLinks = [
  {
    label: 'GitHub',
    href: 'https://github.com/shahzadmustafa912-code/shahzadmustafa912-code',
    icon: FaGithub,
  },
  {
    label: 'Facebook',
    href: 'https://www.facebook.com/muhammad.affaq.mustafa',
    icon: FaFacebookF,
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/muhammad-affaq-mustafa-0299a02a0?utm_source=share_via&utm_content=profile&utm_medium=member_android',
    icon: FaLinkedinIn,
  },
  {
    label: 'WhatsApp',
    href: 'https://wa.me/923290166799',
    icon: FaWhatsapp,
  },
]

const contactDetails = [
  { label: 'Location', value: 'Pakistan', icon: FaMapMarkerAlt },
  { label: 'Email', value: 'affaqmustafa90@gmail.com', href: 'mailto:affaqmustafa90@gmail.com', icon: FaEnvelope },
  { label: 'Phone', value: '0329 0166799', href: 'tel:+923290166799', icon: FaPhoneAlt },
]

const Contact = () => {
  return (
    <motion.div
      id='contact'
      className='pb-16'
    initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeInOut" }}
      viewport={{ once: false, amount: 0.2 }}
      >
        <div className='container mx-auto px-6'>
            <h2 className='text-3xl font-bold text-center mb-4'>
                Get In
                <span className='text-purple'>Touch</span>
            </h2>
            <p className='text-gray-400 text-center max-w-2xl mx-auto mb-16'>Have a Project in a mind or what to collaborate? Let's talk!
            </p>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto'>
                <div>
                    <form className="space-y-6">
                        <div>
                        <label htmlFor="name" className='block mb-2 text-gray-400'>Your Name</label>
                        <input id='name' name='name' type='text' className='w-full rounded-lg border border-gray-700 bg-dark-300 px-4 py-3 text-white outline-none focus:border-purple' />
                        </div>
                        <div>
                        <label htmlFor="email" className='block mb-2 text-gray-400'>Email Address</label>
                        <input id='email' name='email' type='email' className='w-full rounded-lg border border-gray-700 bg-dark-300 px-4 py-3 text-white outline-none focus:border-purple' />
                        </div>

                        <div>
                        <label htmlFor="message" className='block mb-2 text-gray-400'>Your Message</label>
                        <textarea id='message' name='message' rows='5' className='w-full rounded-lg border border-gray-700 bg-dark-300 px-4 py-3 text-white outline-none focus:border-purple' />
                        </div>
                        <button type='submit' className='w-full px-6 py-3 bg-purple rounded-lg font font-medium hover:bg-purple-700 transition duration-300 cursor-pointer'>
                            Send Message
                        </button>
                    </form>
                </div>
                    <div className='flex items-start lg:justify-center'>
                      <div className='w-full max-w-sm'>
                        <div className='space-y-6 mb-10'>
                          {contactDetails.map(({ label, value, href, icon: Icon }) => {
                            const content = (
                              <>
                                <Icon className='mt-1 shrink-0 text-purple' size={22} aria-hidden='true' />
                                <span>
                                  <strong className='block text-lg text-white'>{label}</strong>
                                  <span className='text-gray-400'>{value}</span>
                                </span>
                              </>
                            )

                            return href ? (
                              <a key={label} href={href} className='flex gap-4 hover:text-purple'>
                                {content}
                              </a>
                            ) : (
                              <div key={label} className='flex gap-4'>
                                {content}
                              </div>
                            )
                          })}
                        </div>
                        <h3 className='text-xl font-semibold text-white mb-4'>Follow Me</h3>
                        <div className='flex flex-wrap gap-4'>
                          {socialLinks.map(({ label, href, icon: Icon }) => (
                            <a
                              key={label}
                              href={href}
                              target='_blank'
                              rel='noreferrer'
                              aria-label={`Open ${label} profile`}
                              className='flex h-12 w-12 items-center justify-center rounded-full bg-dark-300 text-white transition-colors hover:bg-purple hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-purple'
                            >
                              <Icon aria-hidden='true' size={20} />
                            </a>
                          ))}
                        </div>
                      </div>
                    </div>
            </div>
        </div>
    </motion.div>
  )
}

export default Contact
