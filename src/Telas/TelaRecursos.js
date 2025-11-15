import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Linking,
} from "react-native";
import {
  Book,
  Phone,
  Video,
  FileText,
} from "lucide-react-native";

export default function SupportResources() {
  const openLink = (url) => {
    Linking.openURL(url);
  };

  const callCVV = () => {
    Linking.openURL("tel:188");
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.hero}>
        <Book color="#fff" size={28} />
        <View style={{ marginLeft: 12, flex: 1 }}>
          <Text style={styles.heroTitle}>Recursos de Apoio</Text>
          <Text style={styles.heroSubtitle}>Materiais e suporte para cuidar da sua saúde mental</Text>
        </View>
      </View>

      <View style={styles.grid}>
        <TouchableOpacity style={styles.card} activeOpacity={0.85} onPress={() => openLink('https://example.com/artigos')}>
          <View style={styles.cardHeader}>
            <Book color="#2563EB" size={24} />
            <Text style={styles.cardTitle}>Artigos e Guias</Text>
          </View>
          <TouchableOpacity style={styles.linkRow} onPress={() => openLink('https://example.com/estresse')}>
            <Text style={styles.linkText}>Como gerenciar o estresse no trabalho</Text>
            <Text style={styles.linkBadge}>Ver</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.linkRow} onPress={() => openLink('https://example.com/burnout')}>
            <Text style={styles.linkText}>Sinais de burnout e como prevenir</Text>
            <Text style={styles.linkBadge}>Ver</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.linkRow} onPress={() => openLink('https://example.com/mindfulness')}>
            <Text style={styles.linkText}>Técnicas de mindfulness para iniciantes</Text>
            <Text style={styles.linkBadge}>Ver</Text>
          </TouchableOpacity>
        </TouchableOpacity>

        <TouchableOpacity style={styles.card} activeOpacity={0.85} onPress={() => openLink('https://example.com/suporte')}>
          <View style={styles.cardHeader}>
            <Phone color="#2563EB" size={24} />
            <Text style={styles.cardTitle}>Suporte Profissional</Text>
          </View>
          <TouchableOpacity style={styles.linkRow} onPress={callCVV}>
            <Text style={styles.linkText}>CVV - Centro de Valorização da Vida: 188</Text>
            <Text style={styles.linkBadge}>Ligar</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.linkRow} onPress={() => openLink('https://example.com/caps')}>
            <Text style={styles.linkText}>CAPS - Centros de Atenção Psicossocial</Text>
            <Text style={styles.linkBadge}>Ver</Text>
          </TouchableOpacity>
        </TouchableOpacity>

        <TouchableOpacity style={styles.card} activeOpacity={0.85} onPress={() => openLink('https://example.com/meditacoes')}>
          <View style={styles.cardHeader}>
            <Video color="#2563EB" size={24} />
            <Text style={styles.cardTitle}>Vídeos e Meditações</Text>
          </View>
          <TouchableOpacity style={styles.linkRow} onPress={() => openLink('https://example.com/meditacao')}>
            <Text style={styles.linkText}>Meditação guiada para ansiedade</Text>
            <Text style={styles.linkBadge}>Ver</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.linkRow} onPress={() => openLink('https://example.com/yoga')}>
            <Text style={styles.linkText}>Yoga no escritório</Text>
            <Text style={styles.linkBadge}>Ver</Text>
          </TouchableOpacity>
        </TouchableOpacity>

        <TouchableOpacity style={styles.card} activeOpacity={0.85} onPress={() => openLink('https://example.com/documentos')}>
          <View style={styles.cardHeader}>
            <FileText color="#2563EB" size={24} />
            <Text style={styles.cardTitle}>Documentos Úteis</Text>
          </View>
          <TouchableOpacity style={styles.linkRow} onPress={() => openLink('https://example.com/politica')}>
            <Text style={styles.linkText}>Política de saúde mental da empresa</Text>
            <Text style={styles.linkBadge}>Download</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.linkRow} onPress={() => openLink('https://example.com/direitos')}>
            <Text style={styles.linkText}>Direitos do trabalhador</Text>
            <Text style={styles.linkBadge}>Ver</Text>
          </TouchableOpacity>
        </TouchableOpacity>
      </View>

      <View style={styles.helpBox}>
        <Text style={styles.helpTitle}>Precisa de ajuda imediata?</Text>
        <Text style={styles.helpText}>
          Se você está em crise, não hesite em buscar ajuda profissional
        </Text>
        <TouchableOpacity style={styles.callButton} onPress={callCVV} activeOpacity={0.85}>
          <Phone color="#fff" size={18} />
          <Text style={styles.callText}>Ligar para CVV - 188</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: "#F9FAFB",
  },
  hero: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#2563EB',
    padding: 16,
    borderRadius: 16,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOpacity: 0.08,
    shadowRadius: 6,
    elevation: 3,
  },
  heroTitle: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '700',
  },
  heroSubtitle: {
    color: 'rgba(255,255,255,0.9)',
    fontSize: 13,
    marginTop: 4,
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#1E3A8A",
    marginBottom: 4,
  },
  subtitle: {
    fontSize: 15,
    color: "#3B82F6",
    marginBottom: 20,
  },
  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  card: {
    backgroundColor: "#FFFFFF",
    borderRadius: 16,
    padding: 16,
    width: "48%",
    marginBottom: 16,
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowRadius: 3,
    elevation: 2,
  },
  linkRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#F1F5F9',
  },
  linkText: {
    color: '#0F172A',
    fontSize: 14,
    flex: 1,
    marginRight: 8,
  },
  linkBadge: {
    backgroundColor: '#EEF2FF',
    color: '#2563EB',
    paddingVertical: 4,
    paddingHorizontal: 8,
    borderRadius: 8,
    fontSize: 12,
    fontWeight: '700',
  },
  cardHeader: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 8,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#1E3A8A",
    marginLeft: 8,
  },
  link: {
    color: "#2563EB",
    fontSize: 14,
    marginVertical: 2,
  },
  helpBox: {
    backgroundColor: "#EFF6FF",
    borderRadius: 16,
    padding: 16,
    borderWidth: 1,
    borderColor: "#BFDBFE",
    marginTop: 12,
    alignItems: "center",
  },
  helpTitle: {
    fontWeight: "bold",
    color: "#1E3A8A",
    fontSize: 16,
    marginBottom: 4,
  },
  helpText: {
    color: "#3B82F6",
    fontSize: 14,
    marginBottom: 10,
    textAlign: "center",
  },
  callButton: {
    flexDirection: "row",
    alignItems: "center",
  backgroundColor: "#111827",
  borderRadius: 999,
  paddingVertical: 12,
  paddingHorizontal: 20,
  },
  callText: {
    color: "#fff",
    fontWeight: "600",
    marginLeft: 6,
  },
});
