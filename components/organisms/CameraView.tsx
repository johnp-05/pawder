import { CameraView as ExpoCameraView } from 'expo-camera';
import * as Haptics from 'expo-haptics';
import { useRouter } from 'expo-router';
import React, { useRef, useState, useEffect } from 'react';
import { Alert, View, Text, ActivityIndicator } from 'react-native';
import { useCameraContext } from '../../lib/CameraContext';
import { CameraControl } from '../molecules/CameraControl';

export const CameraView: React.FC = () => {
  const cameraRef = useRef<any>(null);
  const router = useRouter();
  const [isCameraReady, setIsCameraReady] = useState(false);
  const [error, setError] = useState<string | null>(null);
  
  const {
    facing,
    toggleCameraFacing,
    takePicture,
    photos,
    cameraPermission,
  } = useCameraContext();

  useEffect(() => {
    console.log('Camera permission status:', cameraPermission);
    console.log('Camera facing:', facing);
  }, [cameraPermission, facing]);

  const handleCameraReady = () => {
    console.log('Camera is ready');
    setIsCameraReady(true);
  };

  const handleMountError = (error: any) => {
    console.error('Camera mount error:', error);
    setError(error?.message || 'Error al inicializar la cámara');
  };

  const handleCapture = async () => {
    if (!isCameraReady) {
      Alert.alert('Espera', 'La cámara aún no está lista');
      return;
    }

    try {
      await Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
      const photo = await takePicture(cameraRef.current);
      
      if (photo) {
        await Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success);
        Alert.alert('¡Foto tomada!', 'Ve a la galería para verla');
      } else {
        Alert.alert('Error', 'No se pudo tomar la foto');
      }
    } catch (error) {
      console.error('Error capturing photo:', error);
      Alert.alert('Error', 'Ocurrió un error al tomar la foto');
    }
  };

  const handleFlip = async () => {
    await Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
    toggleCameraFacing();
  };

  const handleViewGallery = () => {
    if (photos.length === 0) {
      Alert.alert('Sin fotos', 'Aún no has tomado ninguna foto.');
      return;
    }
    router.push('/gallery');
  };

  if (error) {
    return (
      <View className="flex-1 bg-black justify-center items-center px-10">
        <Text className="text-white text-xl mb-4">Error de Cámara</Text>
        <Text className="text-gray-400 text-center">{error}</Text>
      </View>
    );
  }

  return (
    <View className="flex-1 bg-black">
      <ExpoCameraView
        ref={cameraRef}
        style={{ flex: 1 }}
        facing={facing}
        onCameraReady={handleCameraReady}
        onMountError={handleMountError}
      />
      
      {!isCameraReady && (
        <View className="absolute inset-0 justify-center items-center bg-black">
          <ActivityIndicator size="large" color="#FFFFFF" />
          <Text className="text-white mt-4">Iniciando cámara...</Text>
        </View>
      )}
      
      <View className="absolute bottom-0 left-0 right-0">
        <CameraControl
          onCapture={handleCapture}
          onFlip={handleFlip}
          onViewGallery={handleViewGallery}
          photoCount={photos.length}
        />
      </View>
    </View>
  );
};