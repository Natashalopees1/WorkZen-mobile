import React, { useLayoutEffect } from "react";
import { View, Text, Image, ScrollView, StyleSheet, TouchableOpacity, Linking } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useTheme } from "../theme/ThemeContext";

// SobreNos reescrito para o produto atual: app de saúde mental
// Mostra: visão, principais recursos (meditações, respiração, trilhas), planos, equipe e contato
// Atualizado: 12/11/2025
export default function SobreNos({ navigation }) {
  const { theme } = useTheme();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity onPress={() => navigation.goBack()} style={{ marginRight: 12 }}>
          <Ionicons name="close" size={24} color={theme.colors.primary} />
        </TouchableOpacity>
      ),
    });
  }, [navigation]);

  const openSupport = () => {
    const url = "mailto:suporte@mottu-sense.app";
    Linking.canOpenURL(url).then((supported) => supported && Linking.openURL(url));
  };

  return (
    <ScrollView contentContainerStyle={[styles.container, { backgroundColor: theme.colors.background }]}>
      <View style={[styles.card, { backgroundColor: theme.colors.cardBackground }]}>
        <Image source={require("../assets/Work-zen.png")} style={styles.logo} resizeMode="contain" />

  <Text style={[styles.title, { color: theme.colors.text }]}>Sobre nós</Text>
        <Text style={[styles.subtitle, { color: theme.colors.subtitleText }]}>Uma plataforma de bem-estar mental com meditações guiadas, exercícios de respiração e trilhas personalizadas.</Text>

        <View style={styles.section}>
          <Text style={[styles.sectionTitle, { color: theme.colors.text }]}>Recursos principais</Text>
          <View style={styles.listItem}><Ionicons name="headset" size={18} color={theme.colors.primary} /><Text style={[styles.listText, { color: theme.colors.text }]}>Meditações guiadas (iniciantes a avançados)</Text></View>
          <View style={styles.listItem}><Ionicons name="water" size={18} color={theme.colors.primary} /><Text style={[styles.listText, { color: theme.colors.text }]}>Exercícios de respiração com temporizador</Text></View>
          <View style={styles.listItem}><Ionicons name="walk" size={18} color={theme.colors.primary} /><Text style={[styles.listText, { color: theme.colors.text }]}>Trilhas de sono e foco personalizadas</Text></View>
          <View style={styles.listItem}><Ionicons name="chatbubbles" size={18} color={theme.colors.primary} /><Text style={[styles.listText, { color: theme.colors.text }]}>Recursos de autoajuda e exercícios práticos</Text></View>
        </View>

        <View style={styles.section}>
          <Text style={[styles.sectionTitle, { color: theme.colors.text }]}>Como funciona</Text>
          <Text style={[styles.sectionText, { color: theme.colors.text }]}>Escolha um objetivo (reduzir estresse, melhorar sono, aumentar foco). O app sugere sessões curtas, exercícios diários e trilhas semanais que se adaptam ao seu progresso.</Text>
        </View>

        <View style={styles.section}>
          <Text style={[styles.sectionTitle, { color: theme.colors.text }]}>Planos</Text>
          <View style={styles.planBox}>
            <Text style={[styles.planTitle, { color: theme.colors.text }]}>Gratuito</Text>
            <Text style={[styles.planText, { color: theme.colors.subtitleText }]}>Acesso limitado a meditações e exercícios diários.</Text>
          </View>
          <View style={styles.planBox}>
            <Text style={[styles.planTitle, { color: theme.colors.text }]}>Premium</Text>
            <Text style={[styles.planText, { color: theme.colors.subtitleText }]}>Trilhas completas, conteúdo exclusivo e estatísticas de progresso.</Text>
          </View>
        </View>

        <View style={styles.section}>
          <Text style={[styles.sectionTitle, { color: theme.colors.text }]}>Equipe</Text>
          <Text style={[styles.sectionText, { color: theme.colors.text }]}>Psicólogos, pesquisadores e designers dedicados a criar experiências seguras e baseadas em evidências.</Text>
        </View>

        <TouchableOpacity style={[styles.contactButton, { backgroundColor: theme.colors.primary }]} onPress={openSupport}>
          <Text style={[styles.contactButtonText, { color: theme.colors.background }]}>Fale com o suporte</Text>
        </TouchableOpacity>

  <Text style={[styles.version, { color: theme.colors.subtitleText }]}>Versão 1.0.0</Text>
        <View style={[styles.hashBox, { borderColor: theme.colors.border, backgroundColor: theme.colors.cardBackground }]}>
          <Text style={[styles.sectionTitle, { color: theme.colors.subtitleText, fontSize: 13 }]}>Commit hash</Text>
          <Text selectable={true} style={[styles.hashText, { color: theme.colors.text, marginTop: 6 }]}>0e10bbb221c5e64cd9a366cd748c99f39b44551f</Text>
        </View>
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
  planBox: {
    width: "100%",
    padding: 12,
    borderRadius: 8,
    borderWidth: 1,
    marginTop: 8,
  },
  planTitle: {
    fontSize: 15,
    fontWeight: "700",
  },
  planText: {
    fontSize: 13,
    marginTop: 6,
  },
  version: {
    marginTop: 14,
    fontSize: 12,
  },
  hashBox: {
    width: "100%",
    padding: 12,
    borderRadius: 8,
    marginTop: 12,
    borderWidth: 1,
  },
  hashText: {
    fontSize: 12,
    fontFamily: "monospace",
    textAlign: "center",
  },
});
