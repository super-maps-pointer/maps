import { Text } from "@chakra-ui/react";
import { colorVar } from "@/utils/css-var";

interface GaugeProps {
  score: number;
  winCondition: number;
}

export default function Gauge({ score, winCondition }: GaugeProps) {
  const gaugeScore = Math.min((score / winCondition) * 100, 100);

  return (
    <div className="flex min-w-0 flex-1 flex-row items-center gap-2 md:w-full md:max-w-80 md:flex-none">
      <div
        className="h-4 min-w-0 flex-1 rounded-lg border border-black shadow-sm"
        style={{ backgroundColor: colorVar("gauge.track") }}
      >
        <div
          className="h-full rounded-lg"
          style={{
            width: `${String(gaugeScore)}%`,
            backgroundColor: colorVar("gauge.fill"),
          }}
        />
      </div>
      <Text
        fontSize={{ base: "sm", md: "lg" }}
        className="shrink-0 tabular-nums"
      >
        {score} / {winCondition}
      </Text>
    </div>
  );
}
