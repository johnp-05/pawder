import React from 'react';
import { View, Text } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Stack, useRouter } from 'expo-router';
import { GalleryView } from '../components/organisms/GalleryView';
import { IconButton } from '../components/atoms/IconButton';
import { ArrowLeft, ChevronLeft, ChevronRight } from 'lucide-react-native';

export default function GalleryScreen() {
  const router = useRouter();

  return (
    <View className="flex-1 bg-gray-900">
      <Stack.Screen
        options={{
          headerShown: true,
          headerStyle: { backgroundColor: '#111827' },
          headerTintColor: '#FFFFFF',
          headerTitle: 'Galeria de Fotos',
          headerLeft: () => (
            <IconButton
              icon={ArrowLeft}
              onPress={() => router.back()}
              size={24}
              className="ml-2"
            />
          ),
        }}
      />
      <StatusBar style="light" />
      
      <View className="py-5 px-5 bg-black/50">
        <View className="flex-row items-center justify-center gap-2 mb-2">
          <ChevronLeft size={20} color="#FFFFFF" />
          <Text className="text-white text-sm">Desliza izquierda para descartar</Text>
        </View>
        <View className="flex-row items-center justify-center gap-2">
          <Text className="text-white text-sm">Desliza derecha para guardar</Text>
          <ChevronRight size={20} color="#FFFFFF" />
        </View>
      </View>
      
      <GalleryView />
    </View>
  );
}