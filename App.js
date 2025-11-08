import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import 'react-native-gesture-handler';
// Importações das telas
import TelaHome from "./src/Telas/TelaHome";
import TelaCadastro from "./src/Telas/TelaCadastro";
import TelaFormulario from "./src/Telas/TelaFormulario";
import TelaPrincipal from "./src/Telas/telaPrincipal/TelaPrincipal";
import BuscarMoto from "./src/Telas/BuscarMoto";
import CadastroMoto from "./src/Telas/CadastroMoto";
import PatioMoto from "./src/Telas/PatioMoto";
import SobreNos from "./src/Telas/SobreNos";
// Importação do tema
import { ThemeProvider, useTheme } from "./src/theme/ThemeContext";
import { I18nProvider, useI18n } from "./src/i18n/I18nProvider";


const Stack = createStackNavigator();

// Componente principal que encapsula a navegação
export default function App() {
  return (
    <ThemeProvider>
      <I18nProvider>
        <AppWithTheme />
      </I18nProvider>
    </ThemeProvider>
  );
}

// Componente de navegação com acesso ao tema
function AppWithTheme() {
  const { theme } = useTheme();
  const { t } = useI18n();

  
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
          headerTitleStyle: {
            fontWeight: 'bold',
          },
          cardStyle: { backgroundColor: theme.colors.background }
        }}
      >
        <Stack.Screen
          name="TelaHome"
          component={TelaHome}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="TelaCadastro"
          component={TelaCadastro}
          options={{ title: t("register") || "Cadastro" }}
        />
        <Stack.Screen
          name="TelaPrincipal"
          component={TelaPrincipal}
          options={{ title: t("dashboard") || "Home" }}
        />
        <Stack.Screen
          name="TelaFormulario"
          component={TelaFormulario}
          options={{ title: t("registerMoto") || "Formulário" }}
        />
        <Stack.Screen
          name="CadastroMoto"
          component={CadastroMoto}
          options={{ title: t("registerNewMoto") || "Cadastro de Moto" }}
        />
        <Stack.Screen
          name="BuscarMoto"
          component={BuscarMoto}
          options={{ title: t("searchMotos") || "Buscar Moto" }}
        />
        <Stack.Screen
          name="PatioMoto"
          component={PatioMoto}
          options={{ title: t("patioMap") || "Pátio da Moto" }}
        />
        <Stack.Screen
          name="SobreNos"
          component={SobreNos}
          options={{ title: t("aboutUs") || "Sobre Nós" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}