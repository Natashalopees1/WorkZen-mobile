import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

export const Button = ({ 
  children, 
  style, 
  variant = "default", 
  size = "default", 
  onPress,
  disabled = false,
  textStyle
}) => {
  const getVariantStyle = () => {
    switch (variant) {
      case "primary":
        return styles.primary;
      case "secondary":
        return styles.secondary;
      case "outline":
        return styles.outline;
      case "ghost":
        return styles.ghost;
      default:
        return styles.default;
    }
  };

  const getSizeStyle = () => {
    switch (size) {
      case "sm":
        return styles.small;
      case "lg":
        return styles.large;
      default:
        return styles.medium;
    }
  };

  const getTextStyle = () => {
    switch (variant) {
      case "outline":
        return styles.outlineText;
      case "ghost":
        return styles.ghostText;
      default:
        return styles.buttonText;
    }
  };

  return (
    <TouchableOpacity
      style={[
        styles.button,
        getVariantStyle(),
        getSizeStyle(),
        disabled && styles.disabled,
        style
      ]}
      onPress={onPress}
      disabled={disabled}
    >
      <Text style={[getTextStyle(), textStyle]}>{children}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  default: {
    backgroundColor: '#2d5d50',
  },
  primary: {
    backgroundColor: '#2d5d50',
  },
  secondary: {
    backgroundColor: '#a7c1ad',
  },
  outline: {
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderColor: '#2d5d50',
  },
  ghost: {
    backgroundColor: 'transparent',
  },
  disabled: {
    opacity: 0.5,
  },
  small: {
    padding: 8,
    paddingHorizontal: 12,
  },
  medium: {
    padding: 12,
    paddingHorizontal: 16,
  },
  large: {
    padding: 16,
    paddingHorizontal: 20,
  },
  buttonText: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 15,
  },
  outlineText: {
    color: '#2d5d50',
    fontWeight: '600',
    fontSize: 15,
  },
  ghostText: {
    color: '#2d5d50',
    fontWeight: '600',
    fontSize: 15,
  }
});
