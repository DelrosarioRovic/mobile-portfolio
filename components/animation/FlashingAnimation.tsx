import { Text, View } from 'react-native';
import React, { useEffect } from 'react';
import Animated, { useSharedValue, useAnimatedStyle, withRepeat, withTiming } from 'react-native-reanimated';

const FlashingAnimation = ({ letter }: { letter: string }) => {
  const opacity = useSharedValue(0); // Start at 0

  useEffect(() => {
    // Trigger the animation once when the component mounts
    opacity.value = withRepeat(
      withTiming(0.8, { duration: 1500 }), // Fade in to 0.8 over 1.5 seconds
      -1, // Infinite repeats
      true // Reverse the animation
    );
  }, [opacity]);

  // Use the animated opacity value in the style
  const animatedStyle = useAnimatedStyle(() => ({
    opacity: opacity.value,
  }));

  return (
      <Animated.Text style={[{ fontSize: 30, fontWeight: '200', color: 'gray' }, animatedStyle]}>
        {letter}
      </Animated.Text>
  );
};

export default FlashingAnimation;
