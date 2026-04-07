import {View, Text, StyleSheet, TextInput, Pressable, ScrollView} from 'react-native'

export default function TelaCep({ navegar }){

  return (
    <ScrollView style={css.container}>
      <Text style={css.titulo}>Consultar CEP</Text>

      <Text style={css.label}>CEP</Text>
      <TextInput style={css.caixaTexto} placeholder="Digite o CEP" />

      <Text style={css.label}>Logradouro</Text>
      <TextInput style={css.caixaTexto} placeholder="Digite o logradouro" />

      <Text style={css.label}>Bairro</Text>
      <TextInput style={css.caixaTexto} placeholder="Digite o bairro" />

      <Text style={css.label}>Cidade</Text>
      <TextInput style={css.caixaTexto} placeholder="Digite a cidade" />

      <Text style={css.label}>Estado</Text>
      <TextInput style={css.caixaTexto} placeholder="Digite o estado" />

      <Pressable style={css.botaoConsultar} onPress={() => { /* lógica para consultar CEP */ }}>
        <Text style={css.textoBotaoConsultar}>Consultar CEP</Text>
      </Pressable>

      <Pressable style={css.botaoVoltar} onPress={() => navegar('Usuario')}>
        <Text style={css.textoBotaoVoltar}>Voltar</Text>
      </Pressable>
    </ScrollView>
  )
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
  botaoConsultar: {
    backgroundColor: '#0065FF',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 15,
  },
  textoBotaoConsultar: {
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
})