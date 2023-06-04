import React, { FC } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

interface CustomButtonProps {
  title: string;
  onPress: () => void;
  bgColor?: string;
}

const CustomButton: FC<CustomButtonProps> = ({ title, onPress, bgColor = '#dda640' }) => {
  return (
    <TouchableOpacity style={[styles.buttonContainer, { backgroundColor: bgColor }]} onPress={onPress}>
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default CustomButton;
