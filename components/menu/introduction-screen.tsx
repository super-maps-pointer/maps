import { Button, Heading, Text } from "@chakra-ui/react";
import Image from "next/image";
import WaveDivider from "@/components/menu/wave-divider";
import { useLevelTexts } from "@/hooks/useLevelTexts";
import { useTranslation } from "@/i18n/client";
import { colorVar } from "@/utils/css-var";
import { IMAGES } from "@/utils/images";
import { LEVEL_ORDER, introducesNewProjection } from "@/utils/rules";

interface IntroductionScreenProps {
  onPlay: () => void;
}

export default function IntroductionScreen({
  onPlay,
}: IntroductionScreenProps) {
  const { t } = useTranslation();

  return (
    <main>
      <section
        className="relative flex min-h-screen flex-col items-center justify-center px-4 pb-32 text-center"
        style={{ backgroundColor: colorVar("splash.hero") }}
      >
        <div className="relative z-10 flex flex-col items-center">
          <Image
            src={IMAGES.logo}
            alt="Logo Super Maps Pointer"
            width={400}
            height={400}
            priority
            className="mb-4 h-auto w-64 md:w-[400px]"
          />
          <h1 className="mb-4 text-3xl font-bold md:text-4xl">
            {t("introduction.title")}
          </h1>
          <p className="mb-8 text-lg md:text-xl">
            {t("introduction.getReady")}
          </p>
          <Button
            rounded="full"
            colorPalette="secondary"
            variant="solid"
            onClick={onPlay}
          >
            {t("introduction.start")}
          </Button>
        </div>
        <WaveDivider />
      </section>
      <HowToPlay />
    </main>
  );
}

function HowToPlay() {
  const { t } = useTranslation();
  const levelTexts = useLevelTexts();

  return (
    <section
      className="px-4 py-16 text-white"
      style={{ backgroundColor: colorVar("splash.section") }}
    >
      <div className="mx-auto max-w-4xl">
        <Heading as="h2" size="3xl" className="mb-4 text-center">
          {t("introduction.howToPlay.title")}
        </Heading>
        <Text className="mx-auto mb-10 max-w-2xl text-center text-lg">
          {t("introduction.howToPlay.principle")}
        </Text>
        <ul className="grid gap-4 sm:grid-cols-2">
          {LEVEL_ORDER.map((level) => (
            <li key={level} className="rounded-2xl bg-white/10 p-5">
              <Heading as="h3" size="lg" className="mb-1">
                {levelTexts.name(level)}
              </Heading>
              <Text>{levelTexts.goal(level)}</Text>
              {introducesNewProjection(level) && (
                <Text className="mt-1 italic">{levelTexts.newProjection}</Text>
              )}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
