import { Button, Text } from "@chakra-ui/react";
import Confetti from "@/components/game/confetti";
import { useLevelTexts } from "@/hooks/useLevelTexts";
import { useTranslation } from "@/i18n/client";
import {
  type Level,
  getLevelNumber,
  introducesNewProjection,
} from "@/utils/rules";

interface NextLevelScreenProps {
  level: Level;
  onPlay: () => void;
}

export default function NextLevelScreen({
  level,
  onPlay,
}: NextLevelScreenProps) {
  const { t } = useTranslation();
  const levelTexts = useLevelTexts();

  return (
    <>
      <Confetti />
      <div className="flex h-screen flex-col items-center justify-center">
        <Text className="text-center">{t("next.congratulations")}</Text>
        <Text className="mb-5">
          {t("next.nextStep", { level: getLevelNumber(level) })}
        </Text>
        <Text className="mb-5 text-center">
          {levelTexts.goal(level)}
          {introducesNewProjection(level) && (
            <>
              <br />
              {levelTexts.newProjection}
            </>
          )}
        </Text>
        <Text className="mb-20">{t("next.areYouReady")}</Text>
        <Button
          rounded="full"
          colorPalette="secondary"
          variant="solid"
          onClick={onPlay}
        >
          {t("next.nextLevel")}
        </Button>
      </div>
    </>
  );
}
