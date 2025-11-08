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
import MottuSense from "../../src/assets/Mottu-sense.png";
import { useTheme } from "../theme/ThemeContext";
import ThemeSwitcher from "../Componentes/ThemeSwitcher";
import LanguageSwitcher from "../Componentes/LanguageSwitcher";
import { useI18n } from "../i18n/I18nProvider";

export default function TelaHome({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { t } = useI18n();
  const { theme } = useTheme();

  const handleLogin = async () => {
    if (!email || !password) {
      alert(t("pleaseFillAll") || "Por favor, preencha todos os campos!");
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
        const msg = errBody?.message || (t("invalidCredentials") || "Credenciais inválidas. Verifique seu e-mail e senha.");
        alert(msg);
        return;
      }

      const data = await response.json().catch(() => ({}));

      // Mantém comportamento anterior de salvar localmente (se necessário)
      await AsyncStorage.setItem("email", email);
      await AsyncStorage.setItem("senha", password);

      alert((t("welcomeUser") || "Bem-vindo, {{user}}!").replace("{{user}}", email));
      navigation.navigate("TelaPrincipal");
    } catch (error) {
      const msg = error?.message || (t("storageError") || "Erro ao acessar o armazenamento local.");
      alert(msg);
    }
  };

  return (
    <View style={[styles.container, { backgroundColor: theme.colors.background }]}> 
      <StatusBar backgroundColor={theme.colors.primary} barStyle={theme.colors.statusBar} />
      <View style={[styles.card, { backgroundColor: theme.colors.primary }]}>
        <View style={styles.themeButtonContainer}>
          <LanguageSwitcher />
          <ThemeSwitcher />
        </View>
        <Image source={MottuSense} style={styles.logo} />
        <Text style={styles.title}>{t("appName")}</Text>

        <TextInput
          placeholder={t("emailPlaceholder") || "E-mail"}
          placeholderTextColor="#fff"
          style={styles.input}
          value={email}
          onChangeText={setEmail}
        />

        <TextInput
          placeholder={t("passwordPlaceholder") || "Senha"}
          placeholderTextColor="#fff"
          secureTextEntry
          style={styles.input}
          value={password}
          onChangeText={setPassword}
        />

        <TouchableOpacity style={styles.buttonPrimary} onPress={handleLogin}>
          <Text style={styles.buttonText}>{t("login") || "Entrar"}</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => alert(t("devFeature") || "Função em desenvolvimento!")}>
          <Text style={styles.linkText}>{t("forgotPassword") || "Esqueceu a senha?"}</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.buttonSecondary}
          onPress={() => navigation.navigate("TelaCadastro")}
        >
          <Text style={styles.buttonText}>{t("createAccount") || "Criar Conta"}</Text>
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
    backgroundColor: "rgba(255, 255, 255, 0.2)",
    borderRadius: 12,
    paddingHorizontal: 16,
    color: "#fff",
    marginBottom: 16,
  },
  buttonPrimary: {
    backgroundColor: "#fff",
    width: "100%",
    paddingVertical: 16,
    borderRadius: 30,
    alignItems: "center",
    marginTop: 12,
  },
  buttonSecondary: {
    backgroundColor: "#fff",
    width: "100%",
    paddingVertical: 16,
    borderRadius: 30,
    alignItems: "center",
    marginTop: 14,
  },
  buttonText: {
    color: "#0b394f",
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
