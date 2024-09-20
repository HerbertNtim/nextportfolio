import { motion, useScroll } from "framer-motion";

const AnimatedCircle = ({reference}) => {
  const { scrollYProgress } = useScroll({
    target: reference,
    offset: ["start end", "center start"],
  });
  return (
    <figure className="absolute left-0 stroke-dark">
      <svg width="75" height="75" viewBox="0 0 100 100">
        <circle
          cx="75"
          cy="50"
          r="20"
          className="stroke-pink-500 stroke-1 fill-none"
        />
        <motion.circle
          cx="75"
          cy="50"
          r="20"
          className="stroke-[5px] fill-slate-50"
          style={{
            pathLength: scrollYProgress
          }}
        />
        <circle
          width="75"
          height="75"
          viewBox="0 0 100 100"
          className="animate-pulse stroke-1 fill-pink-400"
        />
      </svg>
    </figure>
  );
};

export default AnimatedCircle;
