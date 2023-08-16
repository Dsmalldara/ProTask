import img1 from './Images/img1.jpg'
import {BsFillArrowRightCircleFill} from 'react-icons/bs'
import {BiSolidCircle} from 'react-icons/bi'
import Cta from '../CTA/CTA'
import { motion } from 'framer-motion'
import { animationVariants } from './styles/Variants'
import Benefits from '../Benefits'
import BlueRegion from '../../BlueRegion'
import Collaborations from '../Collaborations'
import BlueRegion2 from '../CTA/BlueRegion2'
import Footer from './Footer'
function HomePage() {
  return (
    <div className=''>
  <div className="flex flex-col md:flex-row">
 <div className='md:w-[60%] flex-shrink-0'>
     <div className="header mt-10   text-[#d4d4d8] flex-wrap  md:text-[1.7rem] text-[1.4rem] lg:text-[2.3rem] md:items-start md:justify-start ">
      <h1 className="text-center lg:leading-[6rem]">
        Manage Your 
        </h1>
        <h1 className="text-center lg:leading-[6rem]">
         Big Projects.
        </h1>
      

    </div>
    <div className="content1 flex flex-col items-center justify-center  ml-6 md:ml-3 lg:ml-4 pl-[1rem]  text-[#ececcf] text-[1rem] font-nunito font-extrabold mt-10 flex-wrap ">
      <h3 className="flex ">
    Innovative Project Management Solutions for Modern Teams:
    <br /> Unleash Your Creativity, Empower Your Vision,
    <br /> and Deliver Results.


      </h3>
      </div>
 </div>
 <div className=" imgblend  hidden  md:flex justify-center items-center md:items-end  md:mt-[1rem] overflow-visible bg-[#1a1818] shadow-md">
  <img src={img1} alt="Your Image" className=" opacity-90 shadow-2xl mix-blend-normal  bg-[#1E1E1E] blur-[0.3px] w-[30rem] 
  h-[25rem] md:rounded-[0.3rem]  "/>
  </div>
 </div>
 <div className='flex  justify-center mt-[3rem] items-center space-x-10'>


 <div className='arrow mt-5 pt-3 md:ml-[-2rem] md:mr-[8rem]  md:text-2xl flex flex-col items-center justify-center md:flex md:flex-col md:items-start md:justify-start    font-bold'>
    <h3>
      Get Started
      <span>
        <BsFillArrowRightCircleFill className='inline-block ml-1 text-blue-500  text-[2.5rem] '/>
      </span>
    </h3>
  </div>
  <div className='circle h-[5rem] w-[5.7rem] rounded-[100%] bg-blue-500 relative'

  >
    <BiSolidCircle className='absolute top-[34%] left-[35%] text-3xl'/>
    <div className='circle-text'>
    
        </div>
  </div>
  </div>
  <motion.div className='w-[100%] h-[9rem] flex items-center justify-center space-x-[4rem]  pl-[0.7rem] text-[#e6d0d0] md:space-x-[6rem]  md:px-[3rem] mt-[4.2rem]   bg-[#5a595933] md:mt-5 mb-5'
  variants={animationVariants}
  initial='hidden'
  whileInView='visible'
  >
  <div className='flex flex-col space-y-2 ml-[0.7rem]'>
       <span>
       <h1 className='flex text-[0.9rem] md:text-[2rem]  font-bold'>49K+</h1>
       </span>
       <span>
        <p className='text-[0.9rem] '>Users</p>
       </span>
      </div>
      <div className='flex flex-col space-y-2'>
        <span>
      <h1 className=' text-[0.9rem] md:text-[2rem] font-bold'>2.3K+</h1>
       </span>
       <span>
        <p className='text-[0.9rem]'>Users</p>
        </span>
</div>
<div className='flex flex-col space-y-2'>
<span>
      <h1 className='flex text-[0.9rem] md:text-[2rem]  font-bold'>198+</h1>
       </span>
       <span>
        <p className='text-[0.9rem]'>Users</p>
        </span>
</div>
<div className='flex flex-col space-y-2 mr-[0.5rem]'> 
<span>
      <h1 className='flex text-[0.9rem] md:text-[2rem]  font-bold'>76%</h1>
       </span>
       <span>
        <p className='text-[0.9rem]'>Users</p>
        </span>
</div>
  </motion.div>
    <Cta/>
     <Benefits/>
     <BlueRegion/>
     <Collaborations  />
     <BlueRegion2/>
     <Footer/>
 </div>
  )
}

export default HomePage