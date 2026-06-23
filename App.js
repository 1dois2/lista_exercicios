import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import NavegacaoAbas from './src/telas/navegacao/NavegacaoAbas';

export default function App() {
  return (
    <NavigationContainer>
      <NavegacaoAbas />
    </NavigationContainer>
  );
}