import React from 'react';
import { Pressable, Text } from 'react-native';

interface ButtonProps {
  onPress: () => void;
  title: string;
  variant?: 'primary' | 'secondary' | 'danger';
  disabled?: boolean;
  className?: string;
}

export const Button: React.FC<ButtonProps> = ({
  onPress,
  title,
  variant = 'primary',
  disabled = false,
  className = '',
}) => {
  const baseClasses = 'px-6 py-3 rounded-xl items-center justify-center';
  
  const variantClasses = {
    primary: 'bg-blue-500 active:bg-blue-600',
    secondary: 'bg-gray-500 active:bg-gray-600',
    danger: 'bg-red-500 active:bg-red-600',
  };
  
  const disabledClasses = disabled ? 'opacity-50' : '';
  
  return (
    <Pressable
      onPress={onPress}
      disabled={disabled}
      className={`${baseClasses} ${variantClasses[variant]} ${disabledClasses} ${className}`}
    >
      <Text className={`text-white text-base font-semibold ${disabled ? 'text-gray-300' : ''}`}>
        {title}
      </Text>
    </Pressable>
  );
};