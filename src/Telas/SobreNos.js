import React, { useLayoutEffect } from "react";
import { View, Text, Image, ScrollView, StyleSheet, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useTheme } from "../theme/ThemeContext";
import { useI18n } from "../i18n/I18nProvider";

export default function SobreNos({ navigation }) {
  const { theme } = useTheme();
  const { t } = useI18n();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity onPress={() => navigation.goBack()} style={{ marginRight: 12 }}>
          <Ionicons name="close" size={24} color={theme.colors.primary} />
        </TouchableOpacity>
      ),
    });
  }, [navigation]);

  return (
    <ScrollView contentContainerStyle={[styles.container, { backgroundColor: theme.colors.background }]}>
      <View style={[styles.card, { backgroundColor: theme.colors.card }]}>
        <Image source={require("../assets/Mottu-sense.png")} style={styles.logo} resizeMode="contain" />

        <Text style={[styles.title, { color: theme.colors.text }]}>{t("aboutUs")}</Text>
        <Text style={[styles.subtitle, { color: theme.colors.subtitleText }]}>{t("aboutSubtitle")}</Text>

        <View style={styles.row}>
          <View style={[styles.statBox, { backgroundColor: theme.colors.background }]}>
            <Text style={[styles.statNumber, { color: theme.colors.text }]}>5k+</Text>
            <Text style={[styles.statLabel, { color: theme.colors.subtitleText }]}>{t("users") || "Usuários"}</Text>
          </View>
          <View style={[styles.statBox, { backgroundColor: theme.colors.background }]}>
            <Text style={[styles.statNumber, { color: theme.colors.text }]}>98%</Text>
            <Text style={[styles.statLabel, { color: theme.colors.subtitleText }]}>{t("uptime") || "Disponibilidade"}</Text>
          </View>
        </View>

        <View style={styles.section}>
          <Text style={[styles.sectionTitle, { color: theme.colors.text }]}>{t("whoWeAre")}</Text>
          <Text style={[styles.sectionText, { color: theme.colors.text }]}>{t("companyDescription") || "Somos a equipe por trás do MottuSense — uma solução pensada para facilitar a gestão de pátios e o rastreamento de motocicletas."}</Text>
        </View>

        <View style={styles.section}>
          <Text style={[styles.sectionTitle, { color: theme.colors.text }]}>{t("mission")}</Text>
          <Text style={[styles.sectionText, { color: theme.colors.text }]}>{t("missionText") || "Simplificar operações de pátio com automação e visão computacional."}</Text>
        </View>

        <View style={styles.section}>
          <Text style={[styles.sectionTitle, { color: theme.colors.text }]}>{t("whatWeOffer")}</Text>
          <View style={styles.listItem}><Ionicons name="camera" size={18} color={theme.colors.primary} /><Text style={[styles.listText, { color: theme.colors.text }]}>{t("cameraRegister") || "Cadastro rápido via câmera"}</Text></View>
          <View style={styles.listItem}><Ionicons name="search" size={18} color={theme.colors.primary} /><Text style={[styles.listText, { color: theme.colors.text }]}>{t("searchByPlate") || "Busca por placa, marca e modelo"}</Text></View>
          <View style={styles.listItem}><Ionicons name="map" size={18} color={theme.colors.primary} /><Text style={[styles.listText, { color: theme.colors.text }]}>{t("mapView") || "Visualização do mapa do pátio"}</Text></View>
          <View style={styles.listItem}><Ionicons name="bar-chart" size={18} color={theme.colors.primary} /><Text style={[styles.listText, { color: theme.colors.text }]}>{t("reports") || "Histórico e relatórios"}</Text></View>
        </View>

        <View style={styles.section}>
          <Text style={[styles.sectionTitle, { color: theme.colors.text }]}>{t("team")}</Text>
          <Text style={[styles.sectionText, { color: theme.colors.text }]}>{t("teamIntro") || "Nossa equipe é formada por engenheiros, designers e especialistas em produtos focados em mobilidade."}</Text>
        </View>

        <TouchableOpacity style={[styles.contactButton, { backgroundColor: theme.colors.primary }]} onPress={() => { /* TODO: implementar ação de contato */ }}>
          <Text style={[styles.contactButtonText, { color: theme.colors.background }]}>{t("contactCTA") || "Entre em contato"}</Text>
        </TouchableOpacity>

        <Text style={[styles.version, { color: theme.colors.subtitleText }]}>{t("version", { version: "1.0.0" })}</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  card: {
    borderRadius: 12,
    padding: 20,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 3,
  },
  logo: {
    width: 140,
    height: 80,
    marginBottom: 12,
  },
  title: {
    fontSize: 20,
    fontWeight: "700",
    marginBottom: 6,
  },
  subtitle: {
    fontSize: 14,
    marginBottom: 12,
  },
  row: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
    marginVertical: 12,
  },
  statBox: {
    flex: 1,
    alignItems: "center",
    padding: 12,
    marginHorizontal: 6,
    borderRadius: 8,
  },
  statNumber: {
    fontSize: 18,
    fontWeight: "700",
  },
  statLabel: {
    fontSize: 12,
    marginTop: 4,
  },
  section: {
    width: "100%",
    marginTop: 12,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: "600",
    marginBottom: 6,
  },
  sectionText: {
    fontSize: 14,
    lineHeight: 20,
  },
  listItem: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 6,
  },
  listText: {
    marginLeft: 8,
    fontSize: 14,
  },
  contactButton: {
    marginTop: 16,
    paddingVertical: 10,
    paddingHorizontal: 18,
    borderRadius: 8,
  },
  contactButtonText: {
    fontWeight: "700",
  },
  version: {
    marginTop: 14,
    fontSize: 12,
  },
});
