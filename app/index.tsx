import React, { useEffect } from 'react';
import { View, Text, Alert } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { useCameraLogic, checkAllPermissions } from '../lib/camera';
import { CameraView } from '../components/organisms/CameraView';
import { Button } from '../components/atoms/Button';
import { Camera, Mic, Images } from 'lucide-react-native';

export default function Index() {
  const { cameraPermission, mediaPermission, requestPermissions } = useCameraLogic();

  useEffect(() => {
    checkPermissions();
  }, []);

  const checkPermissions = async () => {
    if (!checkAllPermissions(cameraPermission, mediaPermission)) {
      // Permisos no concedidos, se mostrara la pantalla de permisos
    }
  };

  const handleRequestPermissions = async () => {
    const granted = await requestPermissions();
    if (!granted) {
      Alert.alert(
        'Permisos requeridos',
        'Esta app necesita acceso a la camara y la galeria para funcionar correctamente.',
        [{ text: 'OK' }]
      );
    }
  };

  if (!checkAllPermissions(cameraPermission, mediaPermission)) {
    return (
      <View className="flex-1 bg-gray-900 justify-center items-center px-10">
        <StatusBar style="light" />
        <Text className="text-white text-3xl font-bold mb-5">SwapCamera</Text>
        <Text className="text-gray-400 text-lg text-center mb-8">
          Para usar esta app necesitamos acceso a:
        </Text>
        
        <View className="mb-10 gap-4">
          <View className="flex-row items-center gap-3">
            <Camera size={24} color="#FFFFFF" />
            <Text className="text-white text-lg">Camara</Text>
          </View>
          <View className="flex-row items-center gap-3">
            <Mic size={24} color="#FFFFFF" />
            <Text className="text-white text-lg">Microfono</Text>
          </View>
          <View className="flex-row items-center gap-3">
            <Images size={24} color="#FFFFFF" />
            <Text className="text-white text-lg">Galeria</Text>
          </View>
        </View>
        
        <Button
          title="Conceder Permisos"
          onPress={handleRequestPermissions}
          className="min-w-[200px]"
        />
      </View>
    );
  }

  return (
    <>
      <StatusBar style="light" />
      <CameraView />
    </>
  );
}