import React, { useEffect, useRef } from "react";
import { motion, type MotionProps } from "framer-motion";

interface TypingTextAnimationProps extends MotionProps {
  text: string;
  speed: number;
  className?: string;
}

export function TypingTextAnimation({
  text = "",
  speed = 50,
  ...props
}: TypingTextAnimationProps) {
  const typingText = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      typingText.current!.innerText = text.slice(0, index + 1);
      index++;
      if (index >= text.length) {
        clearInterval(interval);
      }
    }, speed);
    return () => clearInterval(interval);
  }, []);

  return (
    <motion.span
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      ref={typingText}
      {...props}
    />
  );
}
