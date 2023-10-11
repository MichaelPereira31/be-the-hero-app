import FontAwesome from '@expo/vector-icons/FontAwesome';
import { DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { SplashScreen, Stack } from 'expo-router';

export default function Layout() {
  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
    ...FontAwesome.font,
  });

  if (!loaded) return <SplashScreen />

  return (
    <ThemeProvider value={DefaultTheme}>
      <Stack initialRouteName='login'>
        <Stack.Screen name="login" />
      </Stack>
    </ThemeProvider>
  );
}
