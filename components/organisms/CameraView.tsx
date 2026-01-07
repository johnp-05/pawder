import { CameraView as ExpoCameraView } from 'expo-camera';
import * as Haptics from 'expo-haptics';
import { useRouter } from 'expo-router';
import React, { useRef } from 'react';
import { Alert, View } from 'react-native';
import { useCameraLogic } from '../../lib/camera';
import { CameraControls } from '../molecules/CameraControl';

export const CameraView: React.FC = () => {
  const cameraRef = useRef<any>(null);
  const router = useRouter();
  
  const {
    facing,
    toggleCameraFacing,
    takePicture,
    photos,
  } = useCameraLogic();

  const handleCapture = async () => {
    await Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
    const photo = await takePicture(cameraRef.current);
    
    if (photo) {
      await Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success);
    }
  };

  const handleFlip = async () => {
    await Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
    toggleCameraFacing();
  };

  const handleViewGallery = () => {
    if (photos.length === 0) {
      Alert.alert('Sin fotos', 'Aun no has tomado ninguna foto.');
      return;
    }
    router.push('/(tabs)/profile');
  };

  return (
    <View className="flex-1 bg-black">
      <ExpoCameraView
        ref={cameraRef}
        className="flex-1"
        facing={facing}
      />
      
      <View className="absolute bottom-0 left-0 right-0">
        <CameraControls
          onCapture={handleCapture}
          onFlip={handleFlip}
          onViewGallery={handleViewGallery}
          photoCount={photos.length}
        />
      </View>
    </View>
  );
};