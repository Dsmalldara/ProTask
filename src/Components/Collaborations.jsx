import collab0 from "../Components/Head/Images/collab0.jpg";
import collab1 from "../Components/Head/Images/collab1.jpg";
import { motion } from "framer-motion";
import{PiArrowSquareUpRightFill} from 'react-icons/pi'
function Collaborations() {
  return (
    <div>
      <div className=" flex-wrap  mx-[2rem] w-full flex justify-center items-center">
        <h1 className="text-3xl items-center text-center justify-center mb-4  w-4/5">
          Unified Collaboration Hub for Your Team
        </h1>
        <p className="flex items-center justify-center text-center w-4/6 ">
          Bring your team together in a collaborative workspace designed to help
          everyone do their best work. Elevate project success through shared
          workspaces, streamlined feedback, and synchronized project planning
          tools.
        </p>
      </div>
      <div className="flex gap-[4%] w-full ml-[1rem] mr-[1rem] mt-[2rem] justify-center items-center cursor-pointer">
        <motion.div
          className="w-[32%] h-[20rem]"
          initial={{ filter: "blur(5px)", x: "-2rem" }}
          whileInView={{ filter: "blur(0)", x: 0 }}
          transition={{ duration: 1 }}
          whileHover={{scale:1.1}}
        >
          <img
            src={collab0}
            alt=""
            className="w-full h-full object-cover rounded shadow-md"
          />
        </motion.div>
        <motion.div
          className="w-[54%] h-[20rem] mr-[0.5rem]"
          initial={{ filter: "blur(5px)", x: "2rem" }}
          whileInView={{ filter: "blur(0)", x: 0 }}
          transition={{ duration: 1 }}
          whileHover={{scale:1.1}}
        >
          <img
            src={collab1}
            alt=""
            className="w-full h-full object-cover rounded shadow-md  "
          />
        </motion.div>
      </div>
      <div className="flex items-center justify-evenly w-full mt-[3rem] pl-[1.5rem]">
        <div className="flex flex-col">
            <h1 className="text-3xl  flex md:hidden  mt-[1rem] mb-[1rem] items-center justify-center">Project Scalability</h1>
          <div className="flex w-[92%] items-center justify-evenly px-[1rem] md:px-0">
            <div className="w-[30%] hidden md:flex ">
              <h1>Project Scalability</h1>
            </div>
            <div className="md:w-[30%] w-full flex flex-wrap">
              <p>
                Our project management tools are designed to seamlessly
                accommodate projects of all sizes, ensuring your workflows
                remain efficient and effective as your organization expands.
              </p>
            </div>
            <div className="text-3xl md:px-0 px-[1rem]">
                <PiArrowSquareUpRightFill />
            </div>
          </div>
            <div>
       <h1 className="text-3xl font-bold flex md:hidden  mt-[1rem] mb-[0.1rem] items-center justify-center">Simplify Workload</h1>
          
          <div className="flex w-[92%] items-center justify-evenly mt-[1.5rem]">
          <div  className="hidden md:flex ">
          <h1>Simplify Workload</h1>
          </div>
          <div className="md:w-[30%] w-[92%] flex flex-wrap md:px-0 px-[1rem]">
            <p>
                Project management made simple.
                Our integrated platform simplifies even the most intricate project challenges.
                From communication to resource allocation.
            </p>
          </div>
          <div className="text-3xl md:px-0 px-[1rem] ">
          <PiArrowSquareUpRightFill />
          </div>
          </div>
          </div>
          <div>
          <h1 className="text-3xl  flex md:hidden  mt-[1rem] mb-[0.3rem] items-center justify-center">Streamline Work</h1>
          
          <div className="flex w-[92%] items-center justify-evenly mt-[2rem] ">
          <div className="hidden md:flex ">
            <h1>Streamline Work</h1>
          </div>
            <div className="md:w-[30%] w-[full] flex flex-wrap ml-[1rem]">
                <p>
                    Our project management tools are designed to seamlessly
                    accommodate projects of all sizes, ensuring your workflows
                    remain efficient and effective as your organization expands.
                </p>
          </div>
            <div className="text-3xl lg:ml-[1rem]">
            <PiArrowSquareUpRightFill />
            </div>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Collaborations;
