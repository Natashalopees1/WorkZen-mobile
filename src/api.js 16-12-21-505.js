import { Platform } from 'react-native';

// Retorna a base URL correta dependendo do ambiente
export function getApiBaseUrl({ customIp } = {}) {
  // Se o usuário forneceu um IP (por exemplo para dispositivo físico), usa esse
  if (customIp) return `http://${customIp}:8080`;

  // Android emulator (Android Studio): use 10.0.2.2
  if (Platform.OS === 'android') return 'http://10.0.2.2:8080';

  // iOS simulator e expo em desktop: localhost funciona
  return 'http://localhost:8080';
}

export default getApiBaseUrl;
