import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, Pressable, ScrollView } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function TelaLogin({ navegar }) {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const handleLogin = () => {
    // Navega para a tela principal após o login
    navegar('IFood');
  };

  return (
    <ScrollView contentContainerStyle={css.container}>
      <View style={css.card}>
        <View style={css.logoContainer}>
          <MaterialCommunityIcons name="react" size={48} color="#61dafb" />
        </View>

        <Text style={css.titulo}>Bem-vindo</Text>
        <Text style={css.subtitulo}>Faça login para continuar</Text>

        <View style={css.formGroup}>
          <TextInput
            style={css.input}
            value={email}
            onChangeText={setEmail}
            placeholder="Email"
            placeholderTextColor="#A1A1AA"
            keyboardType="email-address"
            autoCapitalize="none"
          />

          <TextInput
            style={css.input}
            value={senha}
            onChangeText={setSenha}
            placeholder="Senha"
            placeholderTextColor="#A1A1AA"
            secureTextEntry
          />
        </View>

        <Pressable style={css.button} onPress={handleLogin}>
          <Text style={css.buttonText}>Entrar</Text>
        </Pressable>

        <Pressable style={css.forgotButton} onPress={() => {}}>
          <Text style={css.forgotText}>Esqueceu sua senha?</Text>
        </Pressable>
      </View>
    </ScrollView>
  );
}

const css = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#F3F4F6',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  card: {
    width: '100%',
    maxWidth: 420,
    backgroundColor: '#FFFFFF',
    borderRadius: 32,
    padding: 30,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.08,
    shadowOffset: { width: 0, height: 6 },
    shadowRadius: 20,
    elevation: 8,
  },
  logoContainer: {
    width: 96,
    height: 96,
    borderRadius: 26,
    backgroundColor: '#111827',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 24,
  },
  titulo: {
    fontSize: 28,
    fontWeight: '700',
    color: '#111827',
    marginBottom: 8,
  },
  subtitulo: {
    fontSize: 15,
    color: '#6B7280',
    marginBottom: 28,
    textAlign: 'center',
  },
  formGroup: {
    width: '100%',
  },
  input: {
    width: '100%',
    height: 52,
    backgroundColor: '#F8FAFC',
    borderRadius: 999,
    paddingHorizontal: 18,
    marginBottom: 16,
    fontSize: 16,
    color: '#111827',
    borderWidth: 1,
    borderColor: '#E5E7EB',
  },
  button: {
    width: '100%',
    backgroundColor: '#2563EB',
    borderRadius: 999,
    paddingVertical: 16,
    alignItems: 'center',
    marginTop: 8,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '700',
  },
  forgotButton: {
    marginTop: 18,
  },
  forgotText: {
    color: '#2563EB',
    fontSize: 14,
    fontWeight: '600',
  },
});