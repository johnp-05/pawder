import { create } from 'zustand';
import { PhotoData } from './camera';

interface AppState {
  photos: PhotoData[];
  savedPhotos: PhotoData[];
  currentPhotoIndex: number;
  
  addPhoto: (photo: PhotoData) => void;
  savePhoto: (photo: PhotoData) => void;
  deletePhoto: (id: string) => void;
  setCurrentPhotoIndex: (index: number) => void;
  clearPhotos: () => void;
}

// Nota: Zustand no está instalado, usaremos Context en su lugar
// Este es un ejemplo de cómo se estructuraría con Zustand

export const useAppStore = create<AppState>((set) => ({
  photos: [],
  savedPhotos: [],
  currentPhotoIndex: 0,
  
  addPhoto: (photo) => set((state) => ({
    photos: [photo, ...state.photos],
  })),
  
  savePhoto: (photo) => set((state) => ({
    savedPhotos: [...state.savedPhotos, photo],
  })),
  
  deletePhoto: (id) => set((state) => ({
    photos: state.photos.filter(p => p.id !== id),
    savedPhotos: state.savedPhotos.filter(p => p.id !== id),
  })),
  
  setCurrentPhotoIndex: (index) => set({ currentPhotoIndex: index }),
  
  clearPhotos: () => set({ photos: [], currentPhotoIndex: 0 }),
}));