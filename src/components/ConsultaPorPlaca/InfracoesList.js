import React from 'react';

import Infracao from './Infracao';
import classes from './InfracaoList.module.css';

const InfracoesList = (props) => {
  return (
    <ul className={classes['infracao-list']}>
      {props.infracoes.map((infracao) => (
        <Infracao
          id={infracao.id}
          placa={infracao.placa}
          valor={infracao.valor}
          observacoes={infracao.observacoes}
          local={infracao.local}
          veiculo={infracao.veiculo}
          data={infracao.data}
        />
      ))}
    </ul>
  );
};

export default InfracoesList;
