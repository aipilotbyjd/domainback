import { Stack } from "expo-router";
import { useFonts, Bangers_400Regular } from "@expo-google-fonts/bangers";
import { Lexend_400Regular } from "@expo-google-fonts/lexend";
import { CarterOne_400Regular } from "@expo-google-fonts/carter-one";

const _layout = () => {
  // load fonts
  const [fontsLoaded] = useFonts({
    Bangers_400Regular,
    Lexend_400Regular,
    CarterOne_400Regular,
  });

  if (!fontsLoaded) {
    return null;
  }

  return <Stack />;
};

export default _layout;
