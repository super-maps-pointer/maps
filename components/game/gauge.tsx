import { Text } from "@chakra-ui/react";
import { colorVar } from "@/utils/css-var";

interface GaugeProps {
  score: number;
  winCondition: number;
}

export default function Gauge({ score, winCondition }: GaugeProps) {
  const gaugeScore = Math.min((score / winCondition) * 100, 100);

  return (
    <div className="flex flex-row items-center">
      <div
        className="mr-1 h-4 w-80 rounded-lg border border-black shadow-sm"
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
      <Text color="white" fontSize="lg">
        {score} / {winCondition}
      </Text>
    </div>
  );
}
