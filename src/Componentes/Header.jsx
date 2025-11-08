import React from "react";
import { View, TouchableOpacity, Text, StyleSheet } from "react-native";
import { useI18n } from "../i18n/I18nProvider";

export default function Header({ onLoginPress, onRegisterPress, onAboutUsPress, onMembersPress, onFormPress }) {
  const { t } = useI18n();

  return (
    <View style={styles.header}>
      <View style={styles.headerButtons}>
        <TouchableOpacity style={styles.button} onPress={onLoginPress}>
          <Text style={styles.buttonText}>{t("login") || "Login"}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button, styles.registerButton]} onPress={onRegisterPress}>
          <Text style={styles.buttonText}>{t("signup") || "Cadastre-se"}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button, styles.registerButton]} onPress={onAboutUsPress}>
          <Text style={styles.buttonText}>{t("moreAboutUs") || "Mais sobre nós"}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button]} onPress={onMembersPress }>
          <Text style={styles.buttonText}>{t("participants") || "Participantes"}</Text>
        </TouchableOpacity>
            <TouchableOpacity style={[styles.button, styles.registerButton]} onPress={onFormPress}>
              <Text style={styles.buttonText}>{t("form") || "Formulario"}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    padding: 26,
    paddingTop: 60,
    width: "100%",

  },
  headerButtons: {
    flexDirection: "row",
  },
  button: {
    marginLeft: 10,
    paddingVertical: 8,
    paddingHorizontal: 12,
    backgroundColor: "#093E61", 
    borderRadius: 5,
  },
  registerButton: {
    backgroundColor: "#4CAF88", 
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
  },
});


