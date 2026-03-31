import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, Pressable, ScrollView } from 'react-native';

export default function Usuario({ navegar }) {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');

  return (
    <ScrollView style={css.container}>
      <Text style={css.titulo}>Login</Text>

      <Text style={css.label}>Email</Text>
      <TextInput style={css.caixaTexto} value={nome} onChangeText={setNome} placeholder="Digite seu email" />

      <Text style={css.label}>Senha</Text>
      <TextInput style={css.caixaTexto} value={email} onChangeText={setEmail} keyboardType="email-address" placeholder="Digite sua Senha" />

      
      <Pressable style={css.botaoNavegar} onPress={() => navegar('TelaCep')}>
        <Text style={css.textoBotaoNavegar}>Cadastrar Endereço (CEP)</Text>
      </Pressable>

      <Pressable style={css.botaoVoltar} onPress={() => navegar('IFood')}>
        <Text style={css.textoBotaoVoltar}>Voltar para o Início</Text>
      </Pressable>
    </ScrollView>
  );
}

const css = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    padding: 20,
    paddingTop: 50,
  },
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#ea1d2c',
    marginBottom: 20,
    textAlign: 'center',
  },
  label: {
    fontSize: 16,
    color: '#333',
    marginBottom: 5,
    fontWeight: 'bold',
  },
  caixaTexto: {
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 5,
    padding: 10,
    marginBottom: 20,
  },
  botaoNavegar: {
    backgroundColor: '#0065FF',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 15,
  },
  textoBotaoNavegar: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
  botaoVoltar: {
    padding: 15,
    alignItems: 'center',
  },
  textoBotaoVoltar: {
    color: '#ea1d2c',
    fontSize: 16,
    fontWeight: 'bold',
  }
});