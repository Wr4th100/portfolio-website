import React from 'react'
import './Projects.css'
import {motion} from 'framer-motion'

function Projects() {
  return (
    <motion.div className='projects_Box'
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
        <h1 className='projects_Box_Header'> Projects </h1>
        <ul className='projects_Box_List'>
            <li className='projects_Box_Text'> Netflix Clone </li>
                <p className='projects_Box_Text_item'> A frontend clone of the popular OTT platform, Netflix. </p>
            <li className='projects_Box_Text'> Learning Tracker </li>
                <p className='projects_Box_Text_item'> A simple Chrome extension for keeping track of resources in the browser. </p>
            <li className='projects_Box_Text'> Personal Website </li>
                <p className='projects_Box_Text_item'> A personal website built using React.js. </p>
        </ul>
    </motion.div>
  )
}

export default Projects