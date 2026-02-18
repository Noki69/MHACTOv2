import { useEffect, useState, useRef } from "react";
import { motion } from "motion/react";

interface StatsCounterProps {
  end: number;
  duration?: number;
  suffix?: string;
  prefix?: string;
}

export function StatsCounter({
  end,
  duration = 2,
  suffix = "",
  prefix = "",
}: StatsCounterProps) {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          let startTime: number | null = null;
          const step = (timestamp: number) => {
            if (!startTime) startTime = timestamp;
            const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
            setCount(Math.floor(progress * end));
            if (progress < 1) {
              window.requestAnimationFrame(step);
            }
          };
          window.requestAnimationFrame(step);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [end, duration, hasAnimated]);

  return (
    <span ref={ref}>
      {prefix}
      {count.toLocaleString()}
      {suffix}
    </span>
  );
}

interface StatsItemProps {
  value: number;
  label: string;
  suffix?: string;
  prefix?: string;
}

export function StatsItem({ value, label, suffix, prefix }: StatsItemProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="text-center"
    >
      <div className="font-['Cormorant_Garamond:SemiBold',sans-serif] text-4xl lg:text-5xl text-[#b4532a] mb-2">
        <StatsCounter end={value} suffix={suffix} prefix={prefix} />
      </div>
      <div className="text-[#2b2b2b] text-lg">{label}</div>
    </motion.div>
  );
}
