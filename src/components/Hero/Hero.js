"use client";

import { motion } from "framer-motion";
import { fadeUp, slideInFromLeft } from "./framer";
import Button from "@/components/Button";
import Illustration from "./Illustration";

export default function Hero() {
  return (
    <div className="container flex flex-col gap-x-2 items-center mx-auto md:flex-row lg:max-w-[95vw] max-w-[90vw] md:pr-[0] xl:pr-[3rem] 2xl:pr-[5rem]">
      <div className="relative flex-1 basis-[50%] w-full mt-[6%] md:order-1 flex justify-end items-center">
        <div className="z-10 max-w-[600px] xl:max-w-[800px] 2xl:max-w-[900px] w-full">
          <Illustration />
        </div>
        <motion.div
          className="-z-10 bg-color-primary w-[125vw] rounded-full absolute md:h-[70%] left-[28%] md:top-[30%] xl:top-[32%]"
          {...slideInFromLeft}
        />
      </div>
      <motion.div className="flex flex-col basis-[40ch] font-medium text-center flex-1 md:row-start-1 md:col-start-1 md:col-span-1 gap-y-8 md:text-left md:mb-0 text-color-secondary">
        <motion.div
          initial="hide"
          animate="show"
          variants={fadeUp}
          className="flex flex-col flex-1 gap-y-4 md:gap-y-8 max-w-prose"
        >
          <motion.h1
            className="text-lg leading-[1.33] -tracking-[0.09px] md:leading-[1.08] md:-tracking-[0.15px]"
          >
            A Simple Bookmark Manager
          </motion.h1>
          <motion.p
            className="max-w-[50ch] tracking-normal opacity-50 font-normal text-md md:text-[1.125rem] md:leading-[1.56]"
          >
            A clean and simple interface to organize your favourite websites.
            Open a new browser tab and see your sites load instantly. Try it for
            free.
          </motion.p>
        </motion.div>
        <motion.div
          initial="hide"
          animate="show"
          variants={fadeUp}
          className="max-w-prose flex flex-wrap xs:flex-nowrap gap-y-6 text-[0.875rem] font-medium md:justify-start gap-x-4 whitespace-nowrap"
        >
          <Button
            variant="primary"
            // variants={fadeUp}
            className="basis-[50%] flex-1 px-3 py-2 md:px-6 leading-[2] tracking-[0px] md:max-w-fit"
          >
            Get it on Chrome
          </Button>
          <Button
            variant="secondary"
            // variants={fadeUp}
            className="basis-[50%] flex-1 px-3 py-2 md:px-6 shadow-[0px_8px_8px_-4px_rgba(73,93,207,0.2)] leading-[2] tracking-[0.25px] md:max-w-fit"
          >
            Get it on Firefox
          </Button>
        </motion.div>
      </motion.div>
    </div>
  );
}
