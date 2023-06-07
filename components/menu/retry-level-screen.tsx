import { FC } from "react";
import { Button, Text } from "@chakra-ui/react";

interface RetryLevelScreenProps {
  onPlay: () => void;
}

const RetryLevelScreen: FC<RetryLevelScreenProps> = ({ onPlay }) => {
  return (
    <div className="flex flex-col items-center justify-center">
      <Text className="text-center">Game over! You failed.</Text>
      <Button
        className="px-4 py-2 bg-blue-500 text-white rounded mt-4"
        onClick={onPlay}
      >
        Play Again
      </Button>
    </div>
  );
};

export default RetryLevelScreen;
