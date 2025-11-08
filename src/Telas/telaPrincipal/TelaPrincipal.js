import { View, Text, ScrollView, StatusBar, Dimensions } from "react-native";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import { Card, InfoCard, ActivityItem } from ".";
import styles from "./styles";
import { useTheme } from "../../theme/ThemeContext";
import ThemeSwitcher from "../../Componentes/ThemeSwitcher";
import LanguageSwitcher from "../../Componentes/LanguageSwitcher";
import { useI18n } from "../../i18n/I18nProvider";
// ...existing code...

export default function TelaPrincipal({ navigation }) {
  // Esta abordagem força o React Native a permitir rolagem mesmo quando o conteúdo não
  // parece ser maior que a tela em alguns dispositivos
  const forceScroll = { height: 1500 }; // Altura forçada maior que qualquer tela de celular
  const { theme } = useTheme();
  const { t } = useI18n();
  
  return (
    <View style={[styles.mainContainer, { backgroundColor: theme.colors.background }]}>
      <StatusBar backgroundColor={theme.colors.background} barStyle={theme.colors.statusBar} />
      <ScrollView 
        style={[styles.container, { backgroundColor: theme.colors.background }]}
        contentContainerStyle={forceScroll}
        showsVerticalScrollIndicator={true}
      >
        <View style={styles.headerContainer}>
          <View>
            <Text style={[styles.title, { color: theme.colors.text }]}>{t("dashboard")}</Text>
            <Text style={[styles.subtitle, { color: theme.colors.subtitleText }]}>{t("manageMotos")}</Text>
          </View>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <LanguageSwitcher />
            <ThemeSwitcher />
          </View>
        </View>

      {/* Linha 1 - Ações */}
      <View style={styles.row}>
        <Card
          title={t("registerMoto")}
          subtitle={t("cameraRegister")}
          icon={<Ionicons name="camera" size={28} color={theme.colors.primary} />}
          onPress={() => navigation.navigate("TelaFormulario")}
        />
        <Card
          title={t("searchMotos")}
          subtitle={t("searchByPlate")}
          icon={<Ionicons name="search" size={28} color={theme.colors.primary} />}
          onPress={() => navigation.navigate("BuscarMoto")}
        />
      </View>

      {/* Linha 2 */}
      <View style={styles.row}>
        <Card
          title={t("patioMap")}
          subtitle={t("mapView")}
          icon={<Ionicons name="map" size={28} color={theme.colors.primary} />}
          onPress={() => navigation.navigate("PatioMoto")}
        />
        <Card
          title={t("aboutUs")}
          subtitle={t("aboutSubtitle")}
          icon={<MaterialCommunityIcons name="chart-bar" size={28} color={theme.colors.primary} />}
          onPress={() => navigation.navigate("SobreNos")}
        />
      </View>

      {/* Linha 3 - Métricas */}
      <View style={styles.row}>
        <InfoCard
          title="Total de Motos"
          value="127"
          subtitle="+12 desde ontem"
          icon={<Ionicons name="bicycle" size={22} color={theme.colors.primary} />}
        />
        <InfoCard
          title="Motos Hoje"
          value="23"
          subtitle="Cadastradas hoje"
          icon={<Ionicons name="camera" size={22} color={theme.colors.primary} />}
        />
      </View>

      <View style={styles.row}>
        <InfoCard
          title="Ocupação"
          value="85%"
          subtitle="Do pátio ocupado"
          icon={<Ionicons name="location" size={22} color={theme.colors.primary} />}
        />
      </View>

      {/* Atividade Recente */}
      <View style={[styles.activity, { backgroundColor: theme.colors.cardBackground }]}>
  <Text style={[styles.activityTitle, { color: theme.colors.text }]}>{t("recentActivity") || "Atividade Recente"}</Text>
  <Text style={[styles.activitySubtitle, { color: theme.colors.subtitleText }]}>{t("recentActivitySubtitle") || "Últimas movimentações no pátio"}</Text>

        <ActivityItem
          icon={<Ionicons name="camera" size={20} color={theme.colors.primary} />}
          title="Nova moto cadastrada"
          description="Honda CB 600F - ABC-1234 · há 5 minutos"
        />
        <ActivityItem
          icon={<Ionicons name="map" size={20} color={theme.colors.primary} />}
          title="Moto movimentada"
          description="Yamaha MT-07 - XYZ-5678 · há 12 minutos"
        />
        <ActivityItem
          icon={<Ionicons name="search" size={20} color={theme.colors.primary} />}
          title="Busca realizada"
          description='Pesquisa por "Kawasaki" · há 18 minutos'
        />
        <ActivityItem
          icon={<Ionicons name="bicycle" size={20} color={theme.colors.primary} />}
          title="Nova moto cadastrada"
          description="Suzuki GSX-R - XYZ-9876 · há 25 minutos"
        />
        <ActivityItem
          icon={<MaterialCommunityIcons name="chart-bar" size={20} color={theme.colors.primary} />}
          title="Relatório gerado"
          description="Relatório de ocupação mensal · há 40 minutos"
        />
        <ActivityItem
          icon={<Ionicons name="alert-circle" size={20} color={theme.colors.danger} />}
          title="Alerta de capacidade"
          description="Zona B com 95% de ocupação · há 55 minutos"
        />
      </View>
        
        {/* Área extra para garantir que o usuário possa rolar bastante */}
        <View style={{ height: 100 }} />
      </ScrollView>
    </View>
  );
}
