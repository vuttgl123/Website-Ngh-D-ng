// src/utils/animations.js
export const slideDown = {
  initial: {
    y: 0,
    opacity: 1,
  },
  animate: {
    y: [-40, 0],
    opacity: [0, 1],
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
};


export const slideUp = {
  initial: { y: 40, opacity: 0 },
  animate: { y: 0, opacity: 1 },
  transition: { duration: 0.8, ease: "easeOut" },
};

export const slideLeft = {
  initial: { x: 40, opacity: 0 },
  animate: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

export const slideRight = {
  initial: { x: -40, opacity: 0 },
  animate: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};
