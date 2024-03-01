
"use client";

import Image from "next/image";
import bgDots from "../../../public/images/bg-dots.svg";
import { motion } from "framer-motion";
import { extensions as extensionsData } from "@/data";

const FADE_UP_ANIMATION_VARIANTS = {
  hidden: { opacity: 0, y: 10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", staggerChildren: 0.5 },
  },
};

const position = ["self-start", "self-center", "self-end"];

export default function Cards() {
  return (
    <div className="max-w-[950px] mx-auto flex flex-col font-medium text-color-secondary text-center pt-[4.8125rem]">
      <div className="mb-2 md:mb-[2.5rem] self-center lg:mb-[52px] max-w-[30ch] lg:max-w-[445px]">
        <h2 className="text-[1.5rem] leading-[2.17] -tracking-[0.08px] lg:text-[2rem] lg:leading-[1.625] lg:-tracking-[0.1px] mb-2 md:mb-4">
          Download the extension
        </h2>
        <p className="mb-10 text-sm opacity-50 lg:text-[1.125rem] lg:leading-[1.56] lg:tracking-normal">
          We’ve got more browsers in the pipeline. Please do let us know if
          you’ve got a favourite you’d like us to prioritize.
        </p>
      </div>
      <motion.div
        className="flex flex-wrap justify-center md:gap-x-[2vw] md:flex md:justify-between lg:h-[450px] max-w-[280px] md:max-w-[575px] lg:max-w-[920px] mx-auto"
        initial="hidden"
        whileInView="visible"
        viewport={{ amount: 0.1, once: true }}
        variants={FADE_UP_ANIMATION_VARIANTS}
      >
        {extensionsData.map((item, i) => {
          return (
            <motion.div
              key={item.browser}
              className={`basis-[280px] mx-auto mb-10 lg:mb-0 flex flex-col rounded-[15px] shadow-[0_10px_20px_-5px_rgba(73,93,207,0.2)] ${position[i]}`}
              variants={FADE_UP_ANIMATION_VARIANTS}
            >
              <Image className="self-center mt-[49px] mb-8" src={item.logo} alt="" />
              <h3 className="mb-[6px] text-[1.25rem] leading-[1.2] tracking-[0.25px] lg:text-[1.25rem] lg:leading-[1.2] lg:tracking-[0.25px]">
                {item.browser}
              </h3>
              <p className="mb-8 text-sm opacity-50 lg:text-[0.9375rem] lg:leading-[1.87] lg:tracking-normal">
                Minimum version {item.version}
              </p>
              <Image src={bgDots} alt="" />
              <button className="flex text-white bg-color-primary border-2 border-transparent hover:bg-white hover:text-color-primary hover:border-color-primary m-6 py-[10px] rounded-[5px] text-[0.875rem] leading-[2] tracking-[0.25px] transition-colors duration-100 ease-in-out">
                <span className="self-center block mx-auto text-center">Add & Install Extension</span>
              </button>
            </motion.div>
          );
        })}
      </motion.div>
    </div>
  );
}