// Slide từ trên xuống
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
// Slide từ dưới lên
export const slideUp = {
  initial: {
    y: 40,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

// Slide từ phải sang trái
export const slideLeft = {
  initial: {
    x: 40,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

// Slide từ trái sang phải
export const slideRight = {
  initial: {
    x: -40,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

// Slide từ dưới lên với hiệu ứng dừng lại
export const slideUpStagger = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
      delay: i * 0.15,
    },
  }),
};
