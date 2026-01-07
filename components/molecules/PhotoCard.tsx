import React from 'react';
import { Image, Dimensions, View, Text } from 'react-native';
import Animated from 'react-native-reanimated';
import { GestureDetector } from 'react-native-gesture-handler';
import { PhotoData } from '../../lib/camera';
import { useSwipeGesture } from '../../lib/swipe';
import { Save, X } from 'lucide-react-native';

const { width, height } = Dimensions.get('window');

interface PhotoCardProps {
  photo: PhotoData;
  onSwipeLeft: () => void;
  onSwipeRight: () => void;
}

export const PhotoCard: React.FC<PhotoCardProps> = ({
  photo,
  onSwipeLeft,
  onSwipeRight,
}) => {
  const { panGesture, animatedStyle } = useSwipeGesture({
    onSwipeLeft,
    onSwipeRight,
  });

  return (
    <GestureDetector gesture={panGesture}>
      <Animated.View 
        style={[
          animatedStyle,
          { width: width - 40, height: height * 0.7 }
        ]}
        className="rounded-3xl overflow-hidden bg-black shadow-2xl"
      >
        <Image 
          source={{ uri: photo.uri }} 
          className="w-full h-full"
          resizeMode="cover"
        />
        
        <View className="absolute top-10 left-5 bg-red-500/90 px-5 py-2.5 rounded-lg flex-row items-center gap-2">
          <X size={20} color="#FFFFFF" />
          <Text className="text-white text-base font-bold">Descartar</Text>
        </View>
        
        <View className="absolute top-10 right-5 bg-green-500/90 px-5 py-2.5 rounded-lg flex-row items-center gap-2">
          <Save size={20} color="#FFFFFF" />
          <Text className="text-white text-base font-bold">Guardar</Text>
        </View>
      </Animated.View>
    </GestureDetector>
  );
};