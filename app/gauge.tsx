import { useTheme, Text } from "@chakra-ui/react";
import { FC } from "react";

interface GaugeProps {
  score: number;
  winCondition: number;
}

const Gauge: FC<GaugeProps> = ({ score, winCondition }) => {
  const gaugeScore = (score / winCondition) * 100;
  const theme = useTheme();

  return (
    <div className="absolute top-1/2 right-5 transform -translate-y-1/2 text-center">
      <div className="flex flex-col items-center">
        <div
          className="h-80 w-4 bg-white mb-4 transform rotate-180 rounded-lg border border-black shadow-sm"
          style={{ marginBottom: "4px" }}
        >
          <div
            className="h-full rounded-lg"
            style={{
              height: `${gaugeScore}%`,
              background: `linear-gradient(to top, ${theme.colors.primary.main} ${gaugeScore}%, ${theme.colors.primary["200"]} 100%)`,
            }}
          />
        </div>
        <Text>
          {score} / {winCondition}
        </Text>
      </div>
    </div>
  );
};

export default Gauge;
