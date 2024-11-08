import {motion} from 'framer-motion'
import { splitString } from '../utils';


export default function SectionHeading({title, heading, paragraph, color}: {title: string, heading: string, paragraph: string, color: string}) {

  const splitTitle = splitString(title)
 
  
   const titleVariants = {
     hidden: { opacity: 0, y: 200, scale: 0.2 },
     reveal: { opacity: 1, y: 0, scale: 1 },
   };

    

    return (
      <motion.div className=" md:w-[65%] lg:w-[75%] xl:w-[50%] flex flex-col gap-5 items-center mx-auto">
        <h3
          className={`text-[12.7px] font-[500] p-2 border-l-4`}
          style={{ color: color, borderLeftColor: color }}
        >
          {splitTitle.map((char, index) => (
            <motion.span
              key={index + title + char}
              variants={titleVariants}
              initial="hidden"
              whileInView="reveal"
              transition={{ duration: 1, delay: index * 0.05 }}
            >
              {char}
            </motion.span>
          ))}
        </h3>
        <motion.h2
          className="text-[#131316] text-[36px] leading-[45.67px] md:text-[46px] md:leading-[55.67px] text-center font-[500]"
          initial={{ opacity: 0,  scale: 0.2 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {heading}
        </motion.h2>
        <motion.p className="text-[#5F5F6D] text-[14px] md:text-[16px] md:leading-[28px] font-[500] text-center" 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          {paragraph}
        </motion.p>
      </motion.div>
    );
}
