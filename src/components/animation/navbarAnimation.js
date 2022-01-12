export const navbarVariants = {
  initial: {
    x: "-100%"
  },

  animate: {
    x: 0
  },

  exit: {
    x: "-100%"
  }
};

export const ulVariants = {
  initial: {
    opacity: 0
  },
  animate: {
    opacity: 1,
    transition: { duration: 2, staggerChildren: 0.4, delay: 0.6 }
  },

  exit: {
    opacity: 0,
    transition: { duration: 2 }
  }
};

export const liVariants = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 }
};

export const imgVariants = {
  initial: {
    opacity: 0
  },
  animate: {
    opacity: 1
  },
  exit: {
    opacity: 0
  }
};

export const iconsVariants = {
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
    transition: {
      duration: 1.8,
      staggerChildren: 0.4,
      delay: 0.6
    }
  }
};

export const iconVariant = {
  initial: { opacity: 0 },
  animate: { opacity: 1 }
};
