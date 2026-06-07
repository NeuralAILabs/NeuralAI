'use client';

import { ReactNode } from "react";
import { motion } from "motion/react";

interface ScrollRevealProps {
  children: ReactNode;
  variant?: "fade-up" | "fade-in" | "fade-left" | "fade-right" | "zoom-in";
  duration?: number;
  delay?: number;
  threshold?: number;
  once?: boolean;
  className?: string;
  yOffset?: number;
  xOffset?: number;
}

export default function ScrollReveal({
  children,
  variant = "fade-up",
  duration = 0.8,
  delay = 0,
  threshold = 0.1,
  once = true,
  className = "",
  yOffset = 30,
  xOffset = 30,
}: ScrollRevealProps) {
  const selectVariants = () => {
    switch (variant) {
      case "fade-up":
        return {
          hidden: { opacity: 0, y: yOffset },
          visible: { opacity: 1, y: 0 },
        };
      case "fade-in":
        return {
          hidden: { opacity: 0 },
          visible: { opacity: 1 },
        };
      case "fade-left":
        return {
          hidden: { opacity: 0, x: -xOffset },
          visible: { opacity: 1, x: 0 },
        };
      case "fade-right":
        return {
          hidden: { opacity: 0, x: xOffset },
          visible: { opacity: 1, x: 0 },
        };
      case "zoom-in":
        return {
          hidden: { opacity: 0, scale: 0.95 },
          visible: { opacity: 1, scale: 1 },
        };
      default:
        return {
          hidden: { opacity: 0, y: yOffset },
          visible: { opacity: 1, y: 0 },
        };
    }
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount: threshold }}
      variants={selectVariants()}
      transition={{
        duration,
        delay,
        ease: [0.16, 1, 0.3, 1] as const,
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

interface StaggerContainerProps {
  children: ReactNode;
  delayChildren?: number;
  staggerDelay?: number;
  threshold?: number;
  once?: boolean;
  className?: string;
}

export function StaggerContainer({
  children,
  delayChildren = 0,
  staggerDelay = 0.1,
  threshold = 0.05,
  once = true,
  className = "",
}: StaggerContainerProps) {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        delayChildren,
        staggerChildren: staggerDelay,
      },
    },
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount: threshold }}
      variants={containerVariants}
      className={className}
    >
      {children}
    </motion.div>
  );
}

interface StaggerItemProps {
  children: ReactNode;
  variant?: "fade-up" | "fade-in" | "zoom-in";
  duration?: number;
  yOffset?: number;
  className?: string;
}

export function StaggerItem({
  children,
  variant = "fade-up",
  duration = 0.7,
  yOffset = 20,
  className = "",
}: StaggerItemProps) {
  const itemVariants = {
    hidden: {
      opacity: 0,
      y: variant === "fade-up" ? yOffset : 0,
      scale: variant === "zoom-in" ? 0.95 : 1,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration,
        ease: [0.215, 0.61, 0.355, 1] as const,
      },
    },
  };

  return (
    <motion.div variants={itemVariants} className={className}>
      {children}
    </motion.div>
  );
}
