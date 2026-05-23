export const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0 }
};

export const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 }
};

export const scaleIn = {
  hidden: { opacity: 0, scale: 0.94 },
  visible: { opacity: 1, scale: 1 }
};

export const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.09 } }
};

export const slideLeft = {
  hidden: { opacity: 0, x: 36 },
  visible: { opacity: 1, x: 0 }
};

export const blurIn = {
  hidden: { opacity: 0, filter: "blur(12px)", y: 20 },
  visible: { opacity: 1, filter: "blur(0px)", y: 0 }
};

export const transition = {
  duration: 0.6,
  ease: "easeOut"
} as const;