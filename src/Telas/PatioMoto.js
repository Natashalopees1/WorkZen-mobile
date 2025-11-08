import React, { useState } from "react";
import { 
  View, 
  Text, 
  ScrollView, 
  StyleSheet, 
  TextInput, 
  TouchableOpacity,
  FlatList,
  Dimensions
} from "react-native";
import { Card, CardContent } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Ionicons } from "@expo/vector-icons";
import LanguageSwitcher from "../Componentes/LanguageSwitcher";
import { useI18n } from "../i18n/I18nProvider";

export default function PatioMoto({ navigation }) {
  const { t } = useI18n();
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#a7c1ad",
      padding: 16,
    },
    header: {
      marginBottom: 16,
    },
    title: {
      fontSize: 26,
      fontWeight: "bold",
      color: "#1f3b32",
    },
    subtitle: {
      fontSize: 14,
      color: "#2d5d50",
      opacity: 0.8,
      marginBottom: 8,
    },
    filterCard: {
      marginBottom: 16,
    },
    patioCard: {
      marginBottom: 16,
    },
    motorcyclesCard: {
      marginBottom: 16,
    },
    legendCard: {
      marginBottom: 24,
    },
    cardHeader: {
      flexDirection: "row",
      alignItems: "center",
      marginBottom: 8,
    },
    cardTitle: {
      fontSize: 18,
      fontWeight: "600",
      color: "#1f3b32",
    },
    cardDescription: {
      fontSize: 14,
      color: "#555",
      marginBottom: 16,
    },
    searchBar: {
      flexDirection: "row",
      alignItems: "center",
      backgroundColor: "#fff",
      borderWidth: 1,
      borderColor: "#ddd",
      borderRadius: 10,
      paddingHorizontal: 10,
      paddingVertical: 8,
      marginBottom: 12,
    },
    searchIcon: {
      marginRight: 8,
    },
    searchInput: {
      flex: 1,
      fontSize: 16,
      color: "#333",
    },
    statusFilter: {
      flexDirection: "row",
      justifyContent: "space-between",
    },
    filterButton: {
      flex: 1,
      paddingVertical: 8,
      paddingHorizontal: 12,
      marginHorizontal: 4,
      borderRadius: 8,
      backgroundColor: "#f5f5f5",
      alignItems: "center",
    },
    activeFilter: {
      backgroundColor: "#2d5d50",
    },
    filterText: {
      color: "#555",
      fontWeight: "500",
    },
    activeFilterText: {
      color: "#fff",
    },
    zonesRow: {
      flexDirection: "row",
      justifyContent: "space-between",
      marginBottom: 8,
    },
    zoneBox: {
      borderRadius: 8,
      padding: 6,
      alignItems: "center",
      justifyContent: "center",
      borderWidth: 1,
    },
    occupiedZone: {
      backgroundColor: "#e3f2e9",
      borderColor: "#3a895f",
    },
    freeZone: {
      backgroundColor: "#f9f9f9",
      borderColor: "#ddd",
    },
    selectedZone: {
      borderWidth: 2,
      borderColor: "#2d5d50",
    },
    zoneText: {
      fontWeight: "bold",
      fontSize: 14,
      color: "#1f3b32",
    },
    zonePlateText: {
      fontSize: 12,
      color: "#333",
    },
    zoneModelText: {
      fontSize: 10,
      color: "#555",
    },
    zoneFreeText: {
      fontSize: 12,
      color: "#999",
      marginTop: 4,
    },
    entranceMark: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "center",
      marginTop: 12,
      paddingVertical: 8,
      backgroundColor: "#f0f5f3",
      borderRadius: 8,
    },
    entranceText: {
      marginLeft: 6,
      color: "#1f3b32",
      fontSize: 14,
    },
    motoItem: {
      backgroundColor: "#fff",
      borderRadius: 12,
      padding: 12,
      marginBottom: 10,
      borderLeftWidth: 4,
      borderLeftColor: "#3a895f",
      shadowColor: "#000",
      shadowOffset: { width: 0, height: 1 },
      shadowOpacity: 0.1,
      shadowRadius: 2,
      elevation: 2,
    },
    motoHeader: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      marginBottom: 6,
    },
    plateContainer: {
      flexDirection: "row",
      alignItems: "center",
    },
    plateText: {
      fontWeight: "bold",
      fontSize: 16,
      color: "#1f3b32",
      marginLeft: 6,
    },
    statusBadge: {
      backgroundColor: "#e3f2e9",
      paddingVertical: 4,
      paddingHorizontal: 8,
      borderRadius: 16,
    },
    statusText: {
      color: "#2d5d50",
      fontSize: 12,
      fontWeight: "600",
    },
    motoDetails: {
      marginTop: 4,
    },
    motoDetailRow: {
      flexDirection: "row",
      justifyContent: "space-between",
      marginTop: 6,
    },
    motoDetailItem: {
      flexDirection: "row",
      alignItems: "center",
    },
    detailText: {
      fontSize: 14,
      color: "#555",
      marginLeft: 6,
    },
    legendItems: {
      marginTop: 4,
    },
    legendItem: {
      flexDirection: "row",
      alignItems: "center",
      marginBottom: 12,
    },
    legendColor: {
      width: 20,
      height: 20,
      borderRadius: 4,
      borderWidth: 1,
      marginRight: 10,
    },
    legendText: {
      fontSize: 14,
      color: "#333",
    },
    fab: {
      position: 'absolute',
      width: 56,
      height: 56,
      alignItems: 'center',
      justifyContent: 'center',
      right: 20,
      bottom: 20,
      backgroundColor: '#2d5d50',
      borderRadius: 30,
      elevation: 8,
      shadowColor: "#000",
      shadowOffset: { width: 0, height: 4 },
      shadowOpacity: 0.3,
      shadowRadius: 4,
    },
  });
  const [searchText, setSearchText] = useState("");
  const [statusFilter, setStatusFilter] = useState("Ativas");
  const [selectedZone, setSelectedZone] = useState(null);
  
  const [motorcycles] = useState([
    {
      plate: "ABC-1234",
      model: "Honda CB 600F Hornet",
      color: "Vermelha",
      zone: "A1",
      status: "Ativa",
    },
    {
      plate: "XYZ-5678",
      model: "Yamaha MT-07",
      color: "Azul",
      zone: "B2",
      status: "Ativa",
    },
    {
      plate: "GHI-3456",
      model: "Suzuki GSX-R 750",
      color: "Preta",
      zone: "D4",
      status: "Ativa",
    },
    {
      plate: "JKL-7890",
      model: "BMW F 850 GS",
      color: "Azul",
      zone: "A2",
      status: "Ativa",
    },
  ]);

  const zones = [
    ["A1", "A2", "A3", "A4"],
    ["B1", "B2", "B3", "B4"],
    ["C1", "C2", "C3", "C4"],
    ["D1", "D2", "D3", "D4"],
  ];

  const getMotoByZone = (zone) =>
    motorcycles.find((moto) => moto.zone === zone);

  const windowWidth = Dimensions.get('window').width;
  const zoneSize = (windowWidth - 64) / 4;
  
  // Função para mostrar informações da moto na zona
  const handleZonePress = (zone) => {
    setSelectedZone(zone === selectedZone ? null : zone);
  };
  
  // Renderiza cada zona do pátio
  const renderZone = (zone) => {
    const moto = getMotoByZone(zone);
    const isSelected = selectedZone === zone;
    
    return (
      <TouchableOpacity
        key={zone}
        style={[
          styles.zoneBox,
          moto ? styles.occupiedZone : styles.freeZone,
          isSelected && styles.selectedZone,
          { width: zoneSize - 8, height: zoneSize - 8 }
        ]}
        onPress={() => handleZonePress(zone)}
      >
        <Text style={styles.zoneText}>{zone}</Text>
        {moto ? (
          <>
            <Ionicons name="bicycle" size={16} color="#2d5d50" />
            <Text style={styles.zonePlateText}>{moto.plate}</Text>
            <Text style={styles.zoneModelText}>{moto.model.split(" ")[0]}</Text>
          </>
        ) : (
          <Text style={styles.zoneFreeText}>{t("freeSlot") || "Livre"}</Text>
        )}
      </TouchableOpacity>
    );
  };

  return (
    <ScrollView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
          <View>
            <Text style={styles.title}>{t("patioMap")}</Text>
            <Text style={styles.subtitle}>{t("mapSubtitle") || "Visualize a localização das motos no pátio"}</Text>
          </View>
          <LanguageSwitcher />
        </View>
      </View>

      {/* Filtros */}
      <Card style={styles.filterCard}>
        <CardContent>
          <Text style={styles.cardTitle}>{t("filters") || "Filtros"}</Text>
          
          <View style={styles.searchBar}>
            <Ionicons name="search" size={20} color="#2d5d50" style={styles.searchIcon} />
            <TextInput
              style={styles.searchInput}
              placeholder={t("parkSearchPlaceholder") || "Buscar por placa..."}
              value={searchText}
              onChangeText={setSearchText}
            />
            {searchText ? (
              <TouchableOpacity onPress={() => setSearchText("")}>
                <Ionicons name="close-circle" size={20} color="#888" />
              </TouchableOpacity>
            ) : null}
          </View>
          
          <View style={styles.statusFilter}>
            <TouchableOpacity 
              style={[styles.filterButton, statusFilter === "Ativas" && styles.activeFilter]}
              onPress={() => setStatusFilter("Ativas")}
            >
              <Text style={[styles.filterText, statusFilter === "Ativas" && styles.activeFilterText]}>
                {t("active") || "Ativas"}
              </Text>
            </TouchableOpacity>
            <TouchableOpacity 
              style={[styles.filterButton, statusFilter === "Removidas" && styles.activeFilter]}
              onPress={() => setStatusFilter("Removidas")}
            >
              <Text style={[styles.filterText, statusFilter === "Removidas" && styles.activeFilterText]}>
                {t("removed") || "Removidas"}
              </Text>
            </TouchableOpacity>
            <TouchableOpacity 
              style={[styles.filterButton, statusFilter === "Todas" && styles.activeFilter]}
              onPress={() => setStatusFilter("Todas")}
            >
              <Text style={[styles.filterText, statusFilter === "Todas" && styles.activeFilterText]}>
                {t("all") || "Todas"}
              </Text>
            </TouchableOpacity>
          </View>
        </CardContent>
      </Card>

      {/* Layout do Pátio */}
      <Card style={styles.patioCard}>
        <CardContent>
          <View style={styles.cardHeader}>
            <Ionicons name="map-outline" size={22} color="#2d5d50" />
            <Text style={[styles.cardTitle, { marginLeft: 8 }]}>{t("patioLayout") || "Layout do Pátio"}</Text>
          </View>
          
          <Text style={styles.cardDescription}>
            {t("touchZones") || "Toque nas zonas para ver detalhes das motocicletas"}
          </Text>
          
          {zones.map((row, rowIndex) => (
            <View key={`row-${rowIndex}`} style={styles.zonesRow}>
              {row.map((zone) => renderZone(zone))}
            </View>
          ))}
          
          <View style={styles.entranceMark}>
            <Ionicons name="enter-outline" size={18} color="#1f3b32" />
            <Text style={styles.entranceText}>{t("entranceExit") || "Entrada/Saída"}</Text>
          </View>
        </CardContent>
      </Card>
      
      {/* Lista de Motos */}
      <Card style={styles.motorcyclesCard}>
        <CardContent>
          <View style={styles.cardHeader}>
            <Ionicons name="bicycle-outline" size={22} color="#2d5d50" />
            <Text style={[styles.cardTitle, { marginLeft: 8 }]}>{t("motorcyclesTitle", { count: motorcycles.length }) || `Motocicletas (${motorcycles.length})`}</Text>
          </View>
          
          <Text style={styles.cardDescription}>
            {t("touchToLocate") || "Toque para localizar no mapa"}
          </Text>
          
          {motorcycles.map((moto, idx) => (
            <TouchableOpacity 
              key={idx} 
              style={styles.motoItem}
              onPress={() => handleZonePress(moto.zone)}
            >
              <View style={styles.motoHeader}>
                <View style={styles.plateContainer}>
                  <Ionicons name="key-outline" size={16} color="#2d5d50" />
                  <Text style={styles.plateText}>{moto.plate}</Text>
                </View>
                <View style={styles.statusBadge}>
                  <Text style={styles.statusText}>{moto.status}</Text>
                </View>
              </View>
              
              <View style={styles.motoDetails}>
                <View style={styles.motoDetailItem}>
                  <Ionicons name="bicycle" size={14} color="#555" />
                  <Text style={styles.detailText}>{moto.model}</Text>
                </View>
                
                <View style={styles.motoDetailRow}>
                  <View style={styles.motoDetailItem}>
                    <Ionicons name="color-palette-outline" size={14} color="#555" />
                    <Text style={styles.detailText}>{moto.color}</Text>
                  </View>
                  
                  <View style={styles.motoDetailItem}>
                    <Ionicons name="location-outline" size={14} color="#555" />
                    <Text style={styles.detailText}>{t("zoneLabel") || "Zona"} {moto.zone}</Text>
                  </View>
                </View>
              </View>
            </TouchableOpacity>
          ))}
        </CardContent>
      </Card>
      
      {/* Legenda */}
      <Card style={styles.legendCard}>
        <CardContent>
          <View style={styles.cardHeader}>
            <Ionicons name="information-circle-outline" size={22} color="#2d5d50" />
            <Text style={[styles.cardTitle, { marginLeft: 8 }]}>{t("legendTitle") || "Legenda"}</Text>
          </View>
          
          <View style={styles.legendItems}>
            <View style={styles.legendItem}>
              <View style={[styles.legendColor, { backgroundColor: '#e3f2e9', borderColor: '#3a895f' }]} />
              <Text style={styles.legendText}>{t("legendActive") || "Moto Ativa"}</Text>
            </View>
            
            <View style={styles.legendItem}>
              <View style={[styles.legendColor, { backgroundColor: '#e6f0ff', borderColor: '#4d79ff' }]} />
              <Text style={styles.legendText}>{t("legendMoved") || "Moto Movida"}</Text>
            </View>
            
            <View style={styles.legendItem}>
              <View style={[styles.legendColor, { backgroundColor: '#ffe6e6', borderColor: '#ff4d4d' }]} />
              <Text style={styles.legendText}>{t("legendRemoved") || "Moto Removida"}</Text>
            </View>
            
            <View style={styles.legendItem}>
              <View style={[styles.legendColor, { backgroundColor: '#f9f9f9', borderColor: '#ddd' }]} />
              <Text style={styles.legendText}>{t("legendFree") || "Vaga Livre"}</Text>
            </View>
          </View>
        </CardContent>
      </Card>
      
      {/* Botão flutuante para adicionar */}
      <TouchableOpacity 
        style={styles.fab}
        onPress={() => navigation.navigate("TelaFormulario")}
      >
        <Ionicons name="add" size={24} color="#fff" />
      </TouchableOpacity>
    </ScrollView>
  );
}
