import { motion } from "motion/react";

export function LoadingSpinner() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#f8f6f1]">
      <motion.div
        animate={{
          rotate: 360,
        }}
        transition={{
          duration: 1,
          repeat: Infinity,
          ease: "linear",
        }}
        className="w-16 h-16 border-4 border-[#d9c6a5] border-t-[#b4532a] rounded-full"
      />
    </div>
  );
}
