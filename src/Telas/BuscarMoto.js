import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView, StyleSheet, TextInput, TouchableOpacity, Platform } from "react-native";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Ionicons } from "@expo/vector-icons";
import Loading from "../components/ui/Loading";
import LanguageSwitcher from "../Componentes/LanguageSwitcher";
import { useI18n } from "../i18n/I18nProvider";


export default function BuscarMoto({ navigation }) {
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#a7c1ad",
      padding: 16,
    },
    header: {
      marginBottom: 20,
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
    },
    searchBar: {
      flexDirection: "row",
      alignItems: "center",
      backgroundColor: "#fff",
      borderRadius: 12,
      padding: 10,
      marginBottom: 20,
      shadowColor: "#000",
      shadowOffset: { width: 0, height: 1 },
      shadowOpacity: 0.1,
      shadowRadius: 3,
      elevation: 2,
    },
    searchInput: {
      flex: 1,
      marginLeft: 10,
      fontSize: 16,
      color: "#333",
    },
    motoCard: {
      marginBottom: 15,
      borderLeftWidth: 4,
      borderLeftColor: "#2d5d50",
    },
    cardHeaderContent: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
    },
    statusBadge: {
      backgroundColor: "#8a9a8a",
      paddingVertical: 4,
      paddingHorizontal: 10,
      borderRadius: 20,
    },
    statusText: {
      color: "#2d5d50",
      fontWeight: "600",
      fontSize: 12,
    },
    modeloText: {
      fontSize: 16,
      color: "#333",
      marginBottom: 12,
    },
    detailsRow: {
      flexDirection: "row",
      justifyContent: "space-between",
      marginBottom: 10,
    },
    detailItem: {
      flexDirection: "row",
      alignItems: "center",
    },
    detailText: {
      marginLeft: 6,
      color: "#555",
      fontSize: 14,
    },
    buttonRow: {
      flexDirection: "row",
      justifyContent: "space-between",
      marginTop: 15,
    },
    detailsButton: {
      flex: 1,
      marginRight: 8,
    },
    locateButton: {
      flex: 1,
      marginLeft: 8,
      backgroundColor: "#2d5d50",
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
  const [busca, setBusca] = useState("");
  const [motos, setMotos] = useState([]);
  const [loading, setLoading] = useState(false);
  const { t } = useI18n();

  useEffect(() => {
    let mounted = true;
    const fetchMotos = async () => {
      setLoading(true);
      const base = "http://localhost:8080";
      const url = `${base}/api/motos`;
      try {
        const res = await fetch(url);
        const text = await res.text();
        let data = null;
        try { data = text ? JSON.parse(text) : []; } catch (e) { data = text; }
        if (!res.ok) throw new Error((data && data.message) || `Erro ${res.status}`);
        if (mounted) setMotos(Array.isArray(data) ? data : []);
      } catch (err) {
        console.warn('Erro ao buscar motos:', err.message || err);
        // Em caso de erro, podemos manter lista vazia ou um fallback; por ora, manter vazia
      } finally {
        if (mounted) setLoading(false);
      }
    };
    fetchMotos();
    return () => { mounted = false; };
  }, []);
  
  return (
    <ScrollView style={styles.container}>
      {/* Título da página */}
      <View style={styles.header}>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
          <View>
            <Text style={styles.title}>{t("searchMotos")}</Text>
            <Text style={styles.subtitle}>{t("searchSubtitle") || "Encontre e gerencie as motos no pátio"}</Text>
          </View>
          <LanguageSwitcher />
        </View>
      </View>

      {/* Barra de busca */}
      <View style={styles.searchBar}>
        <Ionicons name="search-outline" size={20} color="#2d5d50" />
        <TextInput 
          style={styles.searchInput}
          placeholder={t("searchPlaceholder") || "Buscar por placa, marca ou modelo"}
          value={busca}
          onChangeText={setBusca}
        />
        {busca ? (
          <TouchableOpacity onPress={() => setBusca("")}>
            <Ionicons name="close-circle" size={20} color="#888" />
          </TouchableOpacity>
        ) : null}
      </View>

  <Loading visible={loading} message={t("loadingMotos") || "Carregando motos..."} />
  {/* Cards das motos */}
  {motos.map((moto, index) => (
        <Card key={moto.id ?? index} style={styles.motoCard}>
          <CardHeader>
            <View style={styles.cardHeaderContent}>
              <CardTitle>{moto.placa ?? "--"}</CardTitle>
              <View style={styles.statusBadge}>
                <Text style={styles.statusText}>{moto.status ?? "-"}</Text>
              </View>
            </View>
          </CardHeader>
          <CardContent>
            {/* Exibir ID e Marca/Modelo */}
            <Text style={styles.modeloText}>{`${moto.marca ?? ""} ${moto.modelo ?? ""}`.trim() || (t("modelNotProvided") || "Modelo não informado")}</Text>
            <View style={{ marginBottom: 8 }}>
              <Text style={{ color: "#444", fontSize: 13 }}><Text style={{ fontWeight: '700' }}>{t("idLabel") || "ID:"} </Text>{moto.id ?? "-"}</Text>
            </View>

            <View style={styles.detailsRow}>
              <View style={styles.detailItem}>
                <Ionicons name="shield-checkmark-outline" size={16} color="#777" />
                <Text style={styles.detailText}>{`${t("plateLabel") || "Placa:"} ${moto.placa ?? "-"}`}</Text>
              </View>
              <View style={styles.detailItem}>
                <Ionicons name="color-palette-outline" size={16} color="#777" />
                <Text style={styles.detailText}>{`${t("colorLabel") || "Cor:"} ${moto.cor ?? "-"}`}</Text>
              </View>
            </View>

            <View style={styles.detailsRow}>
              <View style={styles.detailItem}>
                <Ionicons name="cube-outline" size={16} color="#777" />
                <Text style={styles.detailText}>{`${t("brandLabel") || "Marca:"} ${moto.marca ?? "-"}`}</Text>
              </View>
              <View style={styles.detailItem}>
                <Ionicons name="calendar-outline" size={16} color="#777" />
                <Text style={styles.detailText}>{`${t("yearLabel") || "Ano:"} ${moto.ano ?? "-"}`}</Text>
              </View>
            </View>

            <View style={styles.buttonRow}>
                <Button 
                style={styles.detailsButton}
                variant="outline"
                onPress={() => console.log("Ver detalhes")}
              >
                {t("viewDetails") || "Ver detalhes"}
              </Button>
              <Button 
                style={styles.locateButton}
                onPress={() => console.log("Localizar")}
              >
                {t("locate") || "Localizar"}
              </Button>
            </View>
          </CardContent>
        </Card>
      ))}
      
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
