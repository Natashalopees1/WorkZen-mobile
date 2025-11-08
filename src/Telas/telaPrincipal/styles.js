import { StyleSheet, Platform, StatusBar } from 'react-native';

export default StyleSheet.create({
  mainContainer: {
    flex: 1,
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
  container: {
    flexGrow: 1, // Use flexGrow em vez de flex para permitir que o conteúdo cresça além do tamanho da tela
    padding: 16,
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
  },
  subtitle: {
    fontSize: 14,
    marginBottom: 0, // Removemos o marginBottom porque ele será aplicado no headerContainer
  },
  headerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
    marginBottom: 20,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 15,
  },
  activity: {
    padding: 16,
    borderRadius: 12,
    marginTop: 20,
  },

  activityTitle: {
    fontSize: 16,
    fontWeight: "bold",
  },
  activitySubtitle: {
    fontSize: 12,
    marginBottom: 12,
  },
});
