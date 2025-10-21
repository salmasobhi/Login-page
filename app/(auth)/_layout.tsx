import { Stack } from "expo-router";

export default function AuthLayout() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="OnboradingScreen" />
      <Stack.Screen name="loginScreenRQ" />
    </Stack>
  );
}
