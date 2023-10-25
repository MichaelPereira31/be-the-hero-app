import { Stack } from "expo-router";

const Layout = () => {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen
        name="complete-registration"
        options={{ headerShown: false }}
      />
      <Stack.Screen name="home" options={{ headerShown: false }} />
    </Stack>
  );
};

export default Layout;
