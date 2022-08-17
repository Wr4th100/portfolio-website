import React from 'react'
import {motion} from 'framer-motion'
import './Skills.css'
import Javascript from '../assets/js-brands.svg'
import ReactLogo from '../assets/react-brands.svg'
import HTML from '../assets/html5-brands.svg'
import CSS from '../assets/css3-brands.svg'
import Python from '../assets/python-brands.svg'
import UI from '../assets/uikit-brands.svg'


function Skills() {
  return (
    <motion.div className='skills_Box'
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
      <h1 className='skills_Box_Header'> Skills </h1>
      <div className='skills_Box_Icons'> 
        <div className='skills_Box_Icon'>
          <img src={ReactLogo} alt="React" className='skills_Box_Pic'/>
          <p className='skills_Box_Text' >React</p>
        </div>
        
        <div className='skills_Box_Icon'>
          <img src={Python} alt="Python" className='skills_Box_Pic'/>
          <p className='skills_Box_Text' >Python</p>
        </div>

      </div>
      <div className='skills_Box_Icons'> 
        <div className='skills_Box_Icon'>
          <img src={HTML} alt="Html" className='skills_Box_Pic'/>
          <p className='skills_Box_Text' >HTML</p>
        </div>
        
        <div className='skills_Box_Icon'>
          <img src={CSS} alt="CSS" className='skills_Box_Pic'/>
          <p className='skills_Box_Text' >CSS</p>
        </div>
      </div>
      <div className='skills_Box_Icons'> 
        <div className='skills_Box_Icon'>
          <img src={Javascript} alt="Javascript" className='skills_Box_Pic'/>
          <p className='skills_Box_Text' >JavaScript</p>
        </div>
        
        <div className='skills_Box_Icon'>
          <img src={UI} alt="UI" className='skills_Box_Pic'/>
          <p className='skills_Box_Text' >UI/UX</p>
      </div>

      </div>
        
    </motion.div>
  )
}

export default Skills