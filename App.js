import React, { useState } from 'react';
import IFood from './Telas/IFood';
import Produtos from './Telas/Produtos';
import Pedido from './Telas/Pedido';
import TelaCep from './Telas/TelaCep';
import Calculadora from './Telas/Calculadora';

export default function App() {
  const [historico, setHistorico] = useState(['IFood']);
  const [lojaSelecionada, setLojaSelecionada] = useState('');
  const [produtoSelecionado, setProdutoSelecionado] = useState(null);

  // A tela atual é sempre a última do histórico
  const telaAtual = historico[historico.length - 1];

  const navegar = (tela, parametros = {}) => {
    if (parametros.loja) setLojaSelecionada(parametros.loja);
    if (parametros.produto) setProdutoSelecionado(parametros.produto);
    setHistorico([...historico, tela]);
  };

  const voltar = () => {
    if (historico.length > 1) {
      setHistorico(historico.slice(0, -1)); // Remove a última tela
    }
  };

  const renderizarTela = () => {
    if (telaAtual === 'IFood') return <IFood navegar={navegar} />;
    if (telaAtual === 'Produtos') return <Produtos navegar={navegar} loja={lojaSelecionada} />;
    if (telaAtual === 'Pedido') return <Pedido navegar={navegar} produto={produtoSelecionado} />;
    if (telaAtual === 'Calculadora') return <Calculadora navegar={navegar} />;
    if (telaAtual === 'TelaCep') return <TelaCep navegar={navegar} />;
  };

  return (
    <div>
      {/* Menu de Navegação */}
      <nav style={{ padding: '10px', background: '#f0f0f0', display: 'flex', gap: '10px', marginBottom: '20px' }}>
        <button onClick={voltar} disabled={historico.length === 1}>
          ⬅ Voltar
        </button>
        <button onClick={() => navegar('IFood')}>Início (IFood)</button>
        <button onClick={() => navegar('TelaCep')}>Buscar CEP</button>
        <button onClick={() => navegar('Calculadora')}>Perfil Usuário</button>
      </nav>

      {/* Conteúdo da Tela */}
      <main>
        {renderizarTela()}
      </main>
    </div>
  );
}