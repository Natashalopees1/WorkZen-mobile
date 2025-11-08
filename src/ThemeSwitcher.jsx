import React from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useTheme } from '../theme/ThemeContext';

// Componente de botão para alternar entre os modos claro e escuro
export default function ThemeSwitcher({ style }) {
  const { theme, toggleTheme } = useTheme();
  
  return (
    <TouchableOpacity
      style={[styles.button, { backgroundColor: theme.colors.cardBackground }, style]}
      onPress={toggleTheme}
      activeOpacity={0.7}
    >
      <Ionicons
        name={theme.name === 'dark' ? 'sunny' : 'moon'}
        size={22}
        color={theme.colors.primary}
      />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 3,
  },
});
