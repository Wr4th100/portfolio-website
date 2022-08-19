import React from 'react'
import './About.css'
import RoshanPic from '../assets/roshanphoto.png'
import {motion} from 'framer-motion'

function About() {
  return (

    
    <motion.div className='about_Box'
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
        <h1 className='about_Box_Header'> About </h1>
        <img src={RoshanPic} alt="PicOfMe" className='about_Box_Pic'/>
        <p className='about_Box_Text' style={{fontWeight: 'bold'}}> Frontend Web Developer. Mobile Developer. CyberSec Nerd. </p>
        <p className='about_Box_Text'> I have a passion for creating software that is intuitive and user friendly. </p>
        <p className='about_Box_Text'> I am a self-taught developer and I am always looking to learn new technologies. </p>
        <p className='about_Box_Text'> I am currently pursuing engineering in Chennai Insitute of Technology. </p>
        <div style={{display: 'flex'}}>
          <p className='about_Box_Text'> Here is my </p>
          <a href='https://docs.google.com/document/d/1aSSwfjcSEyTiER0kkWWL7WUg0dxSSPo1F0r05eI4148/edit?usp=sharing' 
              target='_blank' rel="noopener noreferrer"> Resume. </a>
        </div>
    </motion.div>
  )
}

export default About