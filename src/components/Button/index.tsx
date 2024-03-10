import React from 'react';
import { Pressable, Text, PressableProps } from 'react-native';
import styles from './styles';

interface ButtonProps extends PressableProps {
  title: string;
  onPress: () => void;
}

const Button: React.FC<ButtonProps> = ({ title, onPress, ...props }) => {
  return (
    <Pressable onPress={onPress} {...props} style={({ pressed }) => [styles.button, pressed && styles.buttonPressed]}>
      <Text style={styles.text}>{title}</Text>
    </Pressable>
  );
};

export default Button;
