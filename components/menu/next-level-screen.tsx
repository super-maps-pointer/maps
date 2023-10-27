import { FC, useEffect, useRef } from "react";
import { Button, Text } from "@chakra-ui/react";
import { Level, getLevelRules } from "@/utils/rules";
import Confetti from "@/components/game/confetti";
import { useTranslation } from "next-i18next";

interface NextLevelScreenProps {
  level: Level;
  onPlay: () => void;
}

const NextLevelScreen: FC<NextLevelScreenProps> = ({ level, onPlay }) => {
  const confettiRef = useRef<any | null>(null);
  const { t } = useTranslation();

  useEffect(() => {
    confettiRef.current?.fire();
  }, []);

  return (
    <>
      <Confetti ref={confettiRef} />
      <div className="flex items-center justify-center h-screen flex-col">
        <Text className="text-center">{t("next.congratulations")}</Text>
        <Text className="mb-5">{t("next.nextStep", { level })}</Text>

        <Text className="mb-5">{getLevelRules(level)}</Text>
        <Text className="mb-20">{t("next.areYouReady")}</Text>

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
