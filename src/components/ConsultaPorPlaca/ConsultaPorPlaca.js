import React, {useState, useRef} from 'react';
import './ConsultaPorPlaca.css';
import Table from 'react-bootstrap/Table';
//import InfracoesList from './InfracoesList';

export default function ConsultaPorPlaca() {

  const [infracoes, setInfracoes] = useState([]);
  const placaRef = useRef('');

  const DisplayData=infracoes.map(
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

  async function fetchInfracoesHandler(event) {
    
    event.preventDefault();
    const consultaPlaca = {
      placa: placaRef.current.value,
    };

    console.log(consultaPlaca.placa);

    const response = await fetch('http://localhost:8080/api/infracoes/find?placa='+ consultaPlaca.placa, {
      method: 'GET',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
         
      },
      
    })
    
    //console.log('http://localhost:8080/api/infracoes/find?placa='+ consultaPlaca.placa.value);
    const data = await response.json();
    console.log(response.status);
    //const data = await response.text();
    
      
        const transformedInfracoes = data.map((InfracoesData) => {
          return {
            
            id: InfracoesData.id,
            placa: InfracoesData.placa,
            valor: InfracoesData.valor,
            observacoes: InfracoesData.observacoes,
            local: InfracoesData.local,
            veiculo: InfracoesData.veiculo,
            data: InfracoesData.data
          };
        });
        setInfracoes(transformedInfracoes);
        console.log(transformedInfracoes); 
        
  }

 
  

  return(
    <div className="Auth-form-container">
      
      <form className="Auth-form">
        <div className="Auth-form-content">
          <h3 className="Auth-form-title">Consulta por placa</h3>
              <div className="form-group mt-3">
                  <label>Placa</label>
                  <input
                    type="text"
                    ref={placaRef}
                    className="form-control mt-1"
                    placeholder="Digite a placa"
                  />
              </div>
              <div className="d-grid gap-2 mt-3">
                <div>
                  <button onClick={fetchInfracoesHandler} type="button" className="btn btn-primary">Consultar</button>
                </div>
              </div>
            <div className="d-grid gap-2 mt-3">
              <Table responsive>
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Placa</th>
                    <th>Valor</th>
                    <th>Obs</th>
                    <th>Local</th>
                    <th>Veículo</th>
                    <th>Data</th>
                  </tr>
                </thead>
                <tbody>
                  {DisplayData}
                </tbody>
              </Table>
            </div>
        </div>  
      </form>
    </div>
  );
}