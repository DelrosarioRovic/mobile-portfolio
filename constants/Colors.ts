/**
 * Below are the colors that are used in the app. The colors are defined in the light and dark mode.
 * There are many other ways to style your app. For example, [Nativewind](https://www.nativewind.dev/), [Tamagui](https://tamagui.dev/), [unistyles](https://reactnativeunistyles.vercel.app), etc.
 */
import { fonts } from '../node_modules/@react-navigation/native/src/theming/fonts';

const tintColorLight = '#0a7ea4';
const tintColorDark = '#fff';

export const Colors = {
  light: {
    text: '#11181C',
    background: '#fff',
    tint: tintColorLight,
    icon: '#687076',
    tabIconDefault: '#687076',
    tabIconSelected: tintColorLight,
  },
  dark: {
    text: '#fff',
    background: '#1e293b',
    tint: tintColorDark,
    icon: '#fff',
    tabIconDefault: '#fff',
    tabIconSelected: tintColorDark,
  },
};

export const DefaultTheme = {
  dark: false,
  colors: {
    primary: '#3b82f6',
    background: '#fff',
    card: '#fff',
    text: '#121212',
    border: 'rgb(39, 39, 41)',
    notification: 'rgb(255, 69, 58)',
  },
  fonts,
}
export const DarkTheme = {
  dark: true,
  colors: {
    primary: '#3b82f6',
    background: '#1e293a',
    card: '#1e293b',
    text: '#ffffff',
    border: 'rgb(39, 39, 41)',
    notification: 'rgb(255, 69, 58)',
  },
  fonts,
};
