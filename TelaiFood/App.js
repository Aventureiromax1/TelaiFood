import React, { useState } from 'react';
import IFood from './Telas/IFood';
import Produtos from './Telas/Produtos';
import Pedido from './Telas/Pedido';
import TelaCep from './Telas/TelaCep';
import Usuario from './Telas/Usuario';

export default function App() {
  const [telaAtual, setTelaAtual] = useState('IFood');
  const [lojaSelecionada, setLojaSelecionada] = useState('');
  const [produtoSelecionado, setProdutoSelecionado] = useState(null);

  const navegar = (tela, parametros = {}) => {
    if (parametros.loja) setLojaSelecionada(parametros.loja);
    if (parametros.produto) setProdutoSelecionado(parametros.produto);
    setTelaAtual(tela);
  };

  if (telaAtual === 'IFood') {
    return <IFood navegar={navegar} />;
  } else if (telaAtual === 'Produtos') {
    return <Produtos navegar={navegar} loja={lojaSelecionada} />;
  } else if (telaAtual === 'Pedido') {
    return <Pedido navegar={navegar} produto={produtoSelecionado} />;
  } else if (telaAtual === 'Usuario') {
    return <Usuario navegar={navegar} />;
  } else if (telaAtual === 'TelaCep') {
    return <TelaCep navegar={navegar} />;
  }
}