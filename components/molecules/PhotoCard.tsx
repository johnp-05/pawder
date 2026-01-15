import React from 'react';
import { Image, Dimensions, View, Text } from 'react-native';
import Animated, { 
  interpolate,
  useAnimatedStyle,
  Extrapolate 
} from 'react-native-reanimated';
import { GestureDetector } from 'react-native-gesture-handler';
import { PhotoData } from '../../lib/camera';
import { useSwipeGesture } from '../../lib/swipe';
import { Heart, X } from 'lucide-react-native';

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
  const { panGesture, animatedStyle, translateX } = useSwipeGesture({
    onSwipeLeft,
    onSwipeRight,
  });

  // Animación para el sello "NOPE"
  const nopeStyle = useAnimatedStyle(() => {
    const opacity = interpolate(
      translateX.value,
      [-150, -50, 0],
      [1, 0.8, 0],
      Extrapolate.CLAMP
    );
    
    const rotate = interpolate(
      translateX.value,
      [-150, 0],
      [-20, 0],
      Extrapolate.CLAMP
    );

    return {
      opacity,
      transform: [{ rotate: `${rotate}deg` }],
    };
  });

  // Animación para el sello "LIKE"
  const likeStyle = useAnimatedStyle(() => {
    const opacity = interpolate(
      translateX.value,
      [0, 50, 150],
      [0, 0.8, 1],
      Extrapolate.CLAMP
    );
    
    const rotate = interpolate(
      translateX.value,
      [0, 150],
      [0, 20],
      Extrapolate.CLAMP
    );

    return {
      opacity,
      transform: [{ rotate: `${rotate}deg` }],
    };
  });

  return (
    <GestureDetector gesture={panGesture}>
      <Animated.View 
        style={[
          animatedStyle,
          { 
            width: width - 40, 
            height: height * 0.7,
          }
        ]}
        className="rounded-3xl overflow-hidden bg-white shadow-2xl"
      >
        {/* Imagen */}
        <Image 
          source={{ uri: photo.uri }} 
          className="w-full h-full"
          resizeMode="cover"
        />
        
        {/* Gradiente inferior */}
        <View className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black/60 to-transparent" />
        
        {/* Sello NOPE (izquierda superior) */}
        <Animated.View 
          style={[nopeStyle]}
          className="absolute top-12 left-8"
        >
          <View className="border-4 border-red-500 rounded-lg px-4 py-2 rotate-[-20deg]">
            <Text className="text-red-500 text-4xl font-black tracking-widest">
              NOPE
            </Text>
          </View>
        </Animated.View>
        
        {/* Sello LIKE (derecha superior) */}
        <Animated.View 
          style={[likeStyle]}
          className="absolute top-12 right-8"
        >
          <View className="border-4 border-green-500 rounded-lg px-4 py-2 rotate-[20deg]">
            <Text className="text-green-500 text-4xl font-black tracking-widest">
              LIKE
            </Text>
          </View>
        </Animated.View>

        {/* Info en la parte inferior */}
        <View className="absolute bottom-6 left-6 right-6">
          <Text className="text-white text-xl font-bold mb-1">
            Foto {photo.id}
          </Text>
          <Text className="text-white/80 text-sm">
            {new Date(photo.timestamp).toLocaleDateString('es-ES', {
              day: 'numeric',
              month: 'long',
              hour: '2-digit',
              minute: '2-digit'
            })}
          </Text>
        </View>

        {/* Indicadores de acción (iconos flotantes) */}
        <View className="absolute bottom-32 left-0 right-0 flex-row justify-around px-12">
          <View className="items-center opacity-30">
            <View className="w-16 h-16 rounded-full bg-red-500 items-center justify-center">
              <X size={32} color="#FFF" strokeWidth={3} />
            </View>
          </View>
          
          <View className="items-center opacity-30">
            <View className="w-16 h-16 rounded-full bg-green-500 items-center justify-center">
              <Heart size={32} color="#FFF" strokeWidth={3} fill="#FFF" />
            </View>
          </View>
        </View>
      </Animated.View>
    </GestureDetector>
  );
};