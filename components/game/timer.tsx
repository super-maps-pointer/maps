import React, { useState, useEffect } from "react";
import { Box, Text } from "@chakra-ui/react";

interface TimerProps {
  maxTime: number;
}

const Timer: React.FC<TimerProps> = ({ maxTime }) => {
  const [time, setTime] = useState(0);

  useEffect(() => {
    let timerId: NodeJS.Timeout;

    if (time < maxTime) {
      timerId = setInterval(() => {
        setTime((prevTime) => {
          if (prevTime === maxTime - 1) {
            clearInterval(timerId);
          }
          return prevTime + 1;
        });
      }, 1000);
    }

    return () => {
      clearInterval(timerId);
    };
  }, [time, maxTime]);

  const formatTime = (seconds: number): string => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;

    const formattedMinutes = String(minutes).padStart(2, "0");
    const formattedSeconds = String(remainingSeconds).padStart(2, "0");

    return `${formattedMinutes}:${formattedSeconds}`;
  };

  return (
    <Box>
      <Text className="text-left" color="white" fontSize="lg">
        {formatTime(time)}
      </Text>
    </Box>
  );
};

export default Timer;
