import { FC } from "react";
import Image from "next/image";
import { IMAGES } from "@/utils/images";
import { Button } from "@chakra-ui/react";
import { useTranslation } from "@/i18n/client";

interface IntroductionScreenProps {
  onPlay: () => void;
}

const IntroductionScreen: FC<IntroductionScreenProps> = ({ onPlay }) => {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="mb-4">
        <Image
          src={IMAGES.logo}
          alt="Logo Super Maps Pointer"
          width={400}
          height={400}
          priority
        />
      </div>
      <h1 className="text-4xl font-bold mb-4">{t("introduction.title")}</h1>
      <p className="text-xl mb-8">{t("introduction.getReady")}</p>
      <Button
        rounded="full"
        colorScheme="secondary"
        variant="solid"
        onClick={onPlay}
      >
        {t("introduction.start")}
      </Button>
    </div>
  );
};

export default IntroductionScreen;
