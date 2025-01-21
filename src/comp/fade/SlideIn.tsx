"use client";

import { motion, useInView } from "framer-motion";
import { ReactNode, useEffect, useRef, useState } from "react";

export function SlideIn({
  children,
  delay = 0,
  duration = 0.5,
}: {
  children: ReactNode;
  delay?: number;
  duration?: number;
}) {
  let ref = useRef(null);
  let isInView = useInView(ref);
  let [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (isInView && !isVisible) {
      setIsVisible(true);
    }
  }, [isInView, isVisible]);

  return (
    <motion.div
      ref={ref}
      variants={{
        hidden: {
          opacity: 0,
          x: -50,
        },
        visible: {
          opacity: 1,
          x: 0,
        },
      }}
      initial="hidden"
      animate={isVisible ? "visible" : "hidden"}
      transition={{ delay, type: "spring", duration }}
    >
      {children}
    </motion.div>
  );
}
