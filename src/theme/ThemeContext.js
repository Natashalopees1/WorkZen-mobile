import React, { createContext, useState, useEffect, useContext } from 'react';
import { useColorScheme } from 'react-native';
import theme from './theme';

// Criando o contexto do tema
export const ThemeContext = createContext();

// Hook personalizado para usar o tema
export const useTheme = () => useContext(ThemeContext);

// Provedor do tema que será usado no App.js
export const ThemeProvider = ({ children }) => {
  // Obtém a preferência do sistema (claro/escuro)
  const colorScheme = useColorScheme();
  
  // Estado para armazenar o tema atual
  const [currentTheme, setCurrentTheme] = useState(
    colorScheme === 'dark' ? theme.dark : theme.light
  );
  
  // Atualiza o tema quando a preferência do sistema mudar
  useEffect(() => {
    setCurrentTheme(colorScheme === 'dark' ? theme.dark : theme.light);
  }, [colorScheme]);
  
  // Função para alternar manualmente o tema
  const toggleTheme = () => {
    setCurrentTheme(currentTheme.name === 'light' ? theme.dark : theme.light);
  };
  
  return (
    <ThemeContext.Provider value={{ theme: currentTheme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
