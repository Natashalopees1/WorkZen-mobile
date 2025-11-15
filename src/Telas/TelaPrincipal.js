import React, { useState } from "react";
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from "react-native";
import { TrendingUp, Activity, Target, Heart, Smile, Meh, Zap, Frown, Coffee, Users, Sun, Brain } from "lucide-react-native";

export default function MindWorkDashboard({ navigation }) {
  const [selectedMood, setSelectedMood] = useState("Bem");

  const stats = [
    { title: "Dias Consecutivos", value: "7", description: "Registrando humor", icon: TrendingUp, color: "#4F46E5" },
    { title: "Exercícios", value: "12", description: "Este mês", icon: Activity, color: "#2563EB" },
  { title: "Meta Semanal", value: "80%", description: "Completada", icon: Target, color: "#4F46E5" },
  { title: "Sobre Nós", value: "—", description: "Conheça nossa missão", icon: TrendingUp, color: "#10B981", route: 'SobreNos' },
  ];

  const moods = [
    { label: "Excelente", icon: Heart, color: "#2563EB" },
    { label: "Bem", icon: Smile, color: "#2563EB" },
    { label: "Neutro", icon: Meh, color: "#2563EB" },
    { label: "Estressado", icon: Zap, color: "#DC2626" },
    { label: "Triste", icon: Frown, color: "#DC2626" },
  ];

  const tips = [
    { icon: Coffee, title: "Faça pausas regulares", desc: "A cada hora, levante e descanse por 5 minutos" },
    { icon: Users, title: "Conecte-se com colegas", desc: "Conversas sociais melhoram o bem-estar mental" },
    { icon: Sun, title: "Exponha-se à luz natural", desc: "Luz solar regula o humor e melhora o sono" },
    { icon: Brain, title: "Pratique mindfulness", desc: "Alguns minutos de atenção plena fazem diferença" },
  ];

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.logo}>🧠 WorkZen</Text>
        <Text style={styles.subtitle}>Bem-estar no trabalho</Text>
      </View>

      {/* Top Menu */}
      <View style={styles.menu}>
        <Text style={[styles.menuItem, styles.menuActive]}>Dashboard</Text>
        <TouchableOpacity onPress={() => navigation.navigate('TelaRespiracao')}>
          <Text style={styles.menuItem}>Respiração</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('TelaRecursos')}>
          <Text style={styles.menuItem}>Recursos</Text>
        </TouchableOpacity>
      </View>

      {/* Stats Section */}
      <View style={styles.statsContainer}>
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          const isClickable = !!stat.route;

          const inner = (
            <View style={styles.card}>
              <View style={styles.cardHeader}>
                <Text style={styles.cardTitle}>{stat.title}</Text>
                <Icon color={stat.color} size={22} />
              </View>
              <Text style={styles.cardValue}>{stat.value}</Text>
              <Text style={styles.cardDesc}>{stat.description}</Text>
            </View>
          );

          return isClickable ? (
            <TouchableOpacity key={index} style={styles.cardWrapper} onPress={() => navigation.navigate(stat.route)}>
              {inner}
            </TouchableOpacity>
          ) : (
            <View key={index} style={styles.cardWrapper}>
              {inner}
            </View>
          );
        })}
      </View>

      {/* Mood Section */}
      <View style={styles.moodContainer}>
        <Text style={styles.moodTitle}>Como você está hoje?</Text>
        <Text style={styles.moodSubtitle}>
          Registre seu humor diário para acompanhar seu bem-estar
        </Text>

        <View style={styles.moodOptions}>
          {moods.map((mood, index) => {
            const Icon = mood.icon;
            const isSelected = selectedMood === mood.label;
            return (
              <TouchableOpacity
                key={index}
                style={[styles.moodButton, isSelected && styles.moodSelected]}
                onPress={() => setSelectedMood(mood.label)}
              >
                <Icon color={isSelected ? mood.color : "#6B7280"} size={24} />
                <Text
                  style={[
                    styles.moodText,
                    { color: isSelected ? mood.color : "#6B7280" },
                  ]}
                >
                  {mood.label}
                </Text>
              </TouchableOpacity>
            );
          })}
        </View>

        <TouchableOpacity style={styles.submitButton}>
          <Text style={styles.submitText}>Registrar Humor</Text>
        </TouchableOpacity>
      </View>

      {/* Tips Section */}
      <View style={styles.tipsContainer}>
        <Text style={styles.tipsTitle}>Dicas de Bem-estar</Text>
        <Text style={styles.tipsSubtitle}>
          Pequenas ações que fazem grande diferença
        </Text>

        {tips.map((tip, index) => {
          const Icon = tip.icon;
          return (
            <View key={index} style={styles.tipCard}>
              <Icon color="#2563EB" size={22} />
              <View style={{ flex: 1, marginLeft: 12 }}>
                <Text style={styles.tipTitle}>{tip.title}</Text>
                <Text style={styles.tipDesc}>{tip.desc}</Text>
              </View>
            </View>
          );
        })}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F9FAFB",
    paddingHorizontal: 16,
    paddingTop: 40,
  },
  header: {
    marginBottom: 12,
  },
  logo: {
    fontSize: 22,
    fontWeight: "700",
    color: "#1E3A8A",
  },
  subtitle: {
    color: "#6B7280",
    fontSize: 14,
  },
  menu: {
    flexDirection: "row",
    justifyContent: "flex-end",
    marginBottom: 16,
  },
  menuItem: {
    color: "#6B7280",
    marginLeft: 16,
    fontWeight: "500",
  },
  menuActive: {
    color: "#2563EB",
  },
  statsContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  cardWrapper: {
    width: '48%',
    marginBottom: 12,
    minHeight: 140,
  },
  card: {
    backgroundColor: "#FFFFFF",
    borderRadius: 16,
    padding: 16,
    flex: 1,
    minHeight: 140,
    justifyContent: 'space-between',
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2,
  },
  cardHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 6,
  },
  cardTitle: {
    fontSize: 13,
    color: "#6B7280",
  },
  cardValue: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#111827",
  },
  cardDesc: {
    fontSize: 13,
    color: "#6B7280",
  },
  moodContainer: {
    backgroundColor: "#FFFFFF",
    borderRadius: 16,
    padding: 16,
    marginTop: 8,
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2,
  },
  moodTitle: {
    fontSize: 18,
    fontWeight: "700",
    marginBottom: 4,
    color: "#111827",
  },
  moodSubtitle: {
    color: "#6B7280",
    marginBottom: 16,
  },
  moodOptions: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  moodButton: {
    alignItems: "center",
    justifyContent: "center",
    width: "18%",
    paddingVertical: 10,
    borderRadius: 12,
    backgroundColor: "#F9FAFB",
  },
  moodSelected: {
    backgroundColor: "#EEF2FF",
    borderWidth: 1,
    borderColor: "#2563EB",
  },
  moodText: {
    marginTop: 6,
    fontSize: 13,
  },
  submitButton: {
    backgroundColor: "#2563EB",
    borderRadius: 10,
    paddingVertical: 10,
    marginTop: 16,
  },
  submitText: {
    color: "#FFFFFF",
    textAlign: "center",
    fontWeight: "600",
  },
  tipsContainer: {
    backgroundColor: "#FFFFFF",
    borderRadius: 16,
    padding: 16,
    marginVertical: 16,
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2,
  },
  tipsTitle: {
    fontSize: 18,
    fontWeight: "700",
    color: "#111827",
  },
  tipsSubtitle: {
    color: "#6B7280",
    marginBottom: 16,
  },
  tipCard: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#F3F4F6",
    borderRadius: 12,
    padding: 12,
    marginBottom: 10,
  },
  tipTitle: {
    fontWeight: "600",
    color: "#111827",
  },
  tipDesc: {
    color: "#6B7280",
    fontSize: 13,
  },
});
