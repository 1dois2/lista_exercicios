import React from 'react';
import { View, Text, StyleSheet, FlatList, Button } from 'react-native';

export default function TelaListagem({ lista, removerItem }) {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Sua lista de Treino</Text>
      
      <FlatList 
        data={lista}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <View style={styles.itemContainer}>
            <View style={styles.textoContainer}>
              <Text style={styles.nome}>{item.nome} ({item.musculo})</Text>
              <Text style={styles.detalhes}>{item.series} séries de {item.repeticoes}</Text>
            </View>
            <Button title='Remover' color='red' onPress={() => removerItem(item.id)} />
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, 
    padding: 20 
},
  titulo: { fontSize: 24, 
    fontWeight: 'bold', 
    marginBottom: 20, 
    textAlign: 'center', 
    marginTop: 30 
},
  itemContainer: { flexDirection: 'row', 
    backgroundColor: '#fff', 
    padding: 15, 
    marginBottom: 10, 
    borderRadius: 5, 
    borderWidth: 1, 
    borderColor: '#ddd', 
    alignItems: 'center' 
},
  textoContainer: { flex: 1 
  },
  nome: { fontSize: 18, 
    fontWeight: 'bold' 
},
  detalhes: { fontSize: 14, color: '#505050' }
});