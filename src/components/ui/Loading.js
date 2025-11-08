import React from 'react';
import { View, Modal, ActivityIndicator, StyleSheet, Text } from 'react-native';

export default function Loading({ visible, message = 'Carregando...' }) {
  return (
    <Modal transparent visible={visible} animationType="fade">
      <View style={styles.overlay}>
        <View style={styles.container}>
          <ActivityIndicator size="large" color="#2d5d50" />
          <Text style={styles.message}>{message}</Text>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.35)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 12,
    minWidth: 180,
    alignItems: 'center',
  },
  message: {
    marginTop: 12,
    color: '#2d5d50',
    fontWeight: '600',
  },
});
