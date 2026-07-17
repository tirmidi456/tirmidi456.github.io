import React from 'react';
import styled, { keyframes } from 'styled-components';
import { motion } from 'framer-motion';

const PreloaderContainer = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.background};
  z-index: 9999;
`;

const iconVariants = {
  hidden: { pathLength: 0, fill: "rgba(255, 255, 255, 0)" },
  visible: {
    pathLength: 1,
    fill: "rgba(255, 255, 255, 1)",
    transition: { duration: 2, ease: "easeInOut" },
  },
};

const Preloader = () => {
  return (
    <PreloaderContainer
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.5, delay: 2.5 } }} // Increased delay to 2.5s
    >
      <svg width="100" height="100" viewBox="0 0 24 24">
        <motion.path
          d="M12 2L12 22M22 12L2 12"
          stroke="#00f2ff"
          strokeWidth="2"
          variants={iconVariants}
          initial="hidden"
          animate="visible"
        />
      </svg>
    </PreloaderContainer>
  );
};

export default Preloader;