import { Box, Button, Heading, IconButton, Text } from "@chakra-ui/react";
import { Volume2, VolumeX } from "lucide-react";
import Gauge from "@/components/game/gauge";
import Timer from "@/components/game/timer";
import { ColorModeButton } from "@/components/ui/color-mode";
import { useLevelTexts } from "@/hooks/useLevelTexts";
import { useTranslation } from "@/i18n/client";
import type { Country } from "@/utils/countries";
import { colorVar } from "@/utils/css-var";
import { type GeoProjection, getProjectionName } from "@/utils/geo-projections";
import type { Level } from "@/utils/rules";

interface UpperBarProps {
  tries: number;
  score: number;
  losingCondition: number;
  winCondition: number;
  countryToGuess: Country | undefined;
  level: Level;
  geoProjection: GeoProjection;
  isSoundEnabled: boolean;
  onSoundToggle: () => void;
  onClickSkip: () => void;
}

export default function UpperBar({
  tries,
  countryToGuess,
  level,
  geoProjection,
  losingCondition,
  winCondition,
  score,
  onSoundToggle,
  isSoundEnabled,
  onClickSkip,
}: UpperBarProps) {
  const { t } = useTranslation();
  const levelTexts = useLevelTexts();

  return (
    <Box
      className="absolute top-0 left-0 w-full border-b px-4 py-2"
      style={{
        backgroundColor: colorVar("bar.bg"),
        borderBottomColor: colorVar("bar.border"),
      }}
    >
      <div className="flex items-center">
        <div className="flex-1 flex-col">
          <Timer maxTime={3600} />
          <Text className="text-left" color="white" fontSize="lg">
            {t("game.findCountry")}
          </Text>
          <Text className="text-left" color="white" fontSize="lg">
            {t("game.projection", { name: getProjectionName(geoProjection) })}
          </Text>
        </div>
        <div className="flex-3">
          <Heading as="h1" color="white" size="4xl" className="text-center">
            {countryToGuess?.flag} {countryToGuess?.name.toUpperCase()}
          </Heading>
        </div>
        <div className="flex-1">
          <div className="mb-2 flex flex-1 items-center justify-end gap-2">
            <Button
              rounded="full"
              colorPalette="secondary"
              variant="solid"
              onClick={onClickSkip}
            >
              {t("game.skip")}
            </Button>
            <IconButton
              rounded="full"
              variant="solid"
              colorPalette="secondary"
              onClick={onSoundToggle}
              aria-label={isSoundEnabled ? t("game.mute") : t("game.unmute")}
            >
              {isSoundEnabled ? <Volume2 /> : <VolumeX />}
            </IconButton>
            <ColorModeButton />
          </div>
          <Text color="white" className="text-right">
            {levelTexts.name(level)}
          </Text>
          <Text className="text-right" color="white" fontSize="lg">
            {t("game.tries", { tries, max: losingCondition })}
          </Text>
          <div className="flex flex-1 items-center justify-end">
            <Gauge score={score} winCondition={winCondition} />
          </div>
        </div>
      </div>
    </Box>
  );
}
