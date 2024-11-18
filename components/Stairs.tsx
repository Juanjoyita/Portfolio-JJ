'use client'; // Si necesitas que este componente sea un componente cliente

import { motion } from "framer-motion";

const stairsAnimation = {
  initial: {
    top: 80,
  },
  animate: {
    top: "100%",
  },
  exit: {
    top: ["100%", "0"],
  },
};

const reverseIndex = (index: number) => {
  const totalSteps = 6;
  return totalSteps - index - 1;
};

const Stairs = () => {
  return (
    <>
      {[...Array(6)].map((_, index) => (
        <motion.div
          key={index}
          variants={stairsAnimation}
          initial="initial"
          animate="animate"
          exit="exit"
          transition={{
            duration: 0.4,
            ease: "easeInOut",
            delay: reverseIndex(index) * 0.1,
          }}
          className="h-full w-full bg-purple-950 absolute"
        />
      ))}
    </>
  );
};

export default Stairs;
;
