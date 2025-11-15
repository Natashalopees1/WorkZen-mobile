/**
 * Definição de tema para o app Mottu-sense
 * Contém cores e estilos para os modos claro e escuro
 */

const theme = {
  light: {
    name: 'light',
    colors: {
      // Paleta harmônica (baseada nas cores fornecidas)
  background: '#E9F2F6',    // fundo suave, menos saturado
  primary: '#036691',       // azul-acinzentado mais profundo (botões)
  primary700: '#034F6A',    // variante mais escura
  accent: '#4AA9D9',        // destaque mais contido

  // Superfícies (menos brilhantes)
  cardBackground: '#F3F7F9',   // off-white com leve tom azulado e menos contraste
  secondaryBackground: '#EDF6FA',
  inputBackground: '#F6F9FB',  // usado por campos de texto para não ficar muito brilhante

  // Texto
  text: '#0B3140',          // azul-escuro levemente acinzentado para leitura
  subtitleText: '#375A66',
  secondaryText: '#637D86',

  // Bordas e UI
  border: '#D0E6EF',
      statusBar: 'dark-content',
      shadow: '#000000',

      // Estados
      active: '#036691',
      inactive: '#D3E6EE',
      success: '#2EAC6D',
      danger: '#E35858',
      warning: '#F2A84B',
    }
  },
  
  dark: {
    name: 'dark',
    colors: {
      // Paleta harmônica para modo escuro
  background: '#081F2B',     // fundo escuro com ligeiro tom teal
  primary: '#3AB8E0',        // azul claro contido como destaque
  primary700: '#2E9BB8',     // variante média
  accent: '#2E9BB8',

      // Superfícies
  cardBackground: '#0C3246',
  secondaryBackground: '#0F3B51',

      // Texto
  text: '#EAF6FB',
  subtitleText: '#BEEAF7',
  secondaryText: '#93C9DC',

      // Bordas e UI
  border: '#0B3A50',
      statusBar: 'light-content',
      shadow: '#000000',

      // Estados
  active: '#3AB8E0',
  inactive: '#20353F',
  success: '#27A35A',
      danger: '#E35858',
      warning: '#F2A84B',
    }
  }
};

export default theme;
