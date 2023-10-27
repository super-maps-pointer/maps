import { FC } from "react";
import { Button, Text } from "@chakra-ui/react";
import { useTranslation } from "next-i18next";

interface RetryLevelScreenProps {
  onPlay: () => void;
}

const RetryLevelScreen: FC<RetryLevelScreenProps> = ({ onPlay }) => {
  const { t } = useTranslation();
  return (
    <div className="flex items-center justify-center h-screen flex-col">
      <Text className="text-center">{t("retry.gameOver")}</Text>
      <Button
        rounded="full"
        colorScheme="secondary"
        variant="solid"
        onClick={onPlay}
      >
        {t("retry.playAgain")}
      </Button>
    </div>
  );
};

export default RetryLevelScreen;
