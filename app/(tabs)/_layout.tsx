import { Platform, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router';
import { HapticTab } from '@/components/HapticTab';
import Icon from 'react-native-vector-icons/FontAwesome6';
import IconEmail from "react-native-vector-icons/Ionicons";

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarButton: HapticTab,
        tabBarInactiveTintColor: "#fff",
        tabBarActiveTintColor: "#3b82f6",
        tabBarStyle: Platform.select({
          ios: {
            // Use a transparent background on iOS to show the blur effect
            position: 'absolute',
            backgroundColor: '#1e293b',
          },
          android: {
            position: 'absolute',
            backgroundColor: '#1e293b',
          },
          default: {
            position: 'absolute',
            backgroundColor: '#1e293b',
          },
        }),
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color }) => <Icon name="house" size={22} color={color} />,
        }}
      />
      <Tabs.Screen
        name="work"
        options={{
          title: 'Work',
          tabBarIcon: ({ color }) => <Icon name="briefcase" size={22} color={color} />,
        }}
      />
      <Tabs.Screen
        name="projects"
        options={{
          title: 'Projects',
          tabBarIcon: ({ color }) => <Icon name="folder" size={22} color={color} />,
        }}
      />
      <Tabs.Screen
        name="contact"
        options={{
          title: 'Contact',
          tabBarIcon: ({ color }) => <IconEmail size={22} name="mail" color={color} />,
        }}
      />
    </Tabs>
  )
}



const styles = StyleSheet.create({})