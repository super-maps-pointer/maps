import { useTranslation } from "@/i18n/client";
import { type Level, getLevelRules } from "@/utils/rules";

export function useLevelTexts() {
  const { t } = useTranslation();

  const name = (level: Level) => {
    const { number, emoji } = getLevelRules(level);
    return `${t("level.name", { number })} ${emoji}`.trim();
  };

  const goal = (level: Level) => {
    const rules = getLevelRules(level);
    return t("level.goal", { goal: rules.goal, tries: rules.tries });
  };

  return { name, goal, newProjection: t("level.newProjection") };
}
