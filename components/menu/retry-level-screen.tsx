import { FC } from "react";
import { Button, Text } from "@chakra-ui/react";

interface RetryLevelScreenProps {
  onPlay: () => void;
}

const RetryLevelScreen: FC<RetryLevelScreenProps> = ({ onPlay }) => {
  return (
    <div className="flex items-center justify-center h-screen flex-col">
      <Text className="text-center">Game over! You failed.</Text>
      <Button
        rounded="full"
        colorScheme="secondary"
        variant="solid"
        onClick={onPlay}
      >
        Play Again
      </Button>
    </div>
  );
};

export default RetryLevelScreen;
