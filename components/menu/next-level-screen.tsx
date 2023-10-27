import { FC, useEffect, useRef } from "react";
import { Button, Text } from "@chakra-ui/react";
import { Level, getLevelRules } from "@/utils/rules";
import Confetti from "@/components/game/confetti";

interface NextLevelScreenProps {
  level: Level;
  onPlay: () => void;
}

const NextLevelScreen: FC<NextLevelScreenProps> = ({ level, onPlay }) => {
  const confettiRef = useRef<any | null>(null);

  useEffect(() => {
    confettiRef.current?.fire();
  }, []);

  return (
    <>
      <Confetti ref={confettiRef} />
      <div className="flex items-center justify-center h-screen flex-col">
        <Text className="text-center">Congratulations! You won!</Text>
        <Text className="mb-5">Next step: level {level}!</Text>

        <Text className="mb-5">{getLevelRules(level)}</Text>
        <Text className="mb-20">Are you ready?</Text>

        <Button
          rounded="full"
          colorScheme="secondary"
          variant="solid"
          onClick={onPlay}
        >
          Next Level
        </Button>
      </div>
    </>
  );
};

export default NextLevelScreen;
