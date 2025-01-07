import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { ThemedText } from '@/components/ThemedText';

export default function RootLayout() {
  return (
    <View className='px-5 p-10'>
      <View>
        <Text>Home</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({})