import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, Pressable } from 'react-native';

export default function App(){
  const [numero1, setNumero1] = useState("");
  const [numero2, setNumero2] = useState("");
  const [resultado, setResultado] = useState("");

  const somar = () => setResultado(Number(numero1) + Number(numero2));
  const subtrair = () => setResultado(Number(numero1) - Number(numero2));
  const multiplicar = () => setResultado(Number(numero1) * Number(numero2));
  const dividir = () => setResultado(Number(numero1) / Number(numero2));

  return(
    <View style={css.container}>
      <Text style={css.label}>Número 1:</Text>
      <TextInput 
        style={css.caixaTexto}
        value={numero1}
        onChangeText={setNumero1}
        keyboardType="numeric"
      />
      
      <Text style={css.label}>Número 2:</Text>
      <TextInput 
        style={css.caixaTexto}
        value={numero2}
        onChangeText={setNumero2}
        keyboardType="numeric"
      />
      
      <View style={css.gridBotoes}>
        <Pressable style={css.botao} onPress={somar}>
          <Text style={css.textoBotao}>Somar</Text>
        </Pressable>
        <Pressable style={css.botao} onPress={subtrair}>
          <Text style={css.textoBotao}>Subtrair</Text>
        </Pressable>
        <Pressable style={css.botao} onPress={multiplicar}>
          <Text style={css.textoBotao}>Multiplicar</Text>
        </Pressable>
        <Pressable style={css.botao} onPress={dividir}>
          <Text style={css.textoBotao}>Dividir</Text>
        </Pressable>
      </View>

      {resultado !== "" && (
        <Text style={css.resultado}>Resultado: {resultado}</Text>
      )}
    </View>
  );
}

const css = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    backgroundColor: '#f4f4f4',
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 8,
    color: '#333',
  },
  caixaTexto: {
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    height: 50,
    paddingHorizontal: 15,
    marginBottom: 20,
    fontSize: 16,
  },
  gridBotoes: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  botao: {
    backgroundColor: '#4A90E2',
    height: 50,
    width: '48%',
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
    elevation: 20,
  },
  textoBotao: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  resultado: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#2E7D32',
    textAlign: 'center',
    marginTop: 30,
  }
});