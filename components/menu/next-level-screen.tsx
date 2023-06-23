import { FC } from "react";
import { Button, Text } from "@chakra-ui/react";
import { Level } from "@/utils/rules";

interface NextLevelScreenProps {
  level: Level;
  onPlay: () => void;
}

const NextLevelScreen: FC<NextLevelScreenProps> = ({ level, onPlay }) => {
  return (
    <div className="flex items-center justify-center h-screen flex-col">
      <Text className="text-center">Congratulations! You won!</Text>
      <Text>You finished perfectly level: {level}</Text>
      <Button
        rounded="full"
        colorScheme="secondary"
        variant="solid"
        onClick={onPlay}
      >
        Next Level
      </Button>
    </div>
  );
};

export default NextLevelScreen;
