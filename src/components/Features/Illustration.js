import React from "react";
import Image from "next/image";
import illustrationFeaturesTab1 from "../../../public/images/illustration-features-tab-1.svg";
import illustrationFeaturesTab2 from "../../../public/images/illustration-features-tab-2.svg";
import illustrationFeaturesTab3 from "../../../public/images/illustration-features-tab-3.svg";
import { motion, AnimatePresence } from "framer-motion";

const illustrationData = {
  bookmark: { src: illustrationFeaturesTab1, alt: "" },
  search: { src: illustrationFeaturesTab2, alt: "" },
  share: { src: illustrationFeaturesTab3, alt: "" },
};

const FADE_UP_ANIMATION_VARIANTS = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0, transition: { type: "spring" } },
};

const shimmer = (w, h) => `
  <svg width="${w}" height="${h}" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <defs>
      <linearGradient id="g">
        <stop stop-color="#333" offset="20%" />
        <stop stop-color="#222" offset="50%" />
        <stop stop-color="#333" offset="70%" />
      </linearGradient>
    </defs>
    <rect width="${w}" height="${h}" fill="#333" />
    <rect id="r" width="${w}" height="${h}" fill="url(#g)" />
    <animate xlink:href="#r" attributeName="x" from="-${w}" to="${w}" dur="1s" repeatCount="indefinite"  />
  </svg>`;

const toBase64 = (str) =>
  typeof window === "undefined"
    ? Buffer.from(str).toString("base64")
    : window.btoa(str);

export default function Illustration({ feature, selected }) {
  return (
    <div className="relative mx-auto flex-1 basis-[50%] max-w-[535px]">
      <AnimatePresence initial={false} mode="wait">
        {selected ? (
          <motion.div
            transition={{ duration: 0.25, ease: [0.4, 0, 0.2, 1] }}
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={FADE_UP_ANIMATION_VARIANTS}
          >
            <Image
              src={illustrationData[feature].src}
              alt={illustrationData[feature].alt}
              width={500}
              height={350}
              placeholder={`data:image/svg+xml;base64,${toBase64(
                shimmer(700, 475)
              )}`}
            />
          </motion.div>
        ) : null}
      </AnimatePresence>
      <div className="absolute -z-10 bg-color-primary w-[200vw] rounded-full h-[90%] xl:h-[95%] right-[20%] top-[20%]"></div>
    </div>
  );
}