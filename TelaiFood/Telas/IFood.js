import { View, ScrollView, Image, StyleSheet, TouchableOpacity, Text } from 'react-native';
import Lanche from '../components/lanche';

export default function IFood({ navegar }) {
  const LojaIcon = ({ nome, logo }) => (
    <TouchableOpacity style={css.lojaIcon} onPress={() => navegar('Produtos', { loja: nome })}>
      <Image source={logo} style={css.lojaImage} resizeMode="contain" />
    </TouchableOpacity>
  );

  return (
    <View style={css.container}>
      <View style={css.header}>
        <Image
          source={require('../imagens/logo_ifood_branco.png')}
          style={css.logoIfood}
          resizeMode="contain"
        />
        <TouchableOpacity style={css.btnPerfil} onPress={() => navegar('Usuario')}>
          <Text style={css.txtPerfil}>Perfil</Text>
        </TouchableOpacity>
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={css.containerLojas}>
          <LojaIcon nome="Confiança" logo={require('../imagens/logo-confianca.png')} /> 
          <LojaIcon nome="Tauste" logo={require('../imagens/logo_tauste.png')} />
          <LojaIcon nome="Atacadão" logo={require('../imagens/kozan_logo.png')} />
          <LojaIcon nome="McDonalds" logo={require('../imagens/mcLogo.png')} />
        </View>

        <View style={css.gridProdutos}>
          <Lanche 
            nome="Super X Tudo" 
            valor="44,50" 
            imagem={require('../imagens/superxtudo.png')} 
            onPress={() => navegar('Pedido', { produto: { nome: "Super X Tudo", valor: "44,50", img: require('../imagens/superxtudo.png') } })} 
          />
          <Lanche 
            nome="X Bacon" 
            valor="35,50" 
            imagem={require('../imagens/xbacon.png')} 
            onPress={() => navegar('Pedido', { produto: { nome: "X Bacon", valor: "35,50", img: require('../imagens/xbacon.png') } })} 
          />
          <Lanche
            nome="X Salada" 
            valor="19,50" 
            imagem={require('../imagens/xsalada.png')} 
            onPress={() => navegar('Pedido', { produto: { nome: "X Salada", valor: "19,50", img: require('../imagens/xsalada.png') } })} 
          />
          <Lanche 
            nome="X Cheddar" 
            valor="27,50" 
            imagem={require('../imagens/cheder.png')} 
            onPress={() => navegar('Pedido', { produto: { nome: "X Cheddar", valor: "27,50", img: require('../imagens/cheder.png') } })} 
          />
          <Lanche 
            nome="X Calabresa" 
            valor="26,50" 
            imagem={require('../imagens/superxtudo.png')} 
            onPress={() => navegar('Pedido', { produto: { nome: "X Calabresa", valor: "26,50", img: require('../imagens/superxtudo.png') } })} 
          />
          <Lanche 
            nome="X Toucinho" 
            valor="28,00" 
            imagem={require('../imagens/xbacon.png')} 
            onPress={() => navegar('Pedido', { produto: { nome: "X Toucinho", valor: "28,00", img: require('../imagens/xbacon.png') } })} 
          />
          <Lanche 
            nome="X Frango" 
            valor="22,50" 
            imagem={require('../imagens/xsalada.png')} 
            onPress={() => navegar('Pedido', { produto: { nome: "X Frango", valor: "22,50", img: require('../imagens/xsalada.png') } })} 
          />
          <Lanche 
            nome="X Vegetariano" 
            valor="18,50" 
            imagem={require('../imagens/cheder.png')} 
            onPress={() => navegar('Pedido', { produto: { nome: "X Vegetariano", valor: "18,50", img: require('../imagens/cheder.png') } })} 
          />
          <Lanche 
            nome="X Ovo" 
            valor="16,00" 
            imagem={require('../imagens/superxtudo.png')} 
            onPress={() => navegar('Pedido', { produto: { nome: "X Ovo", valor: "16,00", img: require('../imagens/superxtudo.png') } })} 
          />
          <Lanche 
            nome="X Queijo" 
            valor="20,00" 
            imagem={require('../imagens/xbacon.png')} 
            onPress={() => navegar('Pedido', { produto: { nome: "X Queijo", valor: "20,00", img: require('../imagens/xbacon.png') } })} 
          />
          <Lanche 
            nome="X Picanha" 
            valor="32,00" 
            imagem={require('../imagens/xsalada.png')} 
            onPress={() => navegar('Pedido', { produto: { nome: "X Picanha", valor: "32,00", img: require('../imagens/xsalada.png') } })} 
          />
          <Lanche 
            nome="X Monstro" 
            valor="48,00" 
            imagem={require('../imagens/cheder.png')} 
            onPress={() => navegar('Pedido', { produto: { nome: "X Monstro", valor: "48,00", img: require('../imagens/cheder.png') } })} 
          />
          <Lanche 
            nome="X Duplo" 
            valor="38,50" 
            imagem={require('../imagens/superxtudo.png')} 
            onPress={() => navegar('Pedido', { produto: { nome: "X Duplo", valor: "38,50", img: require('../imagens/superxtudo.png') } })} 
          />
          <Lanche 
            nome="X Triplo" 
            valor="45,00" 
            imagem={require('../imagens/xbacon.png')} 
            onPress={() => navegar('Pedido', { produto: { nome: "X Triplo", valor: "45,00", img: require('../imagens/xbacon.png') } })} 
          />
          <Lanche 
            nome="X Gourmet" 
            valor="42,50" 
            imagem={require('../imagens/xsalada.png')} 
            onPress={() => navegar('Pedido', { produto: { nome: "X Gourmet", valor: "42,50", img: require('../imagens/xsalada.png') } })} 
          />
          <Lanche 
            nome="X Clássico" 
            valor="24,00" 
            imagem={require('../imagens/cheder.png')} 
            onPress={() => navegar('Pedido', { produto: { nome: "X Clássico", valor: "24,00", img: require('../imagens/cheder.png') } })} 
          />
          <Lanche 
            nome="X Corações" 
            valor="29,50" 
            imagem={require('../imagens/superxtudo.png')} 
            onPress={() => navegar('Pedido', { produto: { nome: "X Corações", valor: "29,50", img: require('../imagens/superxtudo.png') } })} 
          />
          <Lanche 
            nome="X Rodeio" 
            valor="34,00" 
            imagem={require('../imagens/xbacon.png')} 
            onPress={() => navegar('Pedido', { produto: { nome: "X Rodeio", valor: "34,00", img: require('../imagens/xbacon.png') } })} 
          />
          <Lanche 
            nome="X Suíço" 
            valor="30,50" 
            imagem={require('../imagens/xsalada.png')} 
            onPress={() => navegar('Pedido', { produto: { nome: "X Suíço", valor: "30,50", img: require('../imagens/xsalada.png') } })} 
          />
          <Lanche 
            nome="X Australiano" 
            valor="41,00" 
            imagem={require('../imagens/cheder.png')} 
            onPress={() => navegar('Pedido', { produto: { nome: "X Australiano", valor: "41,00", img: require('../imagens/cheder.png') } })} 
          />
          <Lanche 
            nome="X Nordestino" 
            valor="25,50" 
            imagem={require('../imagens/superxtudo.png')} 
            onPress={() => navegar('Pedido', { produto: { nome: "X Nordestino", valor: "25,50", img: require('../imagens/superxtudo.png') } })} 
          />
          <Lanche 
            nome="X Mineiro" 
            valor="23,50" 
            imagem={require('../imagens/xbacon.png')} 
            onPress={() => navegar('Pedido', { produto: { nome: "X Mineiro", valor: "23,50", img: require('../imagens/xbacon.png') } })} 
          />
          <Lanche 
            nome="X Carioca" 
            valor="31,00" 
            imagem={require('../imagens/xsalada.png')} 
            onPress={() => navegar('Pedido', { produto: { nome: "X Carioca", valor: "31,00", img: require('../imagens/xsalada.png') } })} 
          />
          <Lanche 
            nome="X Premium" 
            valor="50,00" 
            imagem={require('../imagens/cheder.png')} 
            onPress={() => navegar('Pedido', { produto: { nome: "X Premium", valor: "50,00", img: require('../imagens/cheder.png') } })} 
          />

        </View>
      </ScrollView>
    </View>
  );
}

const css = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ea1d2c',
    paddingTop: 40,
  },
  header: {
    alignItems: 'center',
    marginBottom: 20,
  },
  logoIfood: {
    width: '100%',
    minWidth: 150,
    height: '170%',
    minHeight: 50,
  },
  btnPerfil: {
    position: 'absolute',
    right: 20,
    top: 10,
    backgroundColor: '#fff',
    paddingVertical: 5,
    paddingHorizontal: 15,
    borderRadius: 20,
    elevation: 5,
  },
  containerLojas: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    width: '100%',
    marginBottom: 20,
    paddingHorizontal: 5,
  },
  lojaIcon: {
    width: '10%',
    minWidth: 70,
    height: '20%',
    minHeight: 70,
    backgroundColor: '#fff',
    borderRadius: 35,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 5,
  },
  lojaImage: {
    width: '100%',
    height: '100%',
    borderRadius: 25,
  },
  gridProdutos: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-evenly',
    paddingBottom: 20,
    paddingHorizontal: 5,
    backgroundColor: '#f0f0f0',
    width: '90%',
    marginHorizontal: '5%',
    borderRadius:12,
  }
});