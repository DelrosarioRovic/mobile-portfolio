import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

export default function RootLayout() {
  return (
    <View className='px-5 p-10'>
      <View>
        <Text  
          style={{ fontFamily: 'lebelleAuroreRegular' }} 
          className='italic text-lg text-blue-500 opacity-80'>{'<html>'}
        </Text>
      </View>
      <View>
        <Text  
          style={{ fontFamily: 'lebelleAuroreRegular' }} 
          className='italic text-lg text-blue-500 opacity-80 ml-5'>{'<body>'}
        </Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({})