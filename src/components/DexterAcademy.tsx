import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";

import JoinUsImg from "../assets/images/Join-us-img.png";

export default function DexterAcademy() {
  return (
    <section className="grid lg:grid-cols-2 gap-10 p-5 ">
      <motion.div
        className="flex flex-col gap-5 items-start justify-center my-auto"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <motion.h3
          className="border-[#05484E] text-[#05484E] text-[12.7px] font-[500] p-2 border-l-2 "
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          Dexter Academy
        </motion.h3>
        <motion.h2
          className="text-[24px] lg:text-[36px] text-[#101828] text-left font-[700] leading-[44px]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          We Develop talents for endless possibilities.
        </motion.h2>
        <motion.p
          className="text-[14px] lg:text-[16px] text-[#687171] leading-[26px] font-[400]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          Explore Global Opportunities with our industrial standard learning
          experiences curated to help you stand out as you navigate your career
          path.
        </motion.p>
        <motion.button
          className="bg-[#136DEC] text-[#FFFFFF] px-3 py-2 rounded-lg  hover:bg-blue-700 transition-colors xl:w-1/4"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <NavLink
            className="w-full flex items-center justify-center gap-[10px]"
            to="https://www.dexterproacademy.com/"
            target="_blank"
          >
            <span>Start Learning</span>
          </NavLink>
        </motion.button>
      </motion.div>
      <motion.img
        src={JoinUsImg}
        alt="Dexter Academy Join Us Image"
        className="mx-auto row-span-full lg:row-span-1 w-full"
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      />
    </section>
  );
}
