import { motion } from 'framer-motion';

export const containerVariants = {
  hidden: { opacity: 0, x: '100vw', scale: 0.8 },
  visible: { 
    opacity: 1, 
    x: 0, 
    scale: 1, 
    transition: { type: 'spring', stiffness: 80, duration: 0.5 } 
  },
  exit: { 
    x: '-100vw', 
    scale: 0.8,
    transition: { ease: 'easeInOut', duration: 0.5 } 
  },
};

export const buttonVariants = {
  hover: {
    scale: 1.2,
    rotate: [0, 10, -10, 0],
    transition: { duration: 0.3, yoyo: Infinity },
  },
  tap: { 
    scale: 0.9, 
    transition: { duration: 0.2 } 
  },
};
