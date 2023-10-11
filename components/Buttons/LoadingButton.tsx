import React from "react";
import {
  Text,
  TouchableOpacity,
  StyleSheet,
  StyleProp,
  ViewStyle,
  ActivityIndicator,
} from "react-native";

interface LoadingButtonProps {
  title: string;
  onPress: () => void;
  bgColor?: string;
  style?: StyleProp<ViewStyle>;
  isLoading?: boolean;
  disabled?: boolean;
}

const LoadingButton = ({
  title,
  onPress,
  bgColor = "#dda640",
  style,
  isLoading = false,
  disabled = false,
}: LoadingButtonProps) => {
  return (
    <TouchableOpacity
      style={[style, styles.buttonContainer, { backgroundColor: bgColor }]}
      onPress={onPress}
      disabled={isLoading || disabled}
    >
      {isLoading ? (
        <ActivityIndicator size="small" color="#fff" />
      ) : (
        <Text style={styles.buttonText}>{title}</Text>
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default LoadingButton;
