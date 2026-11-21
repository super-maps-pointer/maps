import { Button, Text } from "@chakra-ui/react";
import Confetti from "@/components/game/confetti";
import { useLevelTexts } from "@/hooks/useLevelTexts";
import { useTranslation } from "@/i18n/client";
import { type GeoProjection, getProjectionName } from "@/utils/geo-projections";
import { type Level, getLevelRules } from "@/utils/rules";

interface NextLevelScreenProps {
  level: Level;
  projection: GeoProjection;
  onPlay: () => void;
}

export default function NextLevelScreen({
  level,
  projection,
  onPlay,
}: NextLevelScreenProps) {
  const { t } = useTranslation();
  const levelTexts = useLevelTexts();
  const { number } = getLevelRules(level);

  return (
    <>
      <Confetti />
      <div className="flex h-screen flex-col items-center justify-center">
        <Text className="text-center">{t("next.congratulations")}</Text>
        <Text className="mb-5">{t("next.nextStep", { level: number })}</Text>
        <Text className="text-center">{levelTexts.goal(level)}</Text>
        <Text className="mb-5 text-center">
          {t("next.newProjection", { name: getProjectionName(projection) })}
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
