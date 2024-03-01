"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import iconArrow from "../../../public/images/icon-arrow.svg";
import { faq as faqData } from "@/data";

export default function Faq() {
  const [selected, setSelected] = useState("");

  function handleClick(nextSelection) {
    setSelected((prevSelection) =>
      prevSelection !== nextSelection ? nextSelection : ""
    );
  }

  return (
    <div className="container max-w-[40ch] md:max-w-prose lg:max-w-[100ch] self-center flex flex-col justify-center text-color-secondary font-medium text-center pt-[8.75rem] mb-[7.6875rem] lg:pt-[145px]">
      <div className="mb-16 lg:mb-[56px] mx-auto">
        <h2 className="text-[1.5rem] leading-[1.25] -tracking-[0.05px] mb-4 lg:text-[2rem] lg:tracking-[1.625] lg:-leading-[0.1px]">
          Frequently Asked Questions
        </h2>
        <p className="text-sm opacity-50 lg:text-[1.125rem] lg:leading-[1.56] lg:tracking-normal">
          Here are some of our FAQs. If you have any other questions you’d like
          answered please feel free to email us.
        </p>
      </div>
      <ul className="mb-12 lg:mb-[54px]">
        {faqData.map((item) => (
          <li
            key={item.heading}
            className="border-b-[1px] border-b-[hsl(229,31%,21%,0.15)]"
          >
            <h3 className="flex flex-col flex-1 text-color-secondary text-[0.9375rem] leading-[2.13] tracking-normal">
              <button 
                onClick={() => handleClick(item.heading)}
                className="flex items-center justify-between flex-1 py-4"
                >
                <span className="font-normal text-[0.9375rem] md:text-[1.125rem] leading-[1.78] tracking-normal text-left">{item.heading}</span>
                <Image src={iconArrow} alt="" className="w-4 h-3" />
              </button>
            </h3>
            <AnimatePresence initial={false}>
              {item.heading === selected ? (
                <motion.div
                  transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
                  initial="collapsed"
                  animate="open"
                  exit="collapsed"
                  variants={{
                    open: {
                      opacity: 0.75,
                      height: "auto",
                      marginBottom: "1em",
                    },
                    collapsed: {
                      opacity: 0,
                      height: 0,
                      marginBottom: "0",
                    },
                  }}
                  className={`text-left max-h-[75rem] overflow-hidden text-[0.9375rem] md:text-[1rem] leading-[2.25] tracking-normal font-normal opacity-75`}
                >
                  {item.body}
                </motion.div>
              ) : null}
            </AnimatePresence>
          </li>
        ))}
      </ul>
      <button className="text-white bg-color-primary border-2 border-transparent hover:bg-white hover:text-color-primary hover:border-color-primary m-6 py-[10px] px-[24px] rounded-[5px] text-[0.875rem] leading-[2] tracking-[0.25px] self-center shadow-[0_8px_8px_-4px_rgba(73,93,207,0.2)] transition-colors duration-100 ease-in-out">
        More info
      </button>
    </div>
  );
}
