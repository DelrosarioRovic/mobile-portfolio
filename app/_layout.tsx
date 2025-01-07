import { ThemeProvider } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { StatusBar } from 'expo-status-bar';
import { useEffect } from 'react';
import { Text, View } from 'react-native';
import "../global.css";
import 'react-native-reanimated';
import { useColorScheme } from '@/hooks/useColorScheme';
import { DarkTheme, DefaultTheme } from '@/constants/Colors';

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [loaded, error] = useFonts({
    poppinsBlack: require('../assets/fonts/poppins-black.ttf'),
    poppinsBold: require('../assets/fonts/poppins-bold.ttf'),
    poppinsExtrabold: require('../assets/fonts/poppins-extrabold.ttf'),
    poppinsMedium: require('../assets/fonts/poppins-medium.ttf'),
    poppinsRegular: require('../assets/fonts/poppins-regular.ttf'),
    poppinsSemibold: require('../assets/fonts/poppins-semibold.ttf'),
    poppinsThin: require('../assets/fonts/poppins-thin.ttf'),
    poppinsItalic: require('../assets/fonts/poppins-italic.ttf'),
  });

  useEffect(() => {
    if (error) throw error;

    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded, error]);

  if (!loaded && !error) return null;
  
  return (
    <ThemeProvider value={colorScheme === 'light' ? DarkTheme : DefaultTheme}>
      <SafeAreaView style={{ flex: 1 }}>
        <View
          className="bg-[#1e293a] px-5"
          style={{
            shadowColor: '#06092e', // Shadow color
            shadowOpacity: 0.25,    // Opacity of shadow
            shadowOffset: { width: 0, height: 2 }, // Offset (x, y)
            shadowRadius: 3.84,     // Shadow blur radius
            elevation: 5,           // Android elevation for shadows
          }}
        >
          <Text className="font-black text-[36px] text-blue-500">R</Text>
        </View>
        <Stack>
          <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
          <Stack.Screen name="+not-found" />
        </Stack>
      </SafeAreaView>
      <StatusBar style="auto" />
    </ThemeProvider>
  );
}
