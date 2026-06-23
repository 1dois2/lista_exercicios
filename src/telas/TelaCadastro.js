import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';

export default function TelaCadastro({ adicionarItem }) {
  const [nome, setNome] = useState('');
  const [musculo, setMusculo] = useState('');
  const [series, setSeries] = useState('');
  const [repeticoes, setRepeticoes] = useState('');

  function salvarDados() {
    if (nome.trim() === '' || musculo.trim() === '' || series.trim() === '' || repeticoes.trim() === '') {
      Alert.alert('Erro', 'Preencha todos os 4 campos!');
      return;
    }

    const novoDado = {
      id: String(Date.now()),
      nome: nome,
      musculo: musculo,
      series: series,
      repeticoes: repeticoes
    };

    adicionarItem(novoDado);
    Alert.alert('Exercício cadastrado com sucesso.');

    setNome('');
    setMusculo('');
    setSeries('');
    setRepeticoes('');
  }

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Cadastrar Exercício</Text>
      
      <TextInput placeholder='Nome do Exercício' style={styles.input} onChangeText={setNome} value={nome} />
      <TextInput placeholder='Músculo' style={styles.input} onChangeText={setMusculo} value={musculo} />
      <TextInput placeholder='Quantidade de Séries' style={styles.input} onChangeText={setSeries} value={series} keyboardType='numeric' /> 
      <TextInput placeholder='Repetições por Série' style={styles.input} onChangeText={setRepeticoes} value={repeticoes} keyboardType='numeric' /> 

      <Button title='Cadastrar na Lista de Treino' color='#28a745' onPress={salvarDados} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, 
    padding: 20, 
    justifyContent: 'center' 
},
  titulo: { fontSize: 24, 
    fontWeight: 'bold', 
    marginBottom: 20, 
    textAlign: 'center' 
},
  input: { borderWidth: 1, 
    borderColor: '#ccc', 
    padding: 10, 
    marginBottom: 15, 
    borderRadius: 5, 
    fontSize: 16 
}
});