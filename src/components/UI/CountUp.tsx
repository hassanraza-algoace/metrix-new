import { useEffect, useState } from "react";

interface CountUpProps {
  number: number;
  duration?: number; // animation duration in ms
}

const CountUp = ({ number, duration = 2000 }: CountUpProps) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const increment = number / (duration / 16); // approx 60fps
    const interval = setInterval(() => {
      start += increment;
      if (start >= number) {
        start = number;
        clearInterval(interval);
      }
      setCount(Math.floor(start));
    }, 10);

    return () => clearInterval(interval);
  }, [number, duration]);

  return <>{count}</>;
};

export default CountUp;