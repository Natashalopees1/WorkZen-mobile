import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import 'react-native-gesture-handler';
import TelaRespiracao from "./src/Telas/TelaRespiracao";
import TelaHome from "./src/Telas/TelaHome";
import TelaCadastro from "./src/Telas/TelaCadastro";
import TelaPrincipal from "./src/Telas/TelaPrincipal";
import TelaRecursos from "./src/Telas/TelaRecursos";
import SobreNos from "./src/Telas/SobreNos";
import { ThemeProvider, useTheme } from "./src/theme/ThemeContext";

const Stack = createStackNavigator();

export default function App() {
  return (
    <ThemeProvider>
      <AppWithTheme />
    </ThemeProvider>
  );
}

function AppWithTheme() {
  const { theme } = useTheme();

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="TelaHome"
        screenOptions={{
          headerStyle: {
            backgroundColor: theme.colors.background,
            elevation: 0,
            shadowOpacity: 0,
          },
          headerTintColor: theme.colors.text,
          headerTitleStyle: { fontWeight: 'bold' },
          cardStyle: { backgroundColor: theme.colors.background },
        }}
      >
        <Stack.Screen name="TelaHome" component={TelaHome} options={{ headerShown: false }} />
        <Stack.Screen name="TelaCadastro" component={TelaCadastro} options={{ title: 'Cadastro' }} />
        <Stack.Screen name="TelaPrincipal" component={TelaPrincipal} options={{ title: 'Home' }} />
        <Stack.Screen name="TelaRespiracao" component={TelaRespiracao} options={{ title: 'Respiração' }} />
        <Stack.Screen name="TelaRecursos" component={TelaRecursos} options={{ title: 'Recursos' }} />
        <Stack.Screen name="SobreNos" component={SobreNos} options={{ title: 'Sobre Nós' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
 