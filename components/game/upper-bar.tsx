import { Box, Button, Heading, IconButton, Text } from "@chakra-ui/react";
import { Volume2, VolumeX } from "lucide-react";
import Gauge from "@/components/game/gauge";
import Timer from "@/components/game/timer";
import { ColorModeButton } from "@/components/ui/color-mode";
import { useLevelTexts } from "@/hooks/useLevelTexts";
import { useTranslation } from "@/i18n/client";
import { colorVar } from "@/utils/css-var";
import { getProjectionName } from "@/utils/geo-projections";
import { getLevelRules } from "@/utils/rules";
import type { PlayingRunState } from "@/utils/run";

interface UpperBarProps {
  run: PlayingRunState;
  isSoundEnabled: boolean;
  onSoundToggle: () => void;
  onClickSkip: () => void;
}

const META_SIZE = { base: "sm", md: "lg" } as const;
const CONTROL_SIZE = { base: "lg", md: "md" } as const;

export default function UpperBar({
  run,
  onSoundToggle,
  isSoundEnabled,
  onClickSkip,
}: UpperBarProps) {
  const { t } = useTranslation();
  const levelTexts = useLevelTexts();
  const { level, levelRun } = run;
  const { goal, tries: maxTries } = getLevelRules(level);
  const { targetCountry } = levelRun;

  return (
    <Box
      className="absolute top-0 left-0 grid w-full grid-cols-[1fr_auto] items-center gap-x-4 gap-y-2 border-b px-4 pt-[max(0.5rem,env(safe-area-inset-top))] pb-3 md:grid-cols-[1fr_3fr_1fr] md:pb-2"
      color="white"
      style={{
        backgroundColor: colorVar("bar.bg"),
        borderBottomColor: colorVar("bar.border"),
      }}
    >
      <div className="col-start-1 row-start-1 md:row-span-2">
        <Text fontSize={META_SIZE} className="tabular-nums">
          <Timer maxTime={3600} />
          <span className="md:hidden">
            {" · "}
            {levelTexts.name(level)}
          </span>
        </Text>
        <Text fontSize={META_SIZE} className="hidden md:block">
          {t("game.findCountry")}
        </Text>
        <Text fontSize={META_SIZE}>
          {t("game.projection", { name: getProjectionName(run.projection) })}
        </Text>
      </div>

      <div className="col-start-2 row-start-1 flex items-center justify-end gap-2 md:col-start-3">
        <Button
          size={CONTROL_SIZE}
          rounded="full"
          colorPalette="secondary"
          variant="solid"
          onClick={onClickSkip}
        >
          {t("game.skip")}
        </Button>
        <IconButton
          size={CONTROL_SIZE}
          rounded="full"
          variant="solid"
          colorPalette="secondary"
          onClick={onSoundToggle}
          aria-label={isSoundEnabled ? t("game.mute") : t("game.unmute")}
        >
          {isSoundEnabled ? <Volume2 /> : <VolumeX />}
        </IconButton>
        <ColorModeButton size={CONTROL_SIZE} />
      </div>

      <Heading
        as="h1"
        size={{ base: "2xl", md: "4xl" }}
        className="col-span-2 row-start-2 text-center text-balance md:col-span-1 md:col-start-2 md:row-span-2 md:row-start-1"
      >
        {targetCountry?.flag} {targetCountry?.name.toUpperCase()}
      </Heading>

      <div className="col-span-2 row-start-3 flex items-center gap-3 md:col-span-1 md:col-start-3 md:row-start-2 md:flex-col md:items-end md:gap-0">
        <Text fontSize={META_SIZE} className="shrink-0 tabular-nums">
          <span className="hidden md:inline">
            {levelTexts.name(level)}
            {" · "}
          </span>
          {t("game.tries", { tries: levelRun.tries, max: maxTries })}
        </Text>
        <Gauge score={levelRun.foundCountries.length} winCondition={goal} />
      </div>
    </Box>
  );
}
