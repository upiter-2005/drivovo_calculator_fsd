import { insertSpace } from "@/utils/insertSpace";
import React, { useEffect, useState } from "react";

interface AnimatedNumberProps {
  value: number;
  duration?: number; // в миллисекундах
  format?: boolean; // в миллисекундах
}

export const AnimatedNumber: React.FC<AnimatedNumberProps> = ({
  value,
  duration = 500,
  format = false
}) => {
  const [displayedValue, setDisplayedValue] = useState(value);
  
  useEffect(() => {

    const startValue = displayedValue;
    const diff = value - startValue;
    let startTime: number | null = null;

    const animate = (timestamp: number) => {
      if (startTime === null) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const currentValue = Math.round(startValue + diff * progress);
      if(currentValue !== 0) setDisplayedValue(currentValue);
      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [value, duration]);

  if(format){
    return <span>{insertSpace(displayedValue)}</span>;
  }else{
    return <span>{displayedValue}</span>;
  }
  
};
