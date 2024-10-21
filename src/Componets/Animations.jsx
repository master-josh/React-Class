import React from 'react'
import { motion } from 'framer-motion'

function Animations() {
    return (
        <div className='boxes'>
            <div className='mt-3 gap-2 flex'>
                <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1, }}
                    transition={{ delay: 0.2, duration: 1 }}
                    animate={{}}
                    viewport={{once: true}}
                    className='bg-red-600 py-20 w-52 rounded-lg'></motion.div>
                <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1, }}
                    transition={{ delay: 0.3, duration: 1.2 }}
                    viewport={{once: true}}
                    className='bg-red-600 py-20 w-52 rounded-lg'></motion.div>
                <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1, }}
                    transition={{ delay: 0.4, duration: 1.2 }}
                    viewport={{once: true}}
                    className='bg-red-600 py-20 w-52 rounded-lg'></motion.div>
                <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1, }}
                    transition={{ delay: 0.5, duration: 1.2 }}
                    viewport={{once: true}}
                    className='bg-red-600 py-20 w-52 rounded-lg'></motion.div>
                <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1, }}
                    transition={{ delay: 0.6, duration: 1.2 }}
                    viewport={{once: true}}
                    className='bg-red-600 py-20 w-52 rounded-lg'></motion.div>
                <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1, }}
                    transition={{ delay: 0.7, duration: 1.2 }}
                  viewport={{once: true}}
                    className='bg-red-600 py-20 w-52 rounded-lg'></motion.div>
                             <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1, }}
                    transition={{ delay: 0.7, duration: 1.2 }}
                  viewport={{once: true}}
                    className='bg-red-600 py-20 w-52 rounded-lg'></motion.div>
                             <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1, }}
                    transition={{ delay: 0.7, duration: 1.2 }}
                  viewport={{once: true}}
                    className='bg-red-600 py-20 w-52 rounded-lg'></motion.div>
                             <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1, }}
                    transition={{ delay: 0.7, duration: 1.2 }}
                  viewport={{once: true}}
                    className='bg-red-600 py-20 w-52 rounded-lg'></motion.div>
            </div>
        </div>
    )
}

export default Animations