import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function TelaResumo({ lista }) {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Ola usuario! </Text>
      <Text style={styles.texto}>
        Seu arsenal tem {lista.length} exercício(s) cadastrado(s).
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#f0f4f8' },
  titulo: { fontSize: 26, fontWeight: 'bold', marginBottom: 10, color: '#333' },
  texto: { fontSize: 18, color: '#555' }
});