import {View, Text, StyleSheet, TextInput, Pressable} from 'react-native'

export default function Cep(){

  return (
    <View style={css.container}>
    <Text style={css.label}> CEP </Text>
    <TextInput style={css.caixaTexto}/>

    <Text style={css.label}> Logradouro </Text>
    <TextInput style={css.caixaTexto}/>

    <Text style={css.label}> Bairro </Text>
    <TextInput style={css.caixaTexto}/>

    <Text style={css.label}> Cidade </Text>
    <TextInput style={css.caixaTexto}/>

    <Text style={css.label}> Estado </Text>
    <TextInput style={css.caixaTexto}/>

    <Pressable style={css.botao}>
    Consultar CEP
    </Pressable>
    </View>

    
    
  )
}

const css = StyleSheet.create({
  container:{
  backgroundColor:'#0065FF',
  flex:1
  },

  caixaTexto:{
    backgroundColor:'#FFFFFF',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-evenly',
    paddingBottom: 20,
    paddingHorizontal: 5,
  }

  
})