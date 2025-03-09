import React from 'react'
import {motion} from 'framer-motion'
import RootLayouts from './RootLayouts'

const TopLayout = ({bgImg, title, className}) => {
    const variants = {
        hidden: {opacity: 0, y: -800},
        visible: {opacity: 1, y: 0}
      }

  return (
    <motion.div
        className={`w-full h-[30vh] bg-cover bg-no-repeat relative ${className}`}
        style={{backgroundImage: `url(${bgImg})`}}
        initial="hidden"
        animate="visible"
        variants={variants}
        transition={{duration: 0.85, ease: "easeInOut"}}
    >

        <RootLayouts className={'absolute top-0 left-0 w-full h-full pb-10 pt-[9ch] bg-gradient-to-b from-neutral-200/90 via-neutral-500/60 to-neutral-900/70 flex items-center justify-end flex-col gap-3'}>
            <motion.div
                initial={{opacity: 0, y: -800}}
                animate={{opacity: 1, y: 0}}
                exit={{opacity: 0, y: -800}}
                transition={{duration: 1.85, ease: "easeOut"}}
                className='text-5xl text-neutral-500 font-bold'
            >
             {title}
            </motion.div>
        </RootLayouts>

    </motion.div>
  )
}

export default TopLayout