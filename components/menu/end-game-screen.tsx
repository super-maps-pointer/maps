import { FC } from "react";
import { Text } from "@chakra-ui/react";

const EndGameScreen: FC = () => {
  return (
    <div className="flex items-center justify-center h-screen flex-col">
      <Text className="text-center">You finish the game! Amazing</Text>
    </div>
  );
};

export default EndGameScreen;
