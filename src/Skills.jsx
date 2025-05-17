import React from 'react'
import './skills.css'
import './new.css'
import { motion } from 'framer-motion';
import SemiDonutChart from './SemiDonutChart';

const Skills = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }} 
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2, duration: 0.5 }}
      viewport={{ margin: "-100px", once: true }}
      className='skills'
    >
      <h2 className='heading1 '>Technical-Skills</h2>
      <h3 className='heading2'>Languages</h3>
      <div className="contents">
        <div className="flex">
          <SemiDonutChart percentage={80} fill="#03B0FD" txt="C++"/>
          <SemiDonutChart percentage={80} fill="#03B0FD" txt="DSA"/>
          <SemiDonutChart percentage={80} fill="#03B0FD" txt="Object-Oriented Programming"/>
        </div>
        <div className="flex">
          <SemiDonutChart percentage={70} fill="#03B0FD" txt="SQL"/>
          <SemiDonutChart percentage={40} fill="#03B0FD" txt="JAVA"/>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 40 }} 
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        viewport={{ margin: "-100px", once: true }}
      >
        <h3 className='heading3'> Experienced </h3>
        <div className="contents">
          <div className="flex">
          <SemiDonutChart percentage={40} fill="#03B0FD" txt="React JS"/>
          <SemiDonutChart percentage={50} fill="#03B0FD" txt="Next JS"/>
          <SemiDonutChart percentage={70} fill="#03B0FD" txt="Cloud Computing"/>         
          <SemiDonutChart percentage={70} fill="#03B0FD" txt="HTML"/>
          <SemiDonutChart percentage={60} fill="#03B0FD" txt="CSS"/>
          <SemiDonutChart percentage={40} fill="#03B0FD" txt="JavaScript"/>
          <SemiDonutChart percentage={50} fill="#03B0FD" txt="Computer Network"/>
          <SemiDonutChart percentage={30} fill="#03B0FD" txt="Express JS"/>
          </div>
          <div className="flex">
            
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default Skills;

