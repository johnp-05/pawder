import React from 'react';
import { Pressable } from 'react-native';
import { LucideIcon } from 'lucide-react-native';

interface IconButtonProps {
  onPress: () => void;
  onLongPress?: () => void;
  icon: LucideIcon;
  size?: number;
  color?: string;
  className?: string;
  disabled?: boolean;
}

export const IconButton: React.FC<IconButtonProps> = ({
  onPress,
  onLongPress,
  icon: Icon,
  size = 32,
  color = '#FFFFFF',
  className = '',
  disabled = false,
}) => {
  return (
    <Pressable
      onPress={onPress}
      onLongPress={onLongPress}
      disabled={disabled}
      className={`w-14 h-14 rounded-full bg-black/40 items-center justify-center active:opacity-70 active:scale-95 ${disabled ? 'opacity-30' : ''} ${className}`}
    >
      <Icon size={size} color={color} />
    </Pressable>
  );
};