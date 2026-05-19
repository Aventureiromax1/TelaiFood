import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

export default function Lanche({ nome, valor, imagem, onPress }) {
  return (
    <TouchableOpacity style={css.lanche} onPress={onPress}>
      <Image source={imagem} style={css.imagemLanche} resizeMode="contain" />
      <Text style={css.preco}>R$ {valor}</Text>
    </TouchableOpacity>
  );
}

const css = StyleSheet.create({
  lanche: {
    backgroundColor: '#ffffff',
    marginVertical: 10,
    marginHorizontal: 5,
    borderRadius: 15, // Mais arredondado como no print
    width: 100, // Largura fixa para manter o grid bonito
    height: 120,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    elevation: 3, // Sombra no Android
  },
  imagemLanche: {
    width: 70,
    height: 70,
    marginBottom: 5,
  },
  preco: {
    fontWeight: 'bold',
    fontSize: 14,
  }
});