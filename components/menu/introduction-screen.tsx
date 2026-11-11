import { Button } from "@chakra-ui/react";
import Image from "next/image";
import { useTranslation } from "@/i18n/client";
import { IMAGES } from "@/utils/images";

interface IntroductionScreenProps {
  onPlay: () => void;
}

export default function IntroductionScreen({ onPlay }: IntroductionScreenProps) {
  const { t } = useTranslation();

  return (
    <div className="flex h-screen flex-col items-center justify-center">
      <div className="mb-4">
        <Image src={IMAGES.logo} alt="Logo Super Maps Pointer" width={400} height={400} priority />
      </div>
      <h1 className="mb-4 text-4xl font-bold">{t("introduction.title")}</h1>
      <p className="mb-8 text-xl">{t("introduction.getReady")}</p>
      <Button rounded="full" colorPalette="secondary" variant="solid" onClick={onPlay}>
        {t("introduction.start")}
      </Button>
    </div>
  );
}
