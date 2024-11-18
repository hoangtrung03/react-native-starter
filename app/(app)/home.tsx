import CustomButton from '@/components/CustomButton'
import { router } from 'expo-router'
import React, { useRef, useState } from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import Swiper from 'react-native-swiper'

export default function Home() {
  const swiperRef = useRef<Swiper>(null)
  const [activeIndex, setActiveIndex] = useState(0)
  const onboarding = [
    {
      id: 1,
      title: 'Hello'
    },
    {
      id: 2,
      title: 'Hello1'
    },
    {
      id: 3,
      title: 'Hello2'
    }
  ]

  const isLastSlide = activeIndex === onboarding.length - 1

  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity
        onPress={() => {
          router.replace('/(auth)/sign-up')
        }}
        style={styles.skipButton}
      >
        <Text style={styles.skipText}>Skip</Text>
      </TouchableOpacity>
      <Swiper
        ref={swiperRef}
        loop={false}
        dot={<View className='w-[32px] h-[4px] mx-1 bg-[#E2E8F0] rounded-full' />}
        activeDot={<View className='w-[32px] h-[4px] mx-1 bg-[#0286FF] rounded-full' />}
        onIndexChanged={(index) => setActiveIndex(index)}
      >
        {onboarding.map((item) => (
          <View key={item.id} className='flex items-center justify-center p-5'>
            <Text className='text-md font-JakartaSemiBold text-center text-[#858585] mx-10 mt-3'>{item.title}</Text>
          </View>
        ))}
      </Swiper>
      <CustomButton
        title={isLastSlide ? 'Get Started' : 'Next'}
        onPress={() => (isLastSlide ? router.replace('/(auth)/sign-up') : swiperRef.current?.scrollBy(1))}
        styleButton={styles.button}
        styleText={{ color: '#ffffff' }}
      />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#ffffff'
  },
  skipButton: {
    width: '100%',
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    padding: 20
  },
  skipText: {
    color: '#000000',
    fontSize: 16
  },
  button: {
    width: '80%',
    marginTop: 40,
    marginBottom: 20
  }
})
