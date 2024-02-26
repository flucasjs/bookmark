"use client";

import { useState, useEffect } from "react";
import { isMobile } from "react-device-detect";
import { motion, AnimatePresence } from "framer-motion";
import { features as featuresData } from "@/data";
import Illustration from "./Illustration";


export default function Features() {
  const [selected, setSelected] = useState(featuresData[0].title);
  const [illustration, setIllustration] = useState(
    featuresData[0].illustration
  );

  function handleClick(featureTitle) {
    if (featureTitle !== selected) {
      setSelected(featureTitle);
    }
  }

  useEffect(() => {
    setIllustration(
      featuresData.filter((feature) => feature.title === selected)[0]
        .illustration
    );
  }, [selected]);

  const attributes = !isMobile
    ? {
        transition: { ease: [0.4, 0, 0.2, 1], duration: 0.25 },
        layoutId: "border-bottom",
      }
    : {};

  const FADE_UP_ANIMATION_VARIANTS = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0, transition: { type: "spring" } },
  };

  return (
    <div className="container flex flex-col max-w-full pt-24 mx-auto font-medium text-center gap-y-10 text-color-secondary">
      <div className="self-center md:w-[540px] md:h-[152px] md:mb-[72px]">
        <h2 className="mb-1 text-[1.5rem] leading-[2.17] -tracking-[0.08px] md:text-[2rem] md:leading-[1.625[ md:-tracking-[0.1px] lg:mb-4">
          Features
        </h2>
        <p className="text-sm opacity-50 md:text-[1.125rem] md:leading-[1.56]">
          Our aim is to make it quick and easy for you to access your favourite
          websites. Your bookmarks sync between your devices so you can access
          them on the go.
        </p>
      </div>
      <div className="flex flex-col text-center">
        <div className="flex flex-col border-t-[1px] border-[hsl(231,58%,55%,0.2)] mb-20 text-[1.0625rem] md:flex-row md:border-t-0 md:border-b-[1px] hover:cursor-pointer">
          {featuresData.map((item) => {
            return (
              <h3
                key={item.title}
                className="relative border-b-[1px] border-b-[hsl(231,58%,55%,0.2)] md:border-none flex flex-1 md:basis-[235px]"
              >
                <button
                  className="flex-1 text-center"
                  onClick={() => handleClick(item.title)}
                >
                  <div className="flex flex-col justify-between pt-[24px] w-fit mx-auto">
                    <span
                      className={`${
                        item.title === selected ? "opacity-100 mb-[20px] md:mb-[24px]" : "opacity-75 mb-[24px]"
                      } tracking-[0.53px] text-[1rem] leading-[1.0625] whitespace-nowrap `}
                    >
                      {item.label}
                    </span>
                    {item.title === selected ? (
                      <motion.div
                        className="md:absolute md:-bottom-[1px] w-[90%] md:w-full self-center h-1 mt-auto bg-color-accent"
                        {...attributes}
                      />
                    ) : null}
                  </div>
                </button>
              </h3>
            );
          })}
        </div>
        {featuresData.map((item) => {
          return (
            <div
              key={item.title}
              className={`gap-y-12 sm:gap-y-20 gap-x-16 lg:gap-x-26 md:mb-[77px] flex flex-wrap md:justify-between ${
                selected === item.title ? "flex" : "hidden"
              }`}
            >
              <Illustration
                feature={illustration}
                selected={selected === item.title}
              />
              <AnimatePresence initial={false} mode="wait">
                {selected === item.title ? (
                  <motion.div
                    className="basis-[50%] lg:basis-[50%] flex-1 flex flex-col lg:max-w-[445px] mx-auto max-w-prose"
                    transition={{ duration: 0.25, ease: [0.4, 0, 0.2, 1] }}
                    initial="hidden"
                    animate="visible"
                    exit="hidden"
                    variants={FADE_UP_ANIMATION_VARIANTS}
                  >
                    <h2 className="mb-4 text-[1.5rem] leading-[2.17] -tracking-[0.08px] lg:text-[2rem] lg:tracking-[1.625] lg:-leading-[0.1px]">
                      {item.title}
                    </h2>
                    <div className="mb-8 text-sm font-normal opacity-50 lg:text-[1.125rem] lg:leading-[1.56] lg:tracking-normal">
                      {item.body}
                    </div>
                    <button className="mx-auto text-white bg-color-primary hover:bg-white hover:text-color-primary border-2 border-transparent hover:border-color-primary py-[10px] px-[24px] rounded-[5px] text-[0.875rem] leading-[2] tracking-[0.25px] md:w-fit lg:text-[0.875rem] lg:leading-[2] lg:tracking-[0.25px] shadow-[0_8px_8px_-4px_rgba(73,93,207,0.2)] transition-colors duration-100 ease-in-out">
                      More Info
                    </button>
                  </motion.div>
                ) : null}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </div>
  );
}
