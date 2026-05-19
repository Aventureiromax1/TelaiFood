import { View, Text, StyleSheet, Image, TouchableOpacity, Alert } from 'react-native';
import Feather from '@expo/vector-icons/Feather';

export default function Pedido({ navegar, produto }) {
  
  const finalizarPedido = () => {
    Alert.alert("Sucesso!", `Seu pedido do ${produto.nome} foi realizado!`, [
      { text: "OK", onPress: () => navegar('IFood') }
    ]);
  };

  return (
    <View style={css.container}>
      <View style={css.header}>
        <TouchableOpacity onPress={() => navegar('IFood')}>
          <Feather name="x" size={60} color="black" />
        </TouchableOpacity>
      </View>

      <View style={css.content}>
        <Image source={produto.img} style={css.imagem} resizeMode="contain" />
        <Text style={css.nome}>{produto.nome}</Text>
        <Text style={css.preco}>R$ {produto.valor}</Text>
        
        <TouchableOpacity style={css.botaoAdicionar} onPress={finalizarPedido}>
          <Text style={css.textoBotao}>Fazer Pedido • R$ {produto.valor}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const css = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
  header: { paddingTop: 50, paddingHorizontal: 20 },
  content: { flex: 1, alignItems: 'center', justifyContent: 'center', padding: 20 },
  imagem: { width: 400, height: 400, marginBottom: 20 },
  nome: { fontSize: 28, fontWeight: 'bold', marginBottom: 10, textAlign: 'center' },
  preco: { fontSize: 22, color: '#ea1d2c', fontWeight: 'bold', marginBottom: 40 },
  botaoAdicionar: {
    backgroundColor: '#ea1d2c',
    width: '100%',
    padding: 18,
    borderRadius: 8,
    alignItems: 'center',
  },
  textoBotao: { color: '#fff', fontSize: 18, fontWeight: 'bold' }
});