import React from 'react';

import Infracao from './Infracao';
import classes from './InfracaoList.module.css';


const InfracoesList = (props) => {

    const DisplayData=props.infracoes.map(
        (infracao)=>{
            return(
                <tr>
                    <td>{infracao.id}</td>
                    <td>{infracao.placa}</td>
                    <td>{infracao.valor}</td>
                    <td>{infracao.observacoes}</td>
                    <td>{infracao.local}</td>
                    <td>{infracao.veiculo}</td>
                    <td>{infracao.data}</td>
                </tr>
            )
        }
    )

  return (
    <ul className={classes['infracao-list']}>
      {props.infracoes.map((infracao) => (
        <div>
        <table responsive>
            <thead>
              <tr>
                <th>#</th>
                <th>Placa</th>
                <th>Veículo</th>
                <th>Local</th>
                <th>Data</th>
                <th>Obs</th>
              </tr>
            </thead>
            <tbody>
                {DisplayData}
            </tbody>
        </table>
        </div>
      ))}
    </ul>
  );
};

export default InfracoesList;
