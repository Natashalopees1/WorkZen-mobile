import React, { useState, useEffect, useRef } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Animated } from "react-native";
import { Play, RotateCcw } from "lucide-react-native";

export default function BreathingExercise() {
  const [phase, setPhase] = useState("Inspire");
  const [count, setCount] = useState(4);
  const [isRunning, setIsRunning] = useState(false);
  const [cycle, setCycle] = useState(0);
  const animation = useRef(new Animated.Value(1)).current;
  const intervalRef = useRef(null);

  const phases = [
    { label: "Inspire", duration: 4, instruction: "Respire fundo pelo nariz" },
    { label: "Segure", duration: 4, instruction: "Segure o ar" },
    { label: "Expire", duration: 6, instruction: "Solte o ar lentamente" },
  ];

  const startAnimation = () => {
    Animated.sequence([
      Animated.timing(animation, { toValue: 1.5, duration: 4000, useNativeDriver: true }), // Inspire
      Animated.timing(animation, { toValue: 1.5, duration: 4000, useNativeDriver: true }), // Hold (mantém tamanho)
      Animated.timing(animation, { toValue: 1, duration: 6000, useNativeDriver: true }), // Expire
    ]).start(() => {
      if (isRunning) startCycle(); // Reinicia automaticamente se ativo
    });
  };

  const startCycle = () => {
    let phaseIndex = 0;
    setCycle((c) => c + 1);

    const runPhase = (index) => {
      const current = phases[index];
      setPhase(current.label);
      setCount(current.duration);

      let seconds = current.duration;
      const timer = setInterval(() => {
        seconds -= 1;
        setCount(seconds);
        if (seconds <= 0) {
          clearInterval(timer);
          if (index < phases.length - 1) {
            runPhase(index + 1);
          } else {
            // Reinicia o ciclo completo (4-4-6)
            if (isRunning) startCycle();
          }
        }
      }, 1000);
    };

    runPhase(phaseIndex);
    startAnimation();
  };

  const handleStart = () => {
    if (!isRunning) {
      setIsRunning(true);
      startCycle();
    }
  };

  const handleReset = () => {
    setIsRunning(false);
    setPhase("Inspire");
    setCount(4);
    animation.setValue(1);
    clearInterval(intervalRef.current);
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.logo}>🧠 WorkZen</Text>
        <Text style={styles.subtitle}>Bem-estar no trabalho</Text>
      </View>

      {/* Top Menu */}
      <View style={styles.menu}>
        <Text style={styles.menuItem}>Dashboard</Text>
        <Text style={[styles.menuItem, styles.menuActive]}>Respiração</Text>
        <Text style={styles.menuItem}>Recursos</Text>
      </View>

      {/* Breathing Exercise */}
      <View style={styles.exerciseContainer}>
        <Text style={styles.title}>Exercício de Respiração 4-4-6</Text>
        <Text style={styles.subtitle2}>Técnica comprovada para reduzir estresse e ansiedade</Text>

        <Animated.View
          style={[
            styles.circle,
            {
              transform: [{ scale: animation }],
            },
          ]}
        >
          <Text style={styles.counter}>{count}</Text>
        </Animated.View>

        <Text style={styles.phase}>{phase}</Text>
        <Text style={styles.instruction}>
          {phases.find((p) => p.label === phase)?.instruction}
        </Text>

        {/* Buttons */}
        <View style={styles.buttons}>
          <TouchableOpacity style={styles.startButton} onPress={handleStart}>
            <Play size={18} color="#fff" />
            <Text style={styles.startText}>Iniciar</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.resetButton} onPress={handleReset}>
            <RotateCcw size={18} color="#2563EB" />
            <Text style={styles.resetText}>Reiniciar</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F9FAFB",
    paddingTop: 50,
    alignItems: "center",
  },
  header: {
    alignItems: "flex-start",
    width: "90%",
    marginBottom: 10,
  },
  logo: {
    fontSize: 22,
    fontWeight: "700",
    color: "#1E3A8A",
  },
  subtitle: {
    color: "#6B7280",
    fontSize: 14,
  },
  menu: {
    flexDirection: "row",
    justifyContent: "flex-end",
    width: "90%",
    marginBottom: 24,
  },
  menuItem: {
    color: "#6B7280",
    marginLeft: 16,
    fontWeight: "500",
  },
  menuActive: {
    color: "#2563EB",
    fontWeight: "700",
  },
  exerciseContainer: {
    backgroundColor: "#FFFFFF",
    borderRadius: 20,
    width: "90%",
    alignItems: "center",
    paddingVertical: 24,
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowRadius: 6,
    elevation: 2,
  },
  title: {
    fontSize: 18,
    fontWeight: "700",
    color: "#111827",
  },
  subtitle2: {
    color: "#2563EB",
    fontSize: 13,
    marginBottom: 20,
  },
  circle: {
    width: 180,
    height: 180,
    borderRadius: 180,
    backgroundColor: "#2563EB",
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 16,
  },
  counter: {
    color: "#fff",
    fontSize: 48,
    fontWeight: "700",
  },
  phase: {
    fontSize: 20,
    fontWeight: "700",
    color: "#2563EB",
  },
  instruction: {
    fontSize: 14,
    color: "#2563EB",
    marginBottom: 20,
  },
  buttons: {
    flexDirection: "row",
    marginTop: 10,
  },
  startButton: {
    flexDirection: "row",
    backgroundColor: "#2563EB",
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 20,
    alignItems: "center",
    marginRight: 10,
  },
  startText: {
    color: "#fff",
    fontWeight: "600",
    marginLeft: 6,
  },
  resetButton: {
    flexDirection: "row",
    borderColor: "#2563EB",
    borderWidth: 1.5,
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 20,
    alignItems: "center",
  },
  resetText: {
    color: "#2563EB",
    fontWeight: "600",
    marginLeft: 6,
  },
});
