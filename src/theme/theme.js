/**
 * Definição de tema para o app Mottu-sense
 * Contém cores e estilos para os modos claro e escuro
 */

const theme = {
  light: {
    name: 'light',
    colors: {
      // Cores de fundo
      background: '#a7c1ad',     // Verde claro (original)
      cardBackground: '#ffffff', // Branco
      secondaryBackground: '#eef4ef', // Verde muito claro para cards secundários
      
      // Cores de texto
      text: '#1f3b32',           // Verde escuro quase preto
      subtitleText: '#2d5d50',   // Verde médio escuro
      secondaryText: '#555555',  // Cinza para textos secundários
      
      // Cores de elementos
      primary: '#2d5d50',        // Verde principal (usado em botões, ícones)
      secondary: '#3a895f',      // Verde secundário 
      accent: '#3a895f',         // Verde accent
      border: '#e0e0e0',         // Cinza claro para bordas
      
      // Elementos de UI
      statusBar: 'dark-content', // Estilo da barra de status
      shadow: '#000000',         // Cor das sombras
      
      // Estados
      active: '#2d5d50',         // Verde para elementos ativos
      inactive: '#cccccc',       // Cinza para elementos inativos
      success: '#27ae60',        // Verde para sucesso
      danger: '#e74c3c',         // Vermelho para erro
      warning: '#f39c12',        // Amarelo para avisos
    }
  },
  
  dark: {
    name: 'dark',
    colors: {
      // Cores de fundo
      background: '#1a2b29',     // Verde muito escuro
      cardBackground: '#253e3a', // Verde escuro para cards
      secondaryBackground: '#2f4945', // Verde escuro secundário
      
      // Cores de texto
      text: '#e0f0e8',           // Verde claro quase branco
      subtitleText: '#a7c1ad',   // Verde médio claro
      secondaryText: '#aaaaaa',  // Cinza claro para textos secundários
      
      // Cores de elementos
      primary: '#3a895f',        // Verde médio (mais saturado no dark mode)
      secondary: '#2d5d50',      // Verde mais escuro
      accent: '#4ebb84',         // Verde mais claro como accent
      border: '#3f5854',         // Verde escuro para bordas
      
      // Elementos de UI
      statusBar: 'light-content', // Estilo da barra de status
      shadow: '#000000',          // Cor das sombras
      
      // Estados
      active: '#4ebb84',          // Verde claro para elementos ativos
      inactive: '#556b67',        // Verde acinzentado para elementos inativos
      success: '#2ecc71',         // Verde para sucesso
      danger: '#e74c3c',          // Vermelho para erro
      warning: '#f39c12',         // Amarelo para avisos
    }
  }
};

export default theme;
