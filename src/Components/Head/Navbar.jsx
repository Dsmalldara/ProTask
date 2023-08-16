import { Link } from "react-scroll"
import { BiMenu } from "react-icons/bi"
import  {MdCancel} from 'react-icons/md'
import { useState } from "react"
import { motion } from "framer-motion"
const navLinks=[
    {title: "Features", href: "/", index:1},
    {title: "Pricing", href:"/", index:2 },
    {title: "About Us", href:"/",  index:3},
    {title:"Contacts", href:"/", index:4}
]

function Navbar() {
 const [toggle, setToggle] = useState(false)
 function isToggle(){
    setToggle(!toggle)
 }
  return (
        <header>
                <nav className="flex relative z-30">
                    <ul className="  justify-start gap-10 ml-8 mt-5 hidden md:flex">
                        <li className="text-#aac2b1 font-bold"><Link to="#">Features</Link></li>
                        <li className="text-#feffff font-extralight whitespace-nowrap "><Link to="#">Pricing & plans</Link></li>
                    </ul>
                    <div className=" md:flex w-screen   ml-[-2rem] items-center justify-center">
                        <h1 className="logo text-center font-quicksand text-[#a1a1aa] md:ml-0 ml-[0.4rem]">ProTask.</h1>
                    </div> 
                    <div className="mt-5 pr-10">
                       <h3 className="">
                        English
                       </h3>
                    </div>
                    <motion.div  className="flex md:hidden  items-center justify-center "
                     
                       >
                    
                        <div className=" z-40 text-3xl  mr-[1.3rem] cursor-pointer pr-[1rem]"  onClick={isToggle}>
                                {toggle ? <MdCancel/> : <BiMenu/>}
                        </div>
                        <motion.div className={`${toggle ? "flex" :"hidden"} absolute w-[95%] rounded-md z-100 h-[100vh] gap-[2.4rem]  flex justify-center items-center flex-col px-3 cursor-pointer top-0 right-4 text-3xl  list-none bg-slate-800`}
                    
                       >

                            {
                                navLinks.map((nav)=>{
                                    return(
                                    <div key={nav.index} >
                                        <li href={nav.href}>{nav.title}</li>
                                    </div>
                        
                                    )
                                })
                            }
                        </motion.div>

                    </motion.div>
                    </nav>
        </header>

  )
}

export default Navbar

