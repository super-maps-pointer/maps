import { FC } from "react";

interface GaugeProps {
  score: number;
  winCondition: number;
}

const Gauge: FC<GaugeProps> = ({ score, winCondition }) => {
  const gaugeScore = (score / winCondition) * 100;

  return (
    <div className="absolute top-1/2 right-5 transform -translate-y-1/2 text-center">
      <div className="flex flex-col items-center">
        <div
          className="h-64 w-4 bg-gray-300 mb-4"
          style={{ marginBottom: "4px" }}
        >
          <div
            className="h-full bg-blue-500"
            style={{
              height: `${gaugeScore}%`,
              transformOrigin: "top",
            }}
          ></div>
        </div>
        <p>
          {score} / {winCondition}
        </p>
      </div>
    </div>
  );
};

export default Gauge;
