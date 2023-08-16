import { useState } from "react";
import { motion } from "framer-motion";
import { IoMdPeople } from "react-icons/io";
import { BsFillBriefcaseFill } from "react-icons/bs";
import { RiPieChartFill } from "react-icons/ri";

function Benefits() {
  const [activeSegment, setActiveSegment] = useState(1);

  const handleSegmentClick = (segment) => {
    setActiveSegment(segment);
  };

  return (
    <div className="flex md:flex-row flex-col cursor-pointer mt-[1rem] mb-[2rem] justify-center items-center md:gap-[4rem]   space-y-[2rem] md:space-y-3 ">
      <motion.div
        transition={{ duration: 1 }}
        onClick={() => handleSegmentClick(1)}
        className="md:w-[27%] w-[57%] text-[0.8rem] md:text-base md:h-[13.9rem] h-[11rem] rounded-[4px] lg:h-[11.5rem]   bg-[#5a595933]"
        initial={{
          x: "-9rem",
          opacity: 0,
          borderBottom: "2px solid transparent",
        }}
        animate={{
          borderBottom:
            activeSegment === 1 ? "2px solid #3490dc" : "2px solid transparent",
        }}
        whileInView={{ x: 0, opacity: 1 }}
      >
        <div className="flex  flex-col md:mt-[1rem] mt-[0.3rem]">
          <span className="items-center justify-center flex text-3xl">
            <IoMdPeople />
          </span>
          <h3 className="flex font-bold text-[#c5dbdb] justify-center items-center mt-[0.2rem]">
            Help Your Team Succeed
          </h3>
        </div>
        <p className="items-center justify-center lg:mt-5 flex flex-wrap px-4 mt-2 text-[0.8rem] font-light">
          Efficiently manage tasks, track progress, and foster collaboration.
          Empower your team to achieve their best
        </p>
      </motion.div>
      <motion.div
        transition={{ duration: 0.5 }}
        onClick={() => handleSegmentClick(2)}
        className={`md:w-[27%] w-[57%] md:h-[13.9rem] h-[11rem] rounded-[4px] lg:h-[11.5rem]   bg-[#5a595933] ${
          activeSegment === 2 ? "border-b-2 border-blue-500" : ""
        }`}
        initial={{ y: "5rem", opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
      >
        <div className="flex  flex-col md:mt-[1rem] mt-[0.3rem]  ">
          <span className="items-center justify-center flex text-3xl">
            <RiPieChartFill />
          </span>
          <h3 className="flex text-[#c5dbdb] justify-center items-center font-bold mt-[0.2rem]  text-[0.8rem] md:text-base">
            Integrate with Top Work Tools
          </h3>
        </div>
        <div>
          <p className="items-center justify-center flex lg:mt-5 flex-wrap px-4 mt-2 text-[0.8rem] font-light">
            Seamlessly integrate with leading work tools for a streamlined and
            connected project management experience.
          </p>
        </div>
      </motion.div>
      <motion.div
        transition={{ duration: 0.5 }}
        onClick={() => handleSegmentClick(3)}
        className={`md:w-[27%] w-[57%] lg:h-[11.5rem] md:h-[13.9rem]  h-[13rem] rounded-[4px]   bg-[#5a595933] ${
          activeSegment === 3 ? "border-b-2 border-blue-500" : ""
        }`}
        initial={{ opacity: 0, x: "9rem" }}
        whileInView={{ x: 0, opacity: 1 }}
      >
        <div className="flex  flex-col md:mt-[1rem] mt-[0.3rem]">
          <span className="items-center justify-center flex text-3xl">
            <BsFillBriefcaseFill />
          </span>
          <h3 className="flex justify-center text-[#c5dbdb] font-bold items-center text-[0.8rem] md:text-base mt-[0.2rem] ">
            Work Together With Your Best Team
          </h3>
        </div>
        <p className="items-center justify-center lg:mt-5  flex flex-wrap px-4 mt-[0.4rem] text-[0.8rem] font-light">
          Collaborate with your A-team for exceptional project outcomes. Unite
          your top talents, share ideas easily while driving projects to new
          levels.
        </p>
      </motion.div>
    </div>
  );
}

export default Benefits;
