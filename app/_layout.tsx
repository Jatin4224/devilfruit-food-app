import { Slot } from "expo-router";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { useFonts } from "expo-font";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Nunito_400Regular } from "@expo-google-fonts/nunito";
import { CinzelDecorative_700Bold } from "@expo-google-fonts/cinzel-decorative";

const queryClient = new QueryClient();

export default function RootLayout() {
  let [fontsLoaded] = useFonts({
    Nunito_400Regular,
    CinzelDecorative_700Bold,
  });

  if (!fontsLoaded) return null;
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <QueryClientProvider client={queryClient}>
        <Slot />
      </QueryClientProvider>
    </GestureHandlerRootView>
  );
}
