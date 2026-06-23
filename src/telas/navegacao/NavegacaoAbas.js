import React, { useState } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import TelaResumo from '../TelaResumo';
import TelaCadastro from '../TelaCadastro';
import TelaListagem from '../TelaListagem';

const Tab = createBottomTabNavigator();

export default function NavegacaoAbas() {
  const [lista, setLista] = useState([]);

  function adicionarItem(novoItem) {
    setLista([...lista, novoItem]);
  }

  function removerItem(id) {
    const novaLista = lista.filter(item => item.id !== id);
    setLista(novaLista);
  }

  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen name="Início">
        {() => <TelaResumo lista={lista} />}
      </Tab.Screen>
      <Tab.Screen name="Cadastrar">
        {() => <TelaCadastro adicionarItem={adicionarItem} />}
      </Tab.Screen>
      <Tab.Screen name="Lista">
        {() => <TelaListagem lista={lista} removerItem={removerItem} />}
      </Tab.Screen>
    </Tab.Navigator>
  );
}