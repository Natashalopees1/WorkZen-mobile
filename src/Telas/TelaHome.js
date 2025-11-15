import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
  Dimensions,
  StatusBar,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import WorkZen from "../assets/Work-zen.png";
import { useTheme } from "../theme/ThemeContext";
import ThemeSwitcher from "../Componentes/ThemeSwitcher";

export default function TelaHome({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // i18n removido
  const { theme } = useTheme();

  const handleLogin = async () => {
    if (!email || !password) {
      alert("Por favor, preencha todos os campos!");
      return;
    }

    try {
      // Envia login para a API conforme solicitado
      const payload = {
        login: email,
        senha: password,
      };

      const response = await fetch("http://localhost:8080/mottusense/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        const errBody = await response.json().catch(() => null);
  const msg = errBody?.message || "Credenciais inválidas. Verifique seu e-mail e senha.";
  alert(msg);
        return;
      }

      const data = await response.json().catch(() => ({}));

      // Mantém comportamento anterior de salvar localmente (se necessário)
      await AsyncStorage.setItem("email", email);
      await AsyncStorage.setItem("senha", password);

  alert(("Bem-vindo, {{user}}!").replace("{{user}}", email));
      navigation.navigate("TelaPrincipal");
    } catch (error) {
  const msg = error?.message || "Erro ao acessar o armazenamento local.";
      alert(msg);
    }
  };

  return (
    <View style={[styles.container, { backgroundColor: theme.colors.background }]}> 
      <StatusBar backgroundColor={theme.colors.primary} barStyle={theme.colors.statusBar} />
      <View style={[styles.card, { backgroundColor: theme.colors.primary }]}>
        <View style={styles.themeButtonContainer}>
          <ThemeSwitcher />
        </View>
  <Image source={WorkZen} style={styles.logo} />
  <Text style={styles.title}>Mottu Sense</Text>

        <TextInput
          placeholder={"E-mail"}
          placeholderTextColor="#fff"
          style={styles.input}
          value={email}
          onChangeText={setEmail}
        />

        <TextInput
          placeholder={"Senha"}
          placeholderTextColor="#fff"
          secureTextEntry
          style={styles.input}
          value={password}
          onChangeText={setPassword}
        />

        <TouchableOpacity style={styles.buttonPrimary} onPress={handleLogin}>
          <Text style={styles.buttonText}>Entrar</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => alert("Função em desenvolvimento!")}> 
          <Text style={styles.linkText}>Esqueceu a senha?</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.buttonSecondary}
          onPress={() => navigation.navigate("TelaCadastro")}
        >
          <Text style={styles.buttonText}>Criar Conta</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const { height, width } = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  card: {
    width: "100%",
    height: "100%",
    paddingVertical: 40,
    paddingHorizontal: 30,
    alignItems: "center",
    justifyContent: "center",
    elevation: 10,
    shadowColor: "#000",
  },
  themeButtonContainer: {
    position: 'absolute',
    top: 50,
    right: 20,
    zIndex: 100,
  },
  logo: {
    width: 200,
    height: 200,
    marginBottom: 24,
    resizeMode: "contain",
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 24,
  },
  input: {
    width: "100%",
    height: 50,
  backgroundColor: "#4FC3F7",
    borderRadius: 12,
    paddingHorizontal: 16,
    color: "#fff",
    marginBottom: 16,
  },
  buttonPrimary: {
  backgroundColor: "#4FC3F7",
    width: "100%",
    paddingVertical: 16,
    borderRadius: 30,
    alignItems: "center",
    marginTop: 12,
  },
  buttonSecondary: {
  backgroundColor: "#4FC3F7",
    width: "100%",
    paddingVertical: 16,
    borderRadius: 30,
    alignItems: "center",
    marginTop: 14,
  },
  buttonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "bold",
  },
  linkText: {
    color: "#fff",
    fontSize: 14,
    marginTop: 12,
    textDecorationLine: "underline",
  },
  smallText: {
    color: "#fff",
    fontSize: 13,
    marginTop: 8,
  },
});
