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
      <>
        <p>Congratulations! You won!</p>
        <button
          className="px-4 py-2 bg-blue-500 text-white rounded mt-4"
          onClick={handleNextLevel}
        >
          Next Level
        </button>
      </>
    );
  } else {
    return (
      <>
        <p>Game over! You failed.</p>
        <button
          className="px-4 py-2 bg-blue-500 text-white rounded mt-4"
          onClick={handlePlayAgain}
        >
          Play Again
        </button>
      </>
    );
  }
};

export default EndGameScreen;
