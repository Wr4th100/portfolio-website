import React from 'react'
import './Blog.css'
import {motion} from 'framer-motion'

function Blog() {
  return (
    <motion.div className='blog_Box'
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
        <h1 className='blog_Box_Header'> Blog </h1>
        <div className='blog_Box_Text' >
            <p> Coming </p>
            <p> Soon. </p>
        </div>
    </motion.div>
  )
}

export default Blog