import React from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';

export default function Card({ title, subtitle, icon, onPress }) {
  return (
    <TouchableOpacity style={styles.card} onPress={onPress}>
      {icon}
      <Text style={styles.cardTitle}>{title}</Text>
      <Text style={styles.cardSubtitle}>{subtitle}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
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
  cardTitle: {
    fontWeight: "bold",
    fontSize: 16,
    marginTop: 8,
    color: "#1f3b32",
  },
  cardSubtitle: {
    fontSize: 12,
    color: "#444",
    marginTop: 4,
  },
});
