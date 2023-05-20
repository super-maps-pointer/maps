import { FC } from "react";
import Image from "next/image";
import { IMAGES } from "@/utils/images";

interface IntroductionScreenProps {
  onPlay: () => void;
}

const IntroductionScreen: FC<IntroductionScreenProps> = ({ onPlay }) => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="mb-4">
        <Image src={IMAGES.logo} alt="Image" width={400} height={400} />
      </div>
      <h1 className="text-4xl font-bold mb-4">
        Welcome to Super Maps Pointer!
      </h1>
      <p className="text-xl mb-8">
        Get ready to test your geography knowledge!
      </p>
      <button
        className="px-6 py-3 bg-blue-500 text-white rounded hover:bg-blue-600"
        onClick={onPlay}
      >
        Start Level 1
      </button>
    </div>
  );
};

export default IntroductionScreen;
