import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'

const TypeAnimation = () => {
  const [text, setText] = useState("");
  const words = ["Like Coding.", "love web development."];
  const delay = 100;

  useEffect(() => {
        let currentIndex = 0;
        let currentWord = words[currentIndex];
        let currentLength = 0;
        let isDeleting = false;

        const intervalId = setInterval(() => {
          if (isDeleting) {
            currentLength--;
          } else {
            currentLength++;
          }

          setText(currentWord.substring(0, currentLength));

          if (currentLength === currentWord.length + 1) {
            isDeleting = true;
          }

          if (currentLength === 0) {
            isDeleting = false;
            currentIndex = (currentIndex + 1) % words.length;
            currentWord = words[currentIndex];
          }
        }, delay);

        return () => clearInterval(intervalId);
    }, []);



  
  return (
    <View>
      <Text className='relative text-blue-500 font-semibold text-2xl mb-7 before:absolute before:bottom-0 before:h-0.5 before:w-full before:bg-blue-500'>
        <Text className="relative text-white">I</Text>
            {" "+text}
        </Text>
    </View>
  )
}

export default TypeAnimation

const styles = StyleSheet.create({})
