import React from 'react';

import classes from './InfracaoList.module.css';


const Infracao = (props) => {
  return (
    
    <li className={classes.Infracao}>
      <h2>{props.id}</h2>
      <h2>{props.placa}</h2>
      <h2>{props.valor}</h2>
      <h2>{props.observacoes}</h2>
      <h2>{props.local}</h2>
      <h3>{props.veiculo}</h3>
      <p>{props.data}</p>
    </li>
  );
};

export default Infracao;
