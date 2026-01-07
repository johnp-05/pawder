import React from 'react';
import { View } from 'react-native';
import { IconButton } from '../atoms/IconButton';
import { Images, Circle, SwitchCamera } from 'lucide-react-native';

interface CameraControlsProps {
  onCapture: () => void;
  onFlip: () => void;
  onViewGallery: () => void;
  photoCount: number;
}

export const CameraControls: React.FC<CameraControlsProps> = ({
  onCapture,
  onFlip,
  onViewGallery,
  photoCount,
}) => {
  return (
    <View className="flex-row justify-around items-center py-5 px-10 bg-black/30">
      <IconButton
        icon={Images}
        onPress={onViewGallery}
      />
      
      <IconButton
        icon={Circle}
        onPress={onCapture}
        size={72}
        className="w-20 h-20 rounded-full bg-white/90"
        color="#000000"
      />
      
      <IconButton
        icon={SwitchCamera}
        onPress={onFlip}
        onLongPress={() => console.log('Long press: More options')}
      />
    </View>
  );
};