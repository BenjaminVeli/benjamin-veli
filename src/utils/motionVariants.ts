import { Variants } from "framer-motion";

export const containerStagger = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

export const fadeInUp = {
  initial: {
    y: 180,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 1,
      ease: 'easeOut',
    },
  },
};

export const fadeInLeft = {
  initial: {
    x: -500,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
    },
  },
};



// Efecto desvanecimiento

export const fadeInStagger: Variants = {
  start: {},
  end: {
    transition: {
      staggerChildren: 0.4,
    }
  },
};

export const fadeInStaggerChild: Variants = {
  start: {
    y: 30,
    opacity: 0,
    filter: '(blur(5px))',
  },
  end: {
    y: 0,
    opacity: 1,
    filter: '(blur(0))',
    transition: {
      duration: 0.7,
      ease: 'easeOut',
    },
  },
};
