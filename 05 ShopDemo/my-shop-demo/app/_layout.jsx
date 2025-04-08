import { Stack } from "expo-router";
import ShopContextProvider  from './ShopContextProvider';

export default function RootLayout() {
  return (
    <ShopContextProvider>
      <Stack
        screenOptions={{ headerShown: false, }}>
        <Stack.Screen name="index" />
        <Stack.Screen name="registration" />
        {/* <Stack.Screen name="./DrawerDir/(tabs)" options={{ headerShown: false }} /> */}
      </Stack>
    </ShopContextProvider>
  );
}
