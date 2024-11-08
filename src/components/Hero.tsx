import Button from "./Button";
import { motion } from "framer-motion";
import { splitString } from "../utils";

interface HeroProps {
  header: string;
  paragraph: string;
  button_text: string;
  image: string;
  id: string;
}

export default function Hero({
  header,
  paragraph,
  button_text,
  image,
  id,
}: HeroProps) {
  const headingChars = splitString(header);

  const charVariants = {
    hidden: { opacity: 0 },
    reveal: { opacity: 1 },
  };

  const headingStagger = 0.02;
  const paragraphDelay = headingChars.length * headingStagger;

  return (
    <section
      id={id}
      className="bg-[#111318] relative grid lg:grid-cols-[40%_60%] p-5 md:px-10 lg:px-20 min-h-screen"
    >
      <motion.div
        className="my-auto flex flex-col items-start gap-5 md:gap-10"
        transition={{ staggerChildren: headingStagger }}
      >
        <motion.h1
          className="text-[40px] md:text-[50px] xl:text-[56px] leading-[50px]  md:leading-[60px] xl:leading-[67.77px] font-[700] text-[#FFFFFF] w-full"
          initial="hidden"
          whileInView="reveal"
          transition={{ staggerChildren: headingStagger }}
        >
          {headingChars.map((char, index) => (
            <motion.span
              key={char + index}
              transition={{ duration: 1 }}
              variants={charVariants}
            >
              {char}
            </motion.span>
          ))}
        </motion.h1>
        <motion.p
          className="text-[16px] md:text-[18px] font-[500] leading-[28px] text-[#FAFAFA]"
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.5, delay: paragraphDelay }}
        >
          {paragraph}
        </motion.p>
        <Button text={button_text}></Button>
      </motion.div>
      <div className="w-full h-full hidden lg:flex">
        <motion.img
          src={image}
          alt="DexterPro Technology Hero Image"
          className="w-full lg:my-auto lg:h-[70%] xl:w-full h-full xl:h-[90%]"
          initial={{ opacity: 0, filter: "blur(30px)" }}
          whileInView={{ opacity: 1, filter: "blur(0)" }}
          transition={{ duration: 1, delay: 0.5 }}
        />
      </div>
    </section>
  );
}
