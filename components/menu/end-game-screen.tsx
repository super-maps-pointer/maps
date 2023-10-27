import { FC } from "react";
import { Text } from "@chakra-ui/react";
import { useTranslation } from "next-i18next";

const EndGameScreen: FC = () => {
  const { t } = useTranslation();

  return (
    <div className="flex items-center justify-center h-screen flex-col">
      <Text className="text-center">{t("end.congratulations")}</Text>
    </div>
  );
};

export default EndGameScreen;
