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
    <div className="flex flex-row items-center">
      <div
        className="h-4 w-80 bg-white mr-4 rounded-lg border border-black shadow-sm"
        style={{ marginRight: "4px" }}
      >
        <div
          className="h-full rounded-lg"
          style={{
            width: `${gaugeScore}%`,
            backgroundColor: theme.colors.secondary.main,
          }}
        />
      </div>
      <Text color="white" fontSize="lg">
        {score} / {winCondition}
      </Text>
    </div>
  );
};

export default Gauge;
