import React from "react";
import { SocialIcon } from 'react-social-icons';
import { motion } from 'framer-motion';

type Props = {}

export default function Header({}: Props) {
  return (
    <header className="sticky top-0 p-5 flex items-start justify-between max-w-7xl mx-auto z-20 xl:items-center">
      <motion.div 
        initial={{
          x: -500,
          opacity: 0,
          scale:0.5
        }}
        transition={{
          duration: 1.5
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1
        }}
        className="flex flex-row items-center">
        {/* Social icons */}
        <SocialIcon 
          url="https://linkedin.com/in/jaketrent" 
          fgColor="gray"
          bgColor="transparent"
         />
        <SocialIcon 
          url="https://www.instagram.com/blackfoxlvs" 
          fgColor="gray"
          bgColor="transparent" 
        />
        <SocialIcon 
          url="https://linkedin.com/in/jaketrent" 
          fgColor="gray"
          bgColor="transparent"
        />
      </motion.div>
      <motion.div 
      initial={{
        x: 500,
        opacity: 0,
        scale:0.5
      }}
      transition={{
        duration: 1
      }}
      animate={{
        x: 0,
        opacity: 1,
        scale: 1
      }}
      className="flex flex-row items-center text-gray-300 cursor-pointer">
        <SocialIcon 
          className="cursor-pointer" 
          fgColor="gray"
          bgColor="transparent" 
          network="email" 
        />
        <p className="uppercase hidden md:inline-flex text-sm">Get In Touch</p>
      </motion.div>
    </header>
  )
}