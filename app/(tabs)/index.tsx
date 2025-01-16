import { StyleSheet, Text, View, TouchableOpacity, ScrollView, Image } from 'react-native';
import React from 'react';
import TypeAnimation from '@/components/animation/TypeAnimation';

export default function RootLayout() {
  return (
    <ScrollView 
      style={{ flex: 1 }}
      contentContainerStyle={{ padding: 10 }} // Adds padding to the scrollable content
    >
      <View className='px-5 flex flex-col gap-10'>
        <View className='flex flex-col gap-y-5'>
          <Text  
            style={{ fontFamily: 'lebelleAuroreRegular' }} 
            className='italic text-lg text-blue-500 opacity-80'>{'<html>'}
          </Text>
          <Text  
            style={{ fontFamily: 'lebelleAuroreRegular' }} 
            className='italic text-lg text-blue-500 opacity-80 ml-5'>{'<body>'}
          </Text>
        </View>
        <View className='py-10 m-auto flex flex-col gap-10'>
          <View className='flex flex-col items-start'>
            <Text className='text-5xl font-black text-white'>HI👋,</Text>
            <Text className='text-5xl font-black text-white'>I'm Rovic</Text>
            <Text className='text-5xl font-black text-white'>Web Developer</Text>
          </View>
          <View className='flex flex-col justify-start items-start w-full'>
            <TypeAnimation />
            <TouchableOpacity className='border border-blue-500 px-3 py-2 text-blue-500'>
              <Text className='text-blue-500'>Resume</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View className='flex flex-col gap-2 items-start'>
          <View className='flex flex-col'>
            <Text className='text-4xl text-white font-bold'>ABOUT</Text>
            <View className='h-0.5 bg-blue-500'></View>
          </View>
          <View className='flex flex-col gap-8'>
            <Text className='text-lg text-white'>Hi, I'm Rovic, a Web Developer with a passion for creating fully functional websites. Although I'm new to this field, I'm excited to learn and grow in order to achieve my goals.</Text>
            <Text className='text-lg text-white'>My long-term goal is to become a full-stack web developer and contribute to the creation of innovative and user-friendly websites. In the short term, I aim to gain more experience by working on challenging projects and collaborating with other developers. I believe that continuous learning and improvement are key to becoming a successful web developer.</Text>
            <Text className='text-lg text-white'>I have gained some experience working on projects while I was studying, which you can see here. Through these projects, I was able to learn more about web development. I'm eager to continue expanding my skills in programming and take on new challenges.</Text>
            <Text className='text-lg text-white'>Thanks for visiting my website. I'm eager to connect with you and explore how I can contribute to your organization.</Text>
          </View>
          <View className='flex items-center w-full'>
            <Image
              className=''
              source={require('./../../assets/images/rovic.png')} // No `uri` here
              style={{ width: 300, height: 300 }}
            />
          </View>
        </View>
        <View className='flex flex-col gap-y-5 mb-14'>
          <Text  
            style={{ fontFamily: 'lebelleAuroreRegular' }} 
            className='italic text-lg text-blue-500 opacity-80 ml-5'>{'<body>'}
          </Text>
          <Text  
            style={{ fontFamily: 'lebelleAuroreRegular' }} 
            className='italic text-lg text-blue-500 opacity-80'>{'<html>'}
          </Text>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({});
