import { Button, Text } from "@chakra-ui/react";
import { useTranslation } from "@/i18n/client";

interface RetryLevelScreenProps {
  onPlay: () => void;
}

export default function RetryLevelScreen({ onPlay }: RetryLevelScreenProps) {
  const { t } = useTranslation();

  return (
    <div className="flex h-screen flex-col items-center justify-center">
      <Text className="mb-5 text-center">{t("retry.gameOver")}</Text>
      <Button
        rounded="full"
        colorPalette="secondary"
        variant="solid"
        onClick={onPlay}
      >
        {t("retry.playAgain")}
      </Button>
    </div>
  );
}
