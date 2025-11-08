import { View, Text, StyleSheet, TextInput, TouchableOpacity, ScrollView, StatusBar } from "react-native";
import { useState } from "react";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { useTheme } from "../theme/ThemeContext";
import ThemeSwitcher from "../Componentes/ThemeSwitcher";
import LanguageSwitcher from "../Componentes/LanguageSwitcher";
import { useI18n } from "../i18n/I18nProvider";


export default function TelaFormulario({ navigation }) {
  const { theme } = useTheme();
  const { t } = useI18n();
  
  return (
    <ScrollView style={[styles.container, { backgroundColor: theme.colors.background }]} contentContainerStyle={{ flexGrow: 1 }}>
      <StatusBar backgroundColor={theme.colors.background} barStyle={theme.colors.statusBar} />
      <View style={styles.themeButtonContainer}>
        <LanguageSwitcher />
        <ThemeSwitcher />
      </View>
      {/* Header */}
      <View style={[styles.header, { backgroundColor: theme.colors.primary }]}>
        <Ionicons name="arrow-back" size={22} color={theme.name === 'dark' ? "#fff" : "#fff"} />
        <Text style={styles.headerTitle}>{t("registerMoto")}</Text>
      </View>

      {/* Barra de etapas */}
      <View style={styles.steps}>
        <View style={[styles.step, styles.stepActive]}>
          <Text style={styles.stepText}>{t("stepCapture") || "1. Captura"}</Text>
        </View>
        <View style={styles.step}><Text style={styles.stepText}>2</Text></View>
        <View style={styles.step}><Text style={styles.stepText}>3</Text></View>
        <View style={styles.step}><Text style={styles.stepText}>4</Text></View>
      </View>

      {/* Card de Permissão */}
      <View style={[styles.permissionCard, { backgroundColor: theme.colors.cardBackground }]}>
        <View style={styles.permissionHeader}>
          <Ionicons name="alert-circle" size={22} color={theme.colors.danger} />
          <Text style={[styles.permissionTitle, { color: theme.colors.text }]}>{t("cameraPermissionTitle") || "Permissão de Câmera Necessária"}</Text>
        </View>
        <Text style={[styles.permissionDesc, { color: theme.colors.subtitleText }]}> 
          {t("cameraPermissionDesc") || "Para usar o reconhecimento automático de placas, é necessário permitir o acesso à câmera."}
        </Text>
        <View style={[styles.permissionBox, { backgroundColor: theme.colors.secondaryBackground }]}>
          <Ionicons name="information-circle-outline" size={18} color={theme.colors.primary} />
          <Text style={[styles.permissionTip, { color: theme.colors.subtitleText }]}> 
            {t("cameraPermissionTip") || "Clique em \"Permitir\" quando o sistema solicitar acesso à câmera, ou verifique as configurações do app."}
          </Text>
        </View>

        {/* Botão de verificar */}
        <TouchableOpacity style={[styles.buttonPrimary, { backgroundColor: theme.colors.primary }]}>
          <Ionicons name="camera" size={18} color="#fff" />
          <Text style={styles.buttonText}>{t("checkPermissions") || "Verificar Permissões"}</Text>
        </TouchableOpacity>
      </View>

      {/* Botão alternativo */}
      <TouchableOpacity 
        style={[styles.buttonSecondary, { backgroundColor: theme.colors.cardBackground, borderColor: theme.colors.primary }]} 
        onPress={() => navigation.navigate("CadastroMoto")}
      >
        <Ionicons name="create-outline" size={18} color={theme.colors.primary} />
  <Text style={[styles.buttonSecondaryText, { color: theme.colors.primary }]}>{t("manualEntry") || "Entrada Manual"}</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

/* ---- Estilos ---- */
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  themeButtonContainer: {
    alignSelf: 'flex-end',
    marginBottom: 10,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#1f3b32",
    padding: 12,
    borderRadius: 8,
    marginBottom: 16,
  },
  headerTitle: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
    marginLeft: 8,
  },
  steps: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  step: {
    flex: 1,
    alignItems: "center",
    padding: 6,
    marginHorizontal: 4,
    borderRadius: 6,
    backgroundColor: "#ccc",
  },
  stepActive: {
    backgroundColor: "#2d5d50",
  },
  stepText: {
    color: "#fff",
    fontSize: 12,
  },
  permissionCard: {
    backgroundColor: "#fff",
    padding: 16,
    borderRadius: 12,
    marginBottom: 20,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 2,
  },
  permissionHeader: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 8,
  },
  permissionTitle: {
    fontSize: 15,
    fontWeight: "bold",
    marginLeft: 6,
    color: "#b00020",
  },
  permissionDesc: {
    fontSize: 13,
    marginBottom: 12,
    color: "#333",
  },
  permissionBox: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#eef4ef",
    padding: 10,
    borderRadius: 8,
    marginBottom: 16,
  },
  permissionTip: {
    fontSize: 12,
    marginLeft: 6,
    color: "#2d5d50",
    flex: 1,
  },
  buttonPrimary: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#2d5d50",
    padding: 12,
    borderRadius: 8,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
    marginLeft: 8,
  },
  buttonSecondary: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    borderColor: "#2d5d50",
    borderWidth: 1,
    padding: 12,
    borderRadius: 8,
  },
  buttonSecondaryText: {
    marginLeft: 6,
    fontWeight: "600",
    color: "#2d5d50",
  },
});

