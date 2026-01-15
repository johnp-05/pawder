import { Stack } from "expo-router";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { CameraProvider } from "../lib/CameraContext";
import "../global.css";

export default function RootLayout() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <CameraProvider>
        <Stack screenOptions={{ headerShown: false }}>
          <Stack.Screen name="(tabs)" />
          <Stack.Screen name="gallery" />
        </Stack>
      </CameraProvider>
    </GestureHandlerRootView>
  );
}