import React from 'react';
import './why.css';
import Certification from './images/scholarship.png';
import project from './images/project.png';
import Event from './images/events.png';
import leetcode from './images/leetcode.png';
import { motion } from 'framer-motion';

const WhyHireMe = () => {
    return (
        <motion.div
            initial={{
                opacity: 0,
                y: 40
            }}
            whileInView={{
                opacity: 1,
                y: 0
            }}
            transition={{
                delay: 0.2,
                duration: 0.5
            }}
            viewport={{
                once: true
            }}
        >
            <h2 className='heading1'>Why Hire Me?</h2>
            <div className="neww">
                <motion.div
                    initial={{
                        opacity: 0,
                        x: -120
                    }}
                    whileInView={{
                        opacity: 1,
                        x: 0
                    }}
                    transition={{
                        delay: 0.2,
                        duration: 0.5
                    }}
                    viewport={{
                        once: true
                    }}
                    className='modiv'>
                    <div className="flex2">
                        <div className="box">
                            <img src={Certification} alt="" className='why_logo' />
                            <h4 className='mid_text'>10+</h4>
                            <p className='main_text_why'>Certification</p>
                        </div>
                        <div className="box">
                            <img src={project} alt="" className='why_logo' />
                            <h4 className='mid_text'>9+</h4>
                            <p className='main_text_why'>Fully Funtional Projects Completed </p>
                        </div>
                    </div>
                </motion.div>
                <motion.div
                    initial={{
                        opacity: 0,
                        x: 120
                    }}
                    whileInView={{
                        opacity: 1,
                        x: 0
                    }}
                    transition={{
                        delay: 0.2,
                        duration: 0.5
                    }}
                    viewport={{
                        once: true
                    }}
                    className='modiv'>
                    <div className="flex2">
                        <div className="box">
                            <img src={Event} alt="" className='why_logo' />
                            <h4 className='mid_text'>12+</h4>
                            <p className='main_text_why'>Sucessful Event Hosted </p>
                        </div>
                        <div className="box ">
                            <img src={leetcode} alt="" className='why_logo' />
                            <h4 className='mid_text'>150</h4>
                            <p className='main_text_why'>LeetCode Problems Solved</p>
                        </div>
                    </div>
                </motion.div>
            </div>
        </motion.div>
    );
}
export default WhyHireMe;