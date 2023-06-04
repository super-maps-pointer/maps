import { FC } from "react";

interface EndGameScreenProps {
  isGameWon: boolean;
  handleNextLevel: () => void;
  handlePlayAgain: () => void;
}

const EndGameScreen: FC<EndGameScreenProps> = ({
  isGameWon,
  handleNextLevel,
  handlePlayAgain,
}) => {
  if (isGameWon) {
    return (
      <div className="flex flex-col items-center justify-center">
        <p className="text-center">Congratulations! You won!</p>
        <button
          className="px-4 py-2 bg-blue-500 text-white rounded mt-4"
          onClick={handleNextLevel}
        >
          Next Level
        </button>
      </div>
    );
  } else {
    return (
      <div className="flex flex-col items-center justify-center">
        <p className="text-center">Game over! You failed.</p>
        <button
          className="px-4 py-2 bg-blue-500 text-white rounded mt-4"
          onClick={handlePlayAgain}
        >
          Play Again
        </button>
      </div>
    );
  }
};

export default EndGameScreen;