import { useSharedValue, useAnimatedStyle, withSpring, runOnJS } from 'react-native-reanimated';
import { Gesture } from 'react-native-gesture-handler';

export const SWIPE_THRESHOLD = 100; // Umbral de 100px como indica el documento
export const SCREEN_WIDTH = 375; // Se ajustará dinámicamente

export interface SwipeConfig {
  onSwipeLeft?: () => void;
  onSwipeRight?: () => void;
  threshold?: number;
}

export const useSwipeGesture = (config: SwipeConfig) => {
  const { onSwipeLeft, onSwipeRight, threshold = SWIPE_THRESHOLD } = config;
  
  const translateX = useSharedValue(0);
  const translateY = useSharedValue(0);
  const scale = useSharedValue(1);
  const opacity = useSharedValue(1);

  const panGesture = Gesture.Pan()
    .onUpdate((event) => {
      translateX.value = event.translationX;
      translateY.value = event.translationY * 0.3; // Movimiento vertical reducido
      
      // Calcular escala y opacidad basado en distancia
      const distance = Math.abs(event.translationX);
      scale.value = 1 - distance / 1000;
      opacity.value = 1 - distance / 500;
    })
    .onEnd((event) => {
      const distance = event.translationX;
      const velocity = event.velocityX;

      // Física del Swipe: < 100px regresa, > 100px ejecuta acción
      if (Math.abs(distance) > threshold || Math.abs(velocity) > 500) {
        // Ejecutar acción
        if (distance > 0 && onSwipeRight) {
          translateX.value = withSpring(500, { damping: 20 });
          opacity.value = withSpring(0);
          runOnJS(onSwipeRight)();
        } else if (distance < 0 && onSwipeLeft) {
          translateX.value = withSpring(-500, { damping: 20 });
          opacity.value = withSpring(0);
          runOnJS(onSwipeLeft)();
        }
      } else {
        // Regresar a posición original
        translateX.value = withSpring(0);
        translateY.value = withSpring(0);
        scale.value = withSpring(1);
        opacity.value = withSpring(1);
      }
    });

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [
      { translateX: translateX.value },
      { translateY: translateY.value },
      { scale: scale.value },
      { rotate: `${translateX.value / 20}deg` },
    ],
    opacity: opacity.value,
  }));

  const reset = () => {
    translateX.value = withSpring(0);
    translateY.value = withSpring(0);
    scale.value = withSpring(1);
    opacity.value = withSpring(1);
  };

  return {
    panGesture,
    animatedStyle,
    reset,
    translateX,
  };
};

export const usePinchGesture = () => {
  const scale = useSharedValue(1);
  
  const pinchGesture = Gesture.Pinch()
    .onUpdate((event) => {
      scale.value = Math.max(0.5, Math.min(event.scale, 3));
    })
    .onEnd(() => {
      scale.value = withSpring(1);
    });

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ scale: scale.value }],
  }));

  return { pinchGesture, animatedStyle };
};

export const useRotationGesture = () => {
  const rotation = useSharedValue(0);
  
  const rotationGesture = Gesture.Rotation()
    .onUpdate((event) => {
      rotation.value = event.rotation;
    })
    .onEnd(() => {
      rotation.value = withSpring(0);
    });

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ rotate: `${rotation.value}rad` }],
  }));

  return { rotationGesture, animatedStyle };
};