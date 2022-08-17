import React from 'react'
import './Socials.css'
import LinkedIn from '../assets/linkedin.svg'
import GitHub from '../assets/github.svg'
import Phone from '../assets/phone.svg'
import Mail from '../assets/mail.svg'
import WhatsApp from '../assets/whatsapp.svg'
import Twitter from '../assets/twitter.svg'
import {motion} from 'framer-motion'

function Socials() {
  return (
    <motion.div className='socials_Box'
    whileHover={{scale: 1.05}}
    initial={{ opacity: 0, scale: 0.5 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{
      duration: 0.6,
      delay: 0.3,
      ease: [0, 0.71, 0.2, 1.01],
      whileHover: {
        duration: 0.1
      }
    }}
    >
        <h1 className='socials_Box_Header'> Socials </h1>
        <div className='socials_Box_Icons'> 
            <a href='https://www.linkedin.com/in/roshan-jagadish-a87386227/' target='_blank' rel="noopener noreferrer" className='socials_Box_Icon'>
                <img src={LinkedIn} alt="LinkedIn" className='socials_Box_Pic'/>
                <p className='socials_Box_Text' >LinkedIn</p>
            </a>
            <a href='https://github.com/Wr4th100' target='_blank' rel="noopener noreferrer" className='socials_Box_Icon'>
                <img src={GitHub} alt="GitHub" className='socials_Box_Pic'/>
                <p className='socials_Box_Text' >GitHub</p>
            </a>
        </div>
        <div className='socials_Box_Icons'>
            <a href='https://wa.me/918667326199' target='_blank' rel="noopener noreferrer" className='socials_Box_Icon'>
                <img src={WhatsApp} alt="WhatsApp" className='socials_Box_Pic'/>
                <p className='socials_Box_Text' >WhatsApp</p>
            </a>
            <a href='https://twitter.com/RoshanJagadish' target='_blank' rel="noopener noreferrer" className='socials_Box_Icon'>
                <img src={Twitter} alt="Twitter" className='socials_Box_Pic'/>
                <p className='socials_Box_Text' >Twitter</p>
            </a>
        </div> 
        <div className='socials_Box_Icons'>
            <a href='tel:+91 8667326199' target='_blank' rel="noopener noreferrer" className='socials_Box_Icon'>
                <img src={Phone} alt="Phone" className='socials_Box_Pic'/>
                <p className='socials_Box_Text' >Phone</p>
            </a>
            <a href='https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=roshanjagadish2003@gmail.com' target='_blank' rel="noopener noreferrer" className='socials_Box_Icon'>
                <img src={Mail} alt="Mail" className='socials_Box_Pic'/> 
                <p className='socials_Box_Text' >Mail</p>
            </a>
        </div>    
    </motion.div>
  )
}

export default Socials