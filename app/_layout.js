import { Stack } from "expo-router";
import { useFonts, Bangers_400Regular } from "@expo-google-fonts/bangers";

const _layout = () => {
  // load fonts
  const [fontsLoaded] = useFonts({
    Bangers_400Regular,
  });

  if (!fontsLoaded) {
    return null;
  }

  return <Stack />;
};

export default _layout;
