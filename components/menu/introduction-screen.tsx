import { FC } from "react";
import Image from "next/image";
import { Button } from "@chakra-ui/react";
import { useTranslation } from "@/i18n/client";
import { IMAGES } from "@/utils/images";
import { WaveDivider } from "@/components/styles/wave-divider";

interface IntroductionScreenProps {
  onPlay: () => void;
}

const IntroductionScreen: FC<IntroductionScreenProps> = ({ onPlay }) => {
  const { t } = useTranslation();

  return (
    <>
      {/* First section with the content */}
      <div className="section-with-divider flex flex-col items-center justify-center h-screen text-center bg-white">
        <div className="mb-4 z-10">
          <Image
            src={IMAGES.logo}
            alt="Logo Super Maps Pointer"
            width={400}
            height={400}
            priority
          />
        </div>
        <h1 className="text-4xl font-bold mb-4 z-10">
          {t("introduction.title")}
        </h1>
        <p className="text-xl mb-8 z-10">{t("introduction.getReady")}</p>
        <Button
          rounded="full"
          colorScheme="secondary"
          variant="solid"
          onClick={onPlay}
          className="z-10"
        >
          {t("introduction.start")}
        </Button>
        {/* SVG Shape Divider */}
        <WaveDivider />
      </div>

      {/* Second section with a lot of text */}
      <div className="second-section p-8 text-white">
        {/* Replace this with your actual text content */}
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
        {/* Add more text or elements as needed */}
      </div>
    </>
  );
};

export default IntroductionScreen;
