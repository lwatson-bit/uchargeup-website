import { motion, type HTMLMotionProps } from "framer-motion";

/** The site's one entrance: a short fade and 12px rise when a block scrolls into
 *  view. MotionConfig reducedMotion="user" in App.tsx turns it off for people
 *  who asked their device for less motion. */
export function FadeUp({ delay = 0, ...props }: HTMLMotionProps<"div"> & { delay?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1], delay }}
      {...props}
    />
  );
}
