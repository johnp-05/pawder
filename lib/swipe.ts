import { useSharedValue, useAnimatedStyle, withSpring, runOnJS } from 'react-native-reanimated';
import { Gesture } from 'react-native-gesture-handler';
import { Dimensions } from 'react-native';

const SCREEN_WIDTH = Dimensions.get('window').width;
export const SWIPE_THRESHOLD = 100;
const SCALE_FACTOR = 1000;
const OPACITY_FACTOR = 500;
const VERTICAL_MOVEMENT_REDUCTION = 0.3;
const ROTATION_DIVISOR = 20;
const SPRING_DAMPING = 20;
const MIN_VELOCITY = 500;
const EXIT_DISTANCE = 500;

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
      translateY.value = event.translationY * VERTICAL_MOVEMENT_REDUCTION;
      
      const distance = Math.abs(event.translationX);
      scale.value = 1 - distance / SCALE_FACTOR;
      opacity.value = 1 - distance / OPACITY_FACTOR;
    })
    .onEnd((event) => {
      const distance = event.translationX;
      const velocity = event.velocityX;

      if (Math.abs(distance) > threshold || Math.abs(velocity) > MIN_VELOCITY) {
        if (distance > 0 && onSwipeRight) {
          translateX.value = withSpring(EXIT_DISTANCE, { damping: SPRING_DAMPING });
          opacity.value = withSpring(0);
          runOnJS(onSwipeRight)();
        } else if (distance < 0 && onSwipeLeft) {
          translateX.value = withSpring(-EXIT_DISTANCE, { damping: SPRING_DAMPING });
          opacity.value = withSpring(0);
          runOnJS(onSwipeLeft)();
        }
      } else {
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
      { rotate: `${translateX.value / ROTATION_DIVISOR}deg` },
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