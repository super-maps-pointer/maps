import { useTranslation } from "@/i18n/client";
import {
  type Level,
  getLevelEmoji,
  getLevelNumber,
  getLossCondition,
  getWinCondition,
} from "@/utils/rules";

export function useLevelTexts() {
  const { t } = useTranslation();

  const name = (level: Level) =>
    `${t("level.name", { number: getLevelNumber(level) })} ${getLevelEmoji(level)}`.trim();

  const goal = (level: Level) =>
    t("level.goal", {
      goal: getWinCondition(level),
      tries: getLossCondition(level),
    });

  return { name, goal, newProjection: t("level.newProjection") };
}
