import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import Feather from '@expo/vector-icons/Feather';
import Lanche from '../components/lanche';

export default function Produtos({ navegar, loja }) {
  // Lógica simples para mudar os produtos dependendo da loja
  const getProdutosLoja = () => {
    if (loja === 'McDonalds') {
      return (
        <>
          <Lanche nome="Big Mac" valor="25,90" imagem={require('../imagens/lanche.jpg')} onPress={() => navegar('Pedido', { produto: { nome: "Big Mac", valor: "25,90", img: require('../imagens/lanche.jpg') } })} />
          <Lanche nome="McChicken" valor="21,50" imagem={require('../imagens/cheder.png')} onPress={() => navegar('Pedido', { produto: { nome: "McChicken", valor: "21,50", img: require('../imagens/cheder.png') } })} />
        </>
      );
    }
    // Produtos padrão para as outras lojas
    return (
      <>
        <Lanche nome="Super X Tudo" valor="39,99" imagem={require('../imagens/superxtudo.png')} onPress={() => navegar('Pedido', { produto: { nome: "Super X Tudo", valor: "39,99", img: require('../imagens/superxtudo.png') } })} />
        <Lanche nome="X Bacon" valor="23,95" imagem={require('../imagens/xbacon1.png')} onPress={() => navegar('Pedido', { produto: { nome: "X Bacon", valor: "23,95", img: require('../imagens/xbacon1.png') } })} />
      </>
    );
  };

  return (
    <View style={css.container}>
      <View style={css.barraMenu}>
        <TouchableOpacity onPress={() => navegar('IFood')}>
          <Feather name="arrow-left" size={28} color="white" />
        </TouchableOpacity>
        <Text style={css.textoMenu}>Produtos - {loja}</Text>
        <Feather name="search" size={24} color="white" />
      </View>

      <ScrollView contentContainerStyle={css.listProd}>
        {getProdutosLoja()}
      </ScrollView>
    </View>
  );
}

const css = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f0f0f0' },
  barraMenu: {
    backgroundColor: '#ea1d2c',
    paddingHorizontal: 15,
    paddingTop: 50,
    paddingBottom: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  textoMenu: { fontSize: 22, color: '#FFFFFF', fontWeight: 'bold' },
  listProd: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    paddingTop: 20,
  },
});