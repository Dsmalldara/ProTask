import { BsDiscord } from "react-icons/bs"
import { BsInstagram } from "react-icons/bs"
import { BsTwitter } from "react-icons/bs"
function Footer() {
  return (
 

        <div className="flex w-full justify-evenly items-center pb-[2rem] pt-[1rem]  md:gap-[4rem] h-[8rem] md:flex-row cursor-pointer  bg-[#dfc2c233]">
        
            <div className="md:text-[2.5rem] text-[1.7rem] font-quicksand text-[#a1a1aa]">
                <h2>ProTask.</h2>
            </div>
            <div className="flex md:flex-row flex-col gap-[0.1rem] md:gap-[0.7rem] ">
                <div className=" font-nunito hover:text-[#b2d386]">
                    <p>Features</p>
                </div>
                <div className=" font-nunito hover:text-[#b2d386]">
                   <p> Solutions</p>
                </div>
                <div className="hover:text-[#b2d386]">
                    <p>Plans & Pricing </p>
                </div>
            </div>
            <div className="md:text-3xl text-1xl flex  items-center gap-[0.6rem] md:gap-[2rem] justify-evenly ">
               <div>
               <BsDiscord className="hover:text-[#b2d386]"/>
               </div>
               <div>
               <BsInstagram className="hover:text-[#b2d386]"/>
               </div>
               <div>
               <BsTwitter className="hover:text-[#b2d386]"/>
               </div>
            </div>
        </div>
 
  )
}

export default Footer