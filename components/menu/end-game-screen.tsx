import { FC } from "react";
import { Text } from "@chakra-ui/react";

const EndGameScreen: FC = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <Text>You finish the game! Amazing</Text>
    </div>
  );
};

export default EndGameScreen;
