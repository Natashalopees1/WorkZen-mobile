import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { useTheme } from "../../theme/ThemeContext";

export default function ActivityItem({ icon, title, description }) {
  const { theme } = useTheme();
  
  const styles = StyleSheet.create({
    container: {
      flexDirection: "row",
      paddingVertical: 10,
      borderBottomWidth: 1,
      borderBottomColor: theme.colors.border,
    },
    iconContainer: {
      width: 34,
      height: 34,
      backgroundColor: theme.colors.secondaryBackground,
      borderRadius: 17,
      justifyContent: "center",
      alignItems: "center",
      marginRight: 12,
    },
    content: {
      flex: 1,
    },
    title: {
      fontSize: 14,
      fontWeight: "600",
      color: theme.colors.text,
    },
    description: {
      fontSize: 12,
      color: theme.colors.secondaryText,
      marginTop: 3,
    },
  });

  return (
    <View style={styles.container}>
      <View style={styles.iconContainer}>{icon}</View>
      <View style={styles.content}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.description}>{description}</Text>
      </View>
    </View>
  );
}
