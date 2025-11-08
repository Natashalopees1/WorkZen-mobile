import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function InfoCard({ title, value, subtitle, icon }) {
  return (
    <View style={styles.infoCard}>
      <View style={styles.infoHeader}>
        {icon}
        <Text style={styles.infoTitle}>{title}</Text>
      </View>
      <Text style={styles.infoValue}>{value}</Text>
      <Text style={styles.infoSubtitle}>{subtitle}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  infoCard: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 16,
    borderRadius: 12,
    marginHorizontal: 5,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  infoHeader: {
    flexDirection: "row",
    alignItems: "center",
  },
  infoTitle: {
    marginLeft: 6,
    fontSize: 14,
    color: "#1f3b32",
    fontWeight: "500",
  },
  infoValue: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#1f3b32",
    marginTop: 4,
  },
  infoSubtitle: {
    fontSize: 12,
    color: "#444",
    marginTop: 2,
  },
});
