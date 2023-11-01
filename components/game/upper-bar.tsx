import Gauge from "@/components/game/gauge";
import { Country } from "@/utils/countries";
import { GeoProjection } from "@/utils/geo-projections";
import { Level, displayLevel } from "@/utils/rules";
import {
  Heading,
  Text,
  Box,
  useTheme,
  IconButton,
  Button,
} from "@chakra-ui/react";
import { FC } from "react";
import VolumeUpIcon from "@mui/icons-material/VolumeUp";
import VolumeOffIcon from "@mui/icons-material/VolumeOff";

interface UpperBarProps {
  tries: number;
  score: number;
  losingCondition: number;
  winCondition: number;
  countryToGuess: Country | null;
  level: Level;
  geoProjection: GeoProjection;
  isSoundEnabled: boolean;
  onSoundToggle: () => void;
  onClickSkip: () => void;
}

const UpperBar: FC<UpperBarProps> = ({
  tries,
  countryToGuess,
  level,
  geoProjection,
  losingCondition,
  winCondition,
  score,
  onSoundToggle,
  isSoundEnabled,
  onClickSkip,
}) => {
  const theme = useTheme();

  return (
    <Box
      bg={theme.colors.primary.main}
      className="absolute top-0 left-0 w-full px-4 py-2 border-b"
      style={{ borderBottomColor: theme.colors.primary[900] }}
    >
      <div className="flex flex-col justify-between">
        <div className="flex items-center">
          <div className="flex-col flex-1">
            <Text className="text-left" color="white" fontSize="lg">
              Find the country on the map
            </Text>
            <Text className="text-left" color="white" fontSize="lg">
              Projection: {geoProjection}
            </Text>
          </div>
          <div className="flex-3">
            <Heading as="h1" color="white" size="xl" className="text-center">
              {countryToGuess?.flag} {countryToGuess?.name.toUpperCase()}
            </Heading>
          </div>
          <div className="flex-1">
            <div>
              <div className="flex-1 flex items-center justify-end">
                <Button
                  className="mb-2 mr-2"
                  rounded="full"
                  colorScheme="secondary"
                  variant="solid"
                  onClick={onClickSkip}
                >
                  Skip
                </Button>
                <IconButton
                  className="mb-2"
                  rounded="full"
                  variant="solid"
                  colorScheme="secondary"
                  icon={isSoundEnabled ? <VolumeUpIcon /> : <VolumeOffIcon />}
                  onClick={onSoundToggle}
                  aria-label={"sound"}
                />
              </div>
              <Text color="white" className="text-right">
                {displayLevel(level)}
              </Text>
              <Text className="text-right" color="white" fontSize="lg">
                Tries: {tries} / {losingCondition}
              </Text>
              <div className="flex-1 flex items-center justify-end">
                <Gauge score={score} winCondition={winCondition} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Box>
  );
};

export default UpperBar;
