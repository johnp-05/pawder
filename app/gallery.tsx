import React from 'react';
import { View, Text } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Stack, useRouter } from 'expo-router';
import { GalleryView } from '../components/organisms/GalleryView';
import { IconButton } from '../components/atoms/IconButton';
import { ArrowLeft, Heart, X } from 'lucide-react-native';

export default function GalleryScreen() {
  const router = useRouter();

  return (
    <View className="flex-1 bg-gray-900">
      <Stack.Screen
        options={{
          headerShown: true,
          headerStyle: { backgroundColor: '#111827' },
          headerTintColor: '#FFFFFF',
          headerTitle: 'Tus Fotos',
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
      
      {/* Instrucciones mejoradas */}
      <View className="py-4 px-6 bg-gray-800/90">
        <Text className="text-white text-center text-base font-semibold mb-3">
          Desliza las fotos
        </Text>
        
        <View className="flex-row justify-around items-center">
          <View className="items-center flex-1">
            <View className="flex-row items-center gap-2 mb-1">
              <X size={20} color="#EF4444" strokeWidth={2.5} />
              <Text className="text-red-400 font-bold">Descartar</Text>
            </View>
            <Text className="text-gray-400 text-xs text-center">
              ← Desliza izquierda
            </Text>
          </View>
          
          <View className="w-px h-12 bg-gray-600" />
          
          <View className="items-center flex-1">
            <View className="flex-row items-center gap-2 mb-1">
              <Heart size={20} color="#10B981" strokeWidth={2.5} fill="#10B981" />
              <Text className="text-green-400 font-bold">Guardar</Text>
            </View>
            <Text className="text-gray-400 text-xs text-center">
              Desliza derecha →
            </Text>
          </View>
        </View>
      </View>
      
      <GalleryView />
    </View>
  );
}