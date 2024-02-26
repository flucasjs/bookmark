"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  fadeInContainerLeft,
  fadeInContainerRight,
  fadeInChildRight,
  fadeInChildLeft1,
  fadeInChildLeft2,
  fadeInChildLeft3,
} from "./framer";

export default function HeroIllustration({ width, height, ...props }) {
  return (
    <motion.svg
      transition={{ type: "spring", duration: 1, delay: 0.15 }}
      initial={{ opacity: 0, y: 25 }}
      animate={{ opacity: 1, y: 0 }}
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      width={width}
      height={height}
      viewBox={"0 0 657 466"}
      {...props}
    >
      <defs>
        <filter
          id="a"
          width="118%"
          height="126.9%"
          x="-9%"
          y="-5.7%"
          filterUnits="objectBoundingBox"
        >
          <feOffset dy={2} in="SourceAlpha" result="shadowOffsetOuter1" />
          <feGaussianBlur
            in="shadowOffsetOuter1"
            result="shadowBlurOuter1"
            stdDeviation={2}
          />
          <feColorMatrix
            in="shadowBlurOuter1"
            result="shadowMatrixOuter1"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.5 0"
          />
          <feMerge>
            <feMergeNode in="shadowMatrixOuter1" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
        <filter
          id="b"
          width="126%"
          height="139%"
          x="-13%"
          y="-11.7%"
          filterUnits="objectBoundingBox"
        >
          <feOffset dy={30} in="SourceAlpha" result="shadowOffsetOuter1" />
          <feGaussianBlur
            in="shadowOffsetOuter1"
            result="shadowBlurOuter1"
            stdDeviation={20}
          />
          <feColorMatrix
            in="shadowBlurOuter1"
            values="0 0 0 0 0.18243335 0 0 0 0 0.230632694 0 0 0 0 0.506057518 0 0 0 0.200120192 0"
          />
        </filter>
        <rect id="c" width={578} height={385} rx={26} />
        <rect id="e" width={536} height={346} y={3} rx={8} />
        <linearGradient
          id="d"
          x1="99.013%"
          x2="2.544%"
          y1="71.675%"
          y2="29.014%"
        >
          <stop offset="0%" stopColor="#151515" />
          <stop offset="100%" stopColor="#3D3D3D" />
        </linearGradient>
      </defs>
      <g
        fill="none"
        fillRule="evenodd"
        filter="url(#a)"
        transform="translate(39 9)"
      >
        <g transform="translate(.5 .5)">
          <g fillRule="nonzero">
            <use xlinkHref="#c" fill="#000" filter="url(#b)" />
            <use xlinkHref="#c" fill="#777" />
          </g>
          <rect
            width={574.23}
            height={381.865}
            x={2}
            y={2}
            fill="url(#d)"
            fillRule="nonzero"
            rx={25}
          />
          <g transform="translate(21.03 16.303)">
            <rect
              width={471.463}
              height={353.756}
              x={33}
              fill="#2A2A2A"
              fillRule="nonzero"
              opacity={0.1}
              rx={5}
            />
            <mask id="f" fill="#fff">
              <use xlinkHref="#e" />
            </mask>
            <use xlinkHref="#e" fill="#E8EAF6" fillRule="nonzero" />
            <g mask="url(#f)">
              <path fill="#5267DF" d="M-3.53 3.197h547v59h-547z" />
              <g fill="#FFF" transform="translate(22.47 17.197)">
                <motion.circle
                  cx={16}
                  cy={16}
                  r={16}
                  opacity={0.245}
                />
                <motion.circle
                  cx={477}
                  cy={16}
                  r={16}
                  opacity={0.104}
                />
                <g transform="translate(47 6)">
                  <motion.rect
                    height={6}
                    rx={3}
                    width={120}
                    opacity={0.75}
                  />
                  <motion.rect
                    height={6}
                    y={14}
                    rx={3}
                    width={64}
                    opacity={0.25}
                  />
                </g>
              </g>
            </g>
            <g mask="url(#f)">
              <g transform="translate(57 96)">
                <rect width={261} height={316} fill="#FFF" rx={8} />
                <rect width={128} height={316} x={295} fill="#FFF" rx={8} />
              </g>
            </g>
          </g>
        </g>
        <motion.g
          transform="translate(110 135)"
          {...fadeInContainerRight}
        >
          <motion.rect
            {...fadeInChildRight}
            height={6}
            x={284}
            fill="#242A45"
            rx={3}
          />
          <motion.rect
            {...fadeInChildRight}
            height={6}
            x={284}
            y={20}
            fill="#242A45"
            rx={3}
          />
          <motion.rect
            {...fadeInChildRight}
            height={6}
            x={284}
            y={40}
            fill="#242A45"
            rx={3}
          />
          <motion.rect
            {...fadeInChildRight}
            height={6}
            x={284}
            y={60}
            fill="#242A45"
            rx={3}
          />
          <motion.rect
            {...fadeInChildRight}
            height={6}
            x={284}
            y={94}
            fill="#242A45"
            rx={3}
          />
          <motion.rect
            {...fadeInChildRight}
            height={6}
            x={284}
            y={114}
            fill="#242A45"
            rx={3}
          />
          <motion.rect
            {...fadeInChildRight}
            height={6}
            x={284}
            y={134}
            fill="#242A45"
            rx={3}
          />
        </motion.g>
        <motion.g {...fadeInContainerLeft}>
          <motion.g transform="translate(110 145)">
            <motion.circle
              {...fadeInChildLeft1}
              width={88}
              cx={16}
              cy={16}
              r={16}
              fill="#F98E5D"
            />
            <motion.rect
              {...fadeInChildLeft2}
              width={120}
              height={6}
              x={47}
              y={6}
              fill="#242A45"
              rx={3}
            />
            <motion.rect
              {...fadeInChildLeft3}
              width={64}
              height={6}
              x={47}
              y={20}
              fill="#242A45"
              rx={3}
            />
          </motion.g>
          <motion.g transform="translate(110 201)">
            <motion.circle
              {...fadeInChildLeft1}
              width={88}
              cx={16}
              cy={16}
              r={16}
              fill="#6AC6D6"
            />
            <motion.rect
              {...fadeInChildLeft2}
              width={120}
              height={6}
              x={47}
              y={6}
              fill="#242A45"
              rx={3}
            />
            <motion.rect
              {...fadeInChildLeft3}
              width={64}
              height={6}
              x={47}
              y={20}
              fill="#242A45"
              rx={3}
            />
          </motion.g>
          <motion.g transform="translate(110 257)">
            <motion.circle
              {...fadeInChildLeft1}
              width={88}
              cx={16}
              cy={16}
              r={16}
              fill="#A47ED4"
            />
            <motion.rect
              {...fadeInChildLeft2}
              width={120}
              height={6}
              x={47}
              y={6}
              fill="#242A45"
              rx={3}
            />
            <motion.rect
              {...fadeInChildLeft3}
              width={64}
              height={6}
              x={47}
              y={20}
              fill="#242A45"
              rx={3}
            />
          </motion.g>
          <motion.g transform="translate(110 313)">
            <motion.circle
              {...fadeInChildLeft1}
              width={88}
              cx={16}
              cy={16}
              r={16}
              fill="#EC7878"
            />
            <motion.rect
              {...fadeInChildLeft2}
              width={120}
              height={6}
              x={47}
              y={6}
              fill="#242A45"
              rx={3}
            />
            <motion.rect
              {...fadeInChildLeft3}
              width={64}
              height={6}
              x={47}
              y={20}
              fill="#242A45"
              rx={3}
            />
          </motion.g>
        </motion.g>
      </g>
    </motion.svg>
  );
}
