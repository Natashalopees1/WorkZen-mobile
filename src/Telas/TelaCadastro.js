import React, { useState } from "react";
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Alert, StatusBar } from "react-native";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useTheme } from "../theme/ThemeContext";
import ThemeSwitcher from "../Componentes/ThemeSwitcher";
import LanguageSwitcher from "../Componentes/LanguageSwitcher";
import { useI18n } from "../i18n/I18nProvider";

export default function TelaCadastro({ navigation }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { theme } = useTheme();
  const { t } = useI18n();

  const handleRegister = async () => {
    if (!name || !email || !password ) {
      alert(t("pleaseFillAll") || "Por favor, preencha todos os campos!");
      return;
    }

    try {
      // Chamada para a API externa conforme solicitado
      const payload = {
        nome: name,
        login: email,
        senha: password,
      };

      const response = await axios.post(
        "http://localhost:8080/mottusense/auth/cadastro",
        payload,
        { headers: { "Content-Type": "application/json" } }
      );

      // Mantém o comportamento anterior de salvar localmente
      await AsyncStorage.setItem("email", email);
      await AsyncStorage.setItem("senha", password);

      // Notifica sucesso (usa texto de i18n quando disponível)
      alert(t("registrationSuccess") || "Cadastro realizado", response?.data?.message || `Usuário ${email} cadastrado com sucesso!`);
      navigation.goBack();
    } catch (e) {
      // Tenta extrair mensagem do erro retornado pela API
      const errMsg = e?.response?.data?.message || e.message || (t("storageError") || "Erro ao salvar dados localmente.");
      alert(errMsg);
    }
  };

  return (
    <View style={[styles.container, { backgroundColor: theme.colors.background }]}>
      <StatusBar backgroundColor={theme.colors.background} barStyle={theme.colors.statusBar} />
      <View style={styles.themeButtonContainer}>
        <LanguageSwitcher />
        <ThemeSwitcher />
      </View>
      <Text style={[styles.title, { color: theme.colors.text }]}>📝 {t("register") || "Cadastro"}</Text>
      <Text style={[styles.subtitle, { color: theme.colors.subtitleText }]}>{t("fillDetails") || "Preencha seus dados para continuar"}</Text>

      <TextInput
        style={[styles.input, { 
          backgroundColor: theme.colors.cardBackground,
          borderColor: theme.colors.border,
          color: theme.colors.text
        }]}
  placeholder={t("fullNamePlaceholder") || "Seu nome completo"}
        value={name}
        onChangeText={setName}
        placeholderTextColor={theme.name === 'dark' ? '#aaa' : '#999'}
      />
      <TextInput
        style={[styles.input, { 
          backgroundColor: theme.colors.cardBackground,
          borderColor: theme.colors.border,
          color: theme.colors.text
        }]}
  placeholder={t("emailPlaceholder") || "Seu e-mail"}
        keyboardType="email-address"
        autoCapitalize="none"
        value={email}
        onChangeText={setEmail}
        placeholderTextColor={theme.name === 'dark' ? '#aaa' : '#999'}
      />
      <TextInput
        style={[styles.input, { 
          backgroundColor: theme.colors.cardBackground,
          borderColor: theme.colors.border,
          color: theme.colors.text
        }]}
  placeholder={t("createPasswordPlaceholder") || "Crie uma senha"}
        secureTextEntry
        value={password}
        onChangeText={setPassword}
        placeholderTextColor={theme.name === 'dark' ? '#aaa' : '#999'}
      />
     
      <TouchableOpacity 
        style={[styles.buttonFilled, { backgroundColor: theme.colors.primary }]} 
        onPress={handleRegister}
      >
  <Text style={styles.buttonTextFilled}>{t("registerAction") || "Cadastrar"}</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 24,
  },
  themeButtonContainer: {
    position: 'absolute',
    top: 50,
    right: 20,
    zIndex: 100,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 6,
  },
  subtitle: {
    fontSize: 15,
    marginBottom: 24,
    textAlign: "center",
  },
  input: {
    width: "100%",
    backgroundColor: "#FFFFFF",
    paddingVertical: 14,
    paddingHorizontal: 16,
    borderRadius: 12,
    fontSize: 16,
    borderWidth: 1,
    borderColor: "#DDD",
    marginBottom: 16,
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 2,
  },
  buttonOutline: {
    borderWidth: 1.5,
    borderColor: "#0b394f",
    paddingVertical: 14,
    borderRadius: 12,
    width: "100%",
    alignItems: "center",
    marginBottom: 20,
    backgroundColor: "#FFFFFF",
  },
  buttonTextOutline: {
    color: "#0b394f",
    fontWeight: "600",
    fontSize: 16,
  },
  buttonFilled: {
    backgroundColor: "#0b394f",
    paddingVertical: 16,
    borderRadius: 12,
    width: "100%",
    alignItems: "center",
    elevation: 3,
    marginTop: 10,
  },
  buttonTextFilled: {
    color: "#FFFFFF",
    fontWeight: "600",
    fontSize: 16,
  },
  addressContainer: {
    backgroundColor: "#FFFFFF",
    borderRadius: 12,
    padding: 16,
    marginTop: 10,
    width: "100%",
    shadowColor: "#000",
    shadowOpacity: 0.08,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    elevation: 2,
  },
  addressTitle: {
    fontWeight: "bold",
    fontSize: 16,
    marginBottom: 8,
    color: "#0b394f",
  },
  addressText: {
    fontSize: 15,
    color: "#444",
    marginBottom: 4,
  },
});