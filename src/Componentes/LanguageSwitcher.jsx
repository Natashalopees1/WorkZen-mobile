import React from "react";
import { View, TouchableOpacity, Text, StyleSheet } from "react-native";
import { useI18n } from "../i18n/I18nProvider";
import { useTheme } from "../theme/ThemeContext";

export default function LanguageSwitcher() {
  const { language, setLanguage, t } = useI18n();
  const { theme } = useTheme();

  return (
    <View style={styles.container}>
      {[
        { key: "pt", label: "PT" },
        { key: "en", label: "EN" },
        { key: "es", label: "ES" },
      ].map((item) => (
        <TouchableOpacity
          key={item.key}
          style={[styles.btn, language === item.key && { borderColor: theme.colors.primary }]}
          onPress={() => setLanguage(item.key)}
        >
          <Text style={[styles.text, { color: theme.colors.text }]}>{item.label}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flexDirection: "row", alignItems: "center" },
  btn: { paddingHorizontal: 8, paddingVertical: 6, borderWidth: 1, borderColor: "transparent", borderRadius: 6, marginLeft: 6 },
  text: { fontSize: 12, fontWeight: "600" },
});
