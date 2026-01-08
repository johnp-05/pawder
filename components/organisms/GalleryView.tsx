import React, { useState } from 'react';
import { View, FlatList, Alert, Text } from 'react-native';
import { PhotoCard } from '../molecules/PhotoCard';
import { useCameraLogic } from '../../lib/camera';
import * as Haptics from 'expo-haptics';
import { Camera } from 'lucide-react-native';

export const GalleryView: React.FC = () => {
  const { photos, saveToGallery, deletePhoto } = useCameraLogic();
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleSwipeRight = async () => {
    const currentPhoto = photos[currentIndex];
    if (currentPhoto) {
      await Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success);
      const saved = await saveToGallery(currentPhoto.uri);
      
      if (saved) {
        Alert.alert('Guardada', 'Foto guardada en tu galeria');
      } else {
        Alert.alert('Error', 'No se pudo guardar la foto');
      }
      
      if (currentIndex < photos.length - 1) {
        setCurrentIndex(currentIndex + 1);
      }
    }
  };

  const handleSwipeLeft = async () => {
    const currentPhoto = photos[currentIndex];
    if (currentPhoto) {
      await Haptics.notificationAsync(Haptics.NotificationFeedbackType.Warning);
      deletePhoto(currentPhoto.id);
      
      if (currentIndex >= photos.length - 1 && currentIndex > 0) {
        setCurrentIndex(currentIndex - 1);
      }
    }
  };

  if (photos.length === 0) {
    return (
      <View className="flex-1 justify-center items-center bg-gray-900">
        <Camera size={64} color="#6B7280" />
        <Text className="text-gray-400 text-lg mt-4">No hay fotos</Text>
      </View>
    );
  }

  return (
    <View className="flex-1 bg-gray-900">
      <FlatList
        data={photos}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        renderItem={({ item, index }) => (
          <View className="flex-1 justify-center items-center px-5" style={{ width: 375 }}>
            {index === currentIndex && (
              <PhotoCard
                photo={item}
                onSwipeLeft={handleSwipeLeft}
                onSwipeRight={handleSwipeRight}
              />
            )}
          </View>
        )}
        keyExtractor={(item) => item.id}
        onMomentumScrollEnd={(event) => {
          const index = Math.floor(
            event.nativeEvent.contentOffset.x /
            event.nativeEvent.layoutMeasurement.width
          );
          setCurrentIndex(index);
        }}
      />
    </View>
  );
};