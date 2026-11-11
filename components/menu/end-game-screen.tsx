import { Text } from "@chakra-ui/react";
import { useTranslation } from "@/i18n/client";

export default function EndGameScreen() {
  const { t } = useTranslation();

  return (
    <div className="flex h-screen flex-col items-center justify-center">
      <Text className="text-center">{t("end.congratulations")}</Text>
    </div>
  );
}
