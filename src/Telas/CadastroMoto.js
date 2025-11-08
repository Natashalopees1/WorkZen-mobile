import React, { useState } from "react";
import { 
  View, 
  Text, 
  TextInput, 
  StyleSheet, 
  TouchableOpacity, 
  ScrollView,
  KeyboardAvoidingView,
  Platform
} from "react-native";
import { Picker } from "@react-native-picker/picker";
import { Ionicons } from "@expo/vector-icons";
import Loading from "../components/ui/Loading";
import LanguageSwitcher from "../Componentes/LanguageSwitcher";
import { useI18n } from "../i18n/I18nProvider";
import { localNotification, getStoredPushToken, sendExpoPushNotification } from "../notifications/usePushNotifications";

export default function CadastroMoto({ navigation }) {
  const { t } = useI18n();
  const [placa, setPlaca] = useState("");
  const [modelo, setModelo] = useState("");
  const [marca, setMarca] = useState("");
  const [ano, setAno] = useState("");
  const [cor, setCor] = useState("");

  const marcas = ["Honda", "Yamaha", "Kawasaki", "Suzuki", "BMW", "Ducati", "Triumph", "Harley-Davidson"];
  const anos = Array.from({ length: 16 }, (_, i) => (2010 + i).toString());
  const cores = ["Azul", "Vermelha", "Branca", "Preto", "Prata", "Amarela", "Laranja", "Verde"];

  const handleSubmit = () => {
    if (!placa || !modelo) {
      alert(t("plateModelRequired") || "Os campos Placa e Modelo são obrigatórios!");
      return;
    }
    // antigo mock: substituído por chamada à API
    // implementação: POST http://localhost:8080/api/motos
    setLoading(true);
    const payload = {
      placa,
      marca,
      modelo,
      ano: ano ? Number(ano) : undefined,
      cor,
    };

    fetch("http://localhost:8080/api/motos", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    })
      .then(async (res) => {
        const text = await res.text();
        let data = null;
        try { data = text ? JSON.parse(text) : null; } catch (e) { data = text; }
        if (!res.ok) {
          const msg = (data && data.message) || `Erro ${res.status}`;
          throw new Error(msg);
        }
        return data;
      })
      .then((data) => {
        setLoading(false);
  // comportamento padrão: navegar para próxima etapa ou mostrar sucesso
  alert(t("motoRegistered") || "Moto cadastrada com sucesso!");

        // notificação local
        (async () => {
          try {
            await localNotification(t("motoRegistered") || "Moto cadastrada com sucesso!", `${(t("plateLabel") || "Placa").replace(':','')} ${placa}` , { placa });
            const token = await getStoredPushToken();
            if (token) {
              // enviar via Expo Push API (cliente)
              sendExpoPushNotification(token, t("motoRegistered") || "Moto cadastrada", `${(t("plateLabel") || "Placa").replace(':','')} ${placa}`, { placa });
            }
          } catch (e) {
            console.warn('Notification error', e);
          }
        })();

        navigation.navigate("TelaFormulario");
      })
      .catch((err) => {
  setLoading(false);
  alert((t("errorRegistering") || "Erro ao cadastrar moto: {{msg}}").replace("{{msg}}", err.message));
      });
  };

  const [loading, setLoading] = useState(false);
  

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={{ flex: 1 }}
    >
      <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
  <Loading visible={loading} message={t("sendingData") || "Enviando dados..."} />
        {/* Cabeçalho */}
        <View style={styles.header}>
          <TouchableOpacity 
            style={styles.backIcon}
            onPress={() => navigation.navigate("TelaFormulario")}
          >
            <Ionicons name="arrow-back" size={24} color="#1f3b32" />
          </TouchableOpacity>
          <View style={{ flex: 1, alignItems: 'center' }}>
            <Text style={styles.title}>{t("registerNewMoto")}</Text>
          </View>
          <LanguageSwitcher />
        </View>
        
        {/* Indicador de progresso */}
        <View style={styles.progressContainer}>
          <View style={styles.progressBar}>
            <View style={styles.progressFill} />
          </View>
          <Text style={styles.progressText}>{t("stepProgress")}</Text>
        </View>

        {/* Card principal */}
        <View style={styles.formCard}>
          {/* Campo Placa */}
          <View style={styles.inputGroup}>
            <View style={styles.labelContainer}>
              <Ionicons name="key-outline" size={18} color="#2d5d50" />
              <Text style={styles.label}>{t("plateLabelForm") || "Placa *"}</Text>
            </View>
              <TextInput
              style={styles.input}
              value={placa}
              onChangeText={setPlaca}
              placeholder={t("platePlaceholderExample") || "Ex: ABC-1234"}
              placeholderTextColor="#888"
              autoCapitalize="characters"
              maxLength={8}
            />
          </View>

          {/* Campo Modelo */}
          <View style={styles.inputGroup}>
            <View style={styles.labelContainer}>
              <Ionicons name="bicycle-outline" size={18} color="#2d5d50" />
              <Text style={styles.label}>{t("modelLabelForm") || "Modelo *"}</Text>
            </View>
            <TextInput
              style={styles.input}
              value={modelo}
              onChangeText={setModelo}
              placeholder={t("modelPlaceholderExample") || "Ex: CB 600F Hornet"}
              placeholderTextColor="#888"
            />
          </View>

          {/* Campo Marca */}
          <View style={styles.inputGroup}>
            <View style={styles.labelContainer}>
              <Ionicons name="bookmark-outline" size={18} color="#2d5d50" />
              <Text style={styles.label}>{t("brandLabelForm") || "Marca *"}</Text>
            </View>
            <View style={styles.styledPicker}>
              <Picker
                selectedValue={marca}
                onValueChange={(itemValue) => setMarca(itemValue)}
                dropdownIconColor="#1e6f5c"
              >
                <Picker.Item label={t("selectBrand") || "Selecione a marca"} value="" color="#888" />
                {marcas.map((m, idx) => (
                  <Picker.Item key={idx} label={m} value={m} />
                ))}
              </Picker>
            </View>
          </View>

          {/* Campo Ano */}
          <View style={styles.inputGroup}>
            <View style={styles.labelContainer}>
              <Ionicons name="calendar-outline" size={18} color="#2d5d50" />
              <Text style={styles.label}>{t("yearLabelForm") || "Ano"}</Text>
            </View>
            <View style={styles.styledPicker}>
              <Picker
                selectedValue={ano}
                onValueChange={(itemValue) => setAno(itemValue)}
                dropdownIconColor="#1e6f5c"
              >
                <Picker.Item label={t("selectYear") || "Selecione o ano"} value="" color="#888" />
                {anos.map((a, idx) => (
                  <Picker.Item key={idx} label={a} value={a} />
                ))}
              </Picker>
            </View>
          </View>

          {/* Campo Cor */}
          <View style={styles.inputGroup}>
            <View style={styles.labelContainer}>
              <Ionicons name="color-palette-outline" size={18} color="#2d5d50" />
              <Text style={styles.label}>{t("colorLabelForm") || "Cor"}</Text>
            </View>
            <View style={styles.styledPicker}>
              <Picker
                selectedValue={cor}
                onValueChange={(itemValue) => setCor(itemValue)}
                dropdownIconColor="#1e6f5c"
              >
                <Picker.Item label={t("selectColor") || "Selecione a cor"} value="" color="#888" />
                {cores.map((c, idx) => (
                  <Picker.Item key={idx} label={c} value={c} />
                ))}
              </Picker>
            </View>
          </View>
        </View>

        {/* Dica */}
        <View style={styles.tipContainer}>
          <Ionicons name="information-circle" size={20} color="#2d5d50" />
          <Text style={styles.tipText}>
            {t("nextStepTip") || "Na próxima etapa você definirá a localização da moto no pátio."}
          </Text>
        </View>

        {/* Botões */}
        <View style={styles.buttonsContainer}>
          <TouchableOpacity 
            style={[styles.button, styles.backButton]} 
            onPress={() => navigation.navigate("TelaFormulario")}
          >
            <Ionicons name="arrow-back" size={18} color="#fff" style={styles.buttonIcon} />
            <Text style={styles.buttonText}>{t("back") || "Voltar"}</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.button, styles.submitButton]} onPress={handleSubmit}>
            <Text style={styles.buttonText}>{t("save") || "Salvar"}</Text>
            <Ionicons name="arrow-forward" size={18} color="#fff" style={styles.buttonIconRight} />
          </TouchableOpacity>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#a7c1ad", // Fundo suave
  },
  contentContainer: {
    padding: 20,
    paddingBottom: 40,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 16,
    position: "relative",
    paddingVertical: 5,
  },
  backIcon: {
    position: "absolute",
    left: 0,
    zIndex: 10,
    padding: 4,
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#1f3b32",
    textAlign: "center",
    flex: 1,
  },
  progressContainer: {
    marginBottom: 24,
  },
  progressBar: {
    height: 6,
    backgroundColor: "#d1e6da",
    borderRadius: 4,
    marginBottom: 8,
  },
  progressFill: {
    width: "50%", // Primeira etapa de duas
    height: 6,
    backgroundColor: "#2d5d50",
    borderRadius: 4,
  },
  progressText: {
    color: "#2d5d50",
    fontSize: 13,
    fontWeight: "500",
  },
  formCard: {
    backgroundColor: "#fff",
    borderRadius: 16,
    padding: 20,
    marginBottom: 16,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  inputGroup: {
    marginBottom: 18,
  },
  labelContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 6,
  },
  label: {
    fontSize: 15,
    fontWeight: "500",
    color: "#1f3b32",
    marginLeft: 6,
  },
  input: {
    backgroundColor: "#f9f9f9",
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 10,
    padding: 14,
    fontSize: 16,
    color: "#333",
  },
  styledPicker: {
    backgroundColor: "#f9f9f9",
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 10,
    overflow: "hidden",
  },
  tipContainer: {
    flexDirection: "row",
    backgroundColor: "#dff0e9",
    borderRadius: 12,
    padding: 14,
    marginBottom: 24,
    alignItems: "center",
  },
  tipText: {
    marginLeft: 10,
    color: "#2d5d50",
    flex: 1,
    fontSize: 14,
  },
  buttonsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  button: {
    flex: 1,
    padding: 16,
    borderRadius: 12,
    marginHorizontal: 6,
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 2,
  },
  buttonIcon: {
    marginRight: 8,
  },
  buttonIconRight: {
    marginLeft: 8,
  },
  backButton: {
    backgroundColor: "#8a9a8a",
  },
  submitButton: {
    backgroundColor: "#2d5d50",
  },
  buttonText: {
    color: "#fff",
    fontWeight: "600",
    fontSize: 15,
  },
});
