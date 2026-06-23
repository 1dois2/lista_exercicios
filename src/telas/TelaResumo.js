import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function TelaResumo({ lista }) {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Bem-vindo atleta!</Text>
      <Text style={styles.texto}>
        Sua lista tem {lista.length} exercícios cadastrados.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, 
    alignItems: 'center', 
    justifyContent: 'center', 
    backgroundColor: '#f0f4f8' 
},
  titulo: { fontSize: 26, 
    fontWeight: 'bold', 
    marginBottom: 10, 
    color: '#333'
},
  texto: { fontSize: 18, 
    color: '#555' 
}
});