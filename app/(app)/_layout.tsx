import { Stack } from 'expo-router'

export default function AppLayout() {
  return (
    <Stack screenOptions={{ animation: 'fade' }}>
      <Stack.Screen name='home' options={{ headerShown: false, title: 'Home' }} />
      <Stack.Screen name='(tabs)' options={{ headerShown: false }} />
    </Stack>
  )
}
