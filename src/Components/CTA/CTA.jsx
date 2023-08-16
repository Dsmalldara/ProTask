import { textVariants } from '../Head/styles/Variants';
import { motion } from 'framer-motion';
function Cta() {
  return (
    <motion.div
    variants={textVariants}
    initial='initial'
    whileInView='visible'
    className='mt-[1rem]'
>
        <motion.div className='flex flex-col items-center justify-center mt-3 md:mt-5 space-y-2 '
        variants={textVariants}
        initial='initial'
        whileInView='visible'
        >
            <h1 className=' font-bold md:text-3xl  text-[1.8rem]'>ProTask Advantages</h1>
            <span><p className='text-[0.7rem]'>Working with us give you alot of advantages such as</p></span>
        </motion.div>
        <div className='flex flex-row md:flex-col  w-[100%] '>

        </div>
    </motion.div>
  )
}

export default Cta;