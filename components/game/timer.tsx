import { Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";

interface TimerProps {
  maxTime: number;
}

const formatTime = (seconds: number): string => {
  const minutes = String(Math.floor(seconds / 60)).padStart(2, "0");
  const remainingSeconds = String(seconds % 60).padStart(2, "0");
  return `${minutes}:${remainingSeconds}`;
};

export default function Timer({ maxTime }: TimerProps) {
  const [time, setTime] = useState(0);

  useEffect(() => {
    const timerId = setInterval(() => {
      setTime((prevTime) => {
        if (prevTime + 1 >= maxTime) clearInterval(timerId);
        return Math.min(prevTime + 1, maxTime);
      });
    }, 1000);

    return () => {
      clearInterval(timerId);
    };
  }, [maxTime]);

  return (
    <Text className="text-left" color="white" fontSize="lg">
      {formatTime(time)}
    </Text>
  );
}
