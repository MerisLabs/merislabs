// @ts-nocheck - may need to be at the start of file
import { Box, Typography, useMediaQuery } from "@mui/material";
import { AnimatePresence, motion } from "framer-motion";
import React from "react";
import styled from "@emotion/styled";
import Typewriter from "typewriter-effect";

export function PageTransition({ children }) {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 5 }}
        exit={{ opacity: 0 }}
        transition={{
          duration: 2,
          ease: "easeIn",
          times: [0, 0.2, 0.8, 1],
          // repeat: Infinity,
          repeatDelay: 1,
        }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}

export function AnimationMakerButton({ children }) {
  const isMobile = useMediaQuery((theme) => theme.breakpoints.down("md"));
  return (
    <motion.div
      className="box"
      whileHover={!isMobile && { scale: 1.1 }}
      whileTap={!isMobile && { scale: 0.9 }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
    >
      {children}
    </motion.div>
  );
}

export function LogoAnimator({ children }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      whileHover={{
        opacity: 1,
        scale: 1,
      }}
    >
      {children}
    </motion.div>
  );
}

const ShinnyEffect = styled(Box)`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5px 5px;
  transform: translateZ(0);
  border-radius: 50%;
  overflow: hidden;
  box-shadow: 0px 2px 8px -1px #0000001a;

  &::before,
  &::after {
    content: "";
    position: absolute;
    z-index: -1;
  }

  &::before {
    content: "";
    position: absolute;
    z-index: -1;
    animation: 6s rotate linear infinite;
    // width: 200%;
    // height: 200%;
    background: var(--tile-border);
  }

  &::after {
    content: "";
    position: absolute;
    z-index: -1;
    inset: 0;
    padding: 1px;
    border-radius: 50%;
    background: linear-gradient(
      to bottom right,
      rgba(var(--tile-start-rgb), 1),
      rgba(var(--tile-end-rgb), 1)
    );
    background-clip: content-box;
  }

  @keyframes rotate {
    from {
      transform: rotate(360deg);
    }
    to {
      transform: rotate(0deg);
    }
  }
`;

export function ShinnyBox({ children }) {
  return <ShinnyEffect>{children}</ShinnyEffect>;
}

export function TypewriterEffect({ children }: { children: string[] }) {
  return (
    <Typewriter
      options={{
        strings: children,
        autoStart: true,
        loop: true,
      }}
    />
  );
}

export const AnimatedTextCharacter = ({ text }: string) => {
  const letters = Array.from(text);

  // Variants for Container
  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.03, delayChildren: 0.04 * i },
    }),
  };

  // Variants for each letter
  const child = {
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
    hidden: {
      opacity: 0,
      x: -20,
      y: 10,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
  };

  return (
    <motion.div
      style={{ overflow: "hidden", display: "flex" }}
      variants={container}
      initial="hidden"
      animate="visible"
    >
      {letters.map((letter, index) => (
        <motion.span variants={child} key={index}>
          <Typography variant="h5" component="p">
            {letter === " " ? "\u00A0" : letter}
          </Typography>
        </motion.span>
      ))}
    </motion.div>
  );
};

const AnimatedTextWord = ({ text }) => {
  const words = text?.split(" ");

  // Variants for Container of words.
  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: 0.04 * i },
    }),
  };

  // Variants for each word.

  const child = {
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
    hidden: {
      opacity: 0,
      x: 20,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
  };

  return (
    <motion.div
      style={{ overflow: "hidden", display: "flex", fontSize: "2rem" }}
      variants={container}
      initial="hidden"
      animate="visible"
    >
      {words?.map((word, index) => (
        <motion.span
          variants={child}
          style={{ marginRight: "5px" }}
          key={index}
        >
          {word}
        </motion.span>
      ))}
    </motion.div>
  );
};

export default AnimatedTextWord;
