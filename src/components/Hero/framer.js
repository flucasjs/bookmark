const slideInFromLeft = {
  transition: { ease: [0.25, 1, 0.5, 1], duration: 1.25, delay: 1 },
  initial: { opacity: 0, x: 350},
  animate: { opacity: 1, x: 0 },
};

const fadeUp = {
  hide: { opacity: 0, y: 10 },
  show: { opacity: 1, y: 0, transition: { ease: [0.61, 1, 0.88, 1], staggerChildren: 0.25 } },
};

const fadeInContainerRight = {
  initial: "hide",
  animate: "show",
  variants: {
    hide: { opacity: 0 },
    show: { opacity: 1, transition: { delay: 0.25, when: "beforeChildren", staggerChildren: 0.05 } },
  },
};

const fadeInChildRight = {
  variants: {
    hide: { opacity: 0, width: 0 },
    show: { opacity: 0.25, width: 88 },
  },
};

const fadeInContainerLeft = {
  initial: "hide",
  animate: "show",
  variants: {
    hide: { opacity: 0 },
    show: { opacity: 1, transition: { when: "beforeChildren", staggerChildren: 0.025 } },
  },
};

const fadeInChildLeft1 = {
  variants: {
    hide: { opacity: 0 },
    show: { opacity: 1 },
  },
};
const fadeInChildLeft2 = {
  variants: {
    hide: { opacity: 0 },
    show: { opacity: 0.5 },
  },
};
const fadeInChildLeft3 = {
  variants: {
    hide: { opacity: 0 },
    show: { opacity: 0.25 },
  },
};

export {
  fadeUp,
  slideInFromLeft,
  fadeInContainerRight,
  fadeInContainerLeft,
  fadeInChildRight,
  fadeInChildLeft1,
  fadeInChildLeft2,
  fadeInChildLeft3,
};
