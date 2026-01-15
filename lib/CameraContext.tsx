import React, { createContext, useContext, useState, useRef } from 'react';
import { useCameraPermissions } from 'expo-camera';
import * as MediaLibrary from 'expo-media-library';

export type CameraType = 'front' | 'back';

export interface PhotoData {
  uri: string;
  id: string;
  timestamp: number;
}

interface CameraContextType {
  cameraPermission: any;
  mediaPermission: any;
  requestPermissions: () => Promise<boolean>;
  facing: CameraType;
  toggleCameraFacing: () => void;
  takePicture: (cameraRef: any) => Promise<PhotoData | null>;
  photos: PhotoData[];
  saveToGallery: (uri: string) => Promise<boolean>;
  deletePhoto: (id: string) => void;
}

const CameraContext = createContext<CameraContextType | undefined>(undefined);

export const CameraProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [cameraPermission, requestCameraPermission] = useCameraPermissions();
  const [mediaPermission, requestMediaPermission] = MediaLibrary.usePermissions();
  const [facing, setFacing] = useState<CameraType>('back');
  const [photos, setPhotos] = useState<PhotoData[]>([]);

  const toggleCameraFacing = () => {
    setFacing(current => (current === 'back' ? 'front' : 'back'));
  };

  const takePicture = async (cameraRef: any) => {
    if (!cameraRef) return null;

    try {
      const photo = await cameraRef.takePictureAsync({
        quality: 0.8,
        base64: false,
        exif: false,
      });

      const newPhoto: PhotoData = {
        uri: photo.uri,
        id: Date.now().toString(),
        timestamp: Date.now(),
      };

      setPhotos(prev => [newPhoto, ...prev]);
      return newPhoto;
    } catch (error) {
      console.error('Error taking picture:', error);
      return null;
    }
  };

  const saveToGallery = async (uri: string) => {
    try {
      if (!mediaPermission?.granted) {
        const { granted } = await requestMediaPermission();
        if (!granted) {
          throw new Error('Permission to access media library denied');
        }
      }

      const asset = await MediaLibrary.createAssetAsync(uri);
      await MediaLibrary.createAlbumAsync('Pawder', asset, false);
      return true;
    } catch (error) {
      console.error('Error saving to gallery:', error);
      return false;
    }
  };

  const deletePhoto = (id: string) => {
    setPhotos(prev => prev.filter(photo => photo.id !== id));
  };

  const requestPermissions = async () => {
    const cameraResult = await requestCameraPermission();
    const mediaResult = await requestMediaPermission();
    return cameraResult.granted && mediaResult.granted;
  };

  const value = {
    cameraPermission,
    mediaPermission,
    requestPermissions,
    facing,
    toggleCameraFacing,
    takePicture,
    photos,
    saveToGallery,
    deletePhoto,
  };

  return <CameraContext.Provider value={value}>{children}</CameraContext.Provider>;
};

export const useCameraContext = () => {
  const context = useContext(CameraContext);
  if (context === undefined) {
    throw new Error('useCameraContext must be used within a CameraProvider');
  }
  return context;
};

export const checkAllPermissions = (cameraPermission: any, mediaPermission: any) => {
  return cameraPermission?.granted && mediaPermission?.granted;
};