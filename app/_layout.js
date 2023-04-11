import { Stack } from "expo-router";
import { useFonts, Bangers_400Regular } from "@expo-google-fonts/bangers";
import { MochiyPopOne_400Regular } from "@expo-google-fonts/mochiy-pop-one";

const _layout = () => {
  // load fonts
  const [fontsLoaded] = useFonts({
    Bangers_400Regular,
    MochiyPopOne_400Regular,
  });

  if (!fontsLoaded) {
    return null;
  }

  return <Stack />;
};

export default _layout;
