import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function ActivityItem({ icon, title, description }) {
  return (
    <View style={styles.activityItem}>
      {icon}
      <View style={{ marginLeft: 10 }}>
        <Text style={styles.activityItemTitle}>{title}</Text>
        <Text style={styles.activityItemDesc}>{description}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  activityItem: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 12,
    backgroundColor: "#dbe6df",
    padding: 10,
    borderRadius: 8,
  },
  activityItemTitle: {
    fontWeight: "600",
    color: "#1f3b32",
  },
  activityItemDesc: {
    fontSize: 12,
    color: "#333",
  },
});
