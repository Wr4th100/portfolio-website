import React, {useState} from 'react'
import './Welcome.css'
import About from './About'
import Projects from './Projects'
import Socials from './Socials'
import Blog from './Blog'
import {motion} from 'framer-motion'
import Skills from './Skills'

function Box() {

  const [about, showAbout] = useState(false)
  const [projects, showProjects] = useState(false)
  const [socials, showSocials] = useState(false)
  const [blog, showBlog] = useState(false)
  const [skills, showSkills] = useState(false)
  
  const aboutSec = () => {
    showProjects(false)
    showSocials(false)
    showBlog(false)
    showSkills(false)
    console.log('about')
    showAbout(true)
  }

  const projectsSec = () => {
    showAbout(false)
    showSocials(false)
    showBlog(false)
    showSkills(false)
    console.log('projects')
    showProjects(true)
  }

  const socialsSec = () => {
    showAbout(false)
    showProjects(false)
    showBlog(false)
    showSkills(false)
    console.log('socials')
    showSocials(true)
  }

  const blogSec = () => {
    showAbout(false)
    showProjects(false)
    showSocials(false)
    showSkills(false)
    console.log('blog')
    showBlog(true)
  }

  const skillsSec = () => {
    showAbout(false)
    showProjects(false)
    showSocials(false)
    showBlog(false)
    console.log('skills')
    showSkills(true)
  }

  return (
    <motion.div>
      <motion.div 
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
        className='welcome_Box' 
        >
          <p className='welcome_Box_Header'> Welcome </p>
          <motion.p className='welcome_Box_Text' 
            onClick={aboutSec} 
            whileHover={{ scale: [null, 1.1, 1.07], color: '#DEAD4F'  }} 
            transition={{duration: 0.4, times: [0, 0.2, 0.4]}} 
          >
            ◈ About
          </motion.p>
          <motion.p className='welcome_Box_Text' 
            onClick={projectsSec} 
            whileHover={{ scale: [null, 1.1, 1.07] , color: '#DEAD4F'}} 
            transition={{duration: 0.5, times: [0, 0.2, 0.4]}}
          >
            ◈ Projects
          </motion.p>
          <motion.p className='welcome_Box_Text'
            onClick={socialsSec} 
            whileHover={{ scale: [null, 1.1, 1.07] , color: '#DEAD4F'}} 
            transition={{duration: 0.5, times: [0, 0.2, 0.4]}}
          >
            ◈ Socials
          </motion.p>
          <motion.p className='welcome_Box_Text' 
            onClick={blogSec} 
            whileHover={{ scale: [null, 1.1, 1.07] , color: '#DEAD4F'}} 
            transition={{duration: 0.5, times: [0, 0.2, 0.4]}}
          >
            ◈ Blog 
          </motion.p>  
          <motion.p className='welcome_Box_Text' 
            onClick={skillsSec} 
            whileHover={{ scale: [null, 1.1, 1.07] , color: '#DEAD4F'}} 
            transition={{duration: 0.5, times: [0, 0.2, 0.4]}}
          >
            ◈ Skills 
          </motion.p> 
      </motion.div>
      {about ? <About /> : null}
      {projects ? <Projects /> : null}
      {socials ? <Socials /> : null}
      {blog ? <Blog /> : null}
      {skills ? <Skills /> : null}
    </motion.div>
  )
}

export default Box