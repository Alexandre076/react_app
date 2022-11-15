import React, {useRef} from 'react';
import './Cadastrar.css';

export default function Cadastrar() {

  const idRef = useRef('');
  const placaRef = useRef('');
  const valorRef = useRef('');
  const observacaoRef = useRef('');
  const localRef = useRef('');
  const veiculoRef = useRef('');
  const dataRef = useRef('');

  async function addInfracoesHandler(event) {
    event.preventDefault();
    const multa = {
      id: idRef.current.value,
      placa: placaRef.current.value,
      valor: valorRef.current.value,
      observacoes: observacaoRef.current.value,
      local: localRef.current.value,
      veiculo: veiculoRef.current.value,
      data: dataRef.current.value,
    };

   
    console.log(multa);
    const response = await fetch('http://localhost:8080/api/infracoes/', {
      method: 'POST',
      body: JSON.stringify(multa),
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
             
      },
      
    })
    
    const data = await response.json();
    console.log(response.status);
    console.log(data);
            
  }

  return(
    <div className="Auth-form-container">
      <form className="Auth-form">
        <div className="Auth-form-content">
          <h3 className="Auth-form-title">Cadastro de Infrações</h3>
          <div className="text-center">
            Preencha os campos a seguir:{" "}
          </div>
          <div className="form-group mt-3">
            <label>Id</label>
            <input
              id="id"
              ref={idRef}
              type="text"
              className="form-control mt-1"
              placeholder="Digite o Id"
            />
          </div>
          <div className="form-group mt-3">
            <label>Placa</label>
            <input
              id="placa"
              ref={placaRef}
              type="text"
              className="form-control mt-1"
              placeholder="Digite a placa"
            />
          </div>
          <div className="form-group mt-3">
            <label>Valor</label>
            <input
              id="valor"
              ref={valorRef}
              type="text"
              className="form-control mt-1"
              placeholder="Digite o valor"
            />
          </div>
          <div className="form-group mt-3">
            <label>Observação</label>
            <input
              id="observacao"
              ref={observacaoRef}
              type="text"
              className="form-control mt-1"
              placeholder="Descrição da infração"
            />
          </div>
          <div className="form-group mt-3">
            <label>Local</label>
            <input
              id="local"
              ref={localRef}
              type="text"
              className="form-control mt-1"
              placeholder="Local da infração"
            />
          </div>
          <div className="form-group mt-3">
            <label>Veículo</label>
            <input
              id="veiculo"
              ref={veiculoRef}
              type="text"
              className="form-control mt-1"
              placeholder="Marca e modelo do veículo"
            />
          </div>
          
          <div className="form-group mt-3">
            <label>Data</label>
            <input
            id="data"
            ref={dataRef}
            type="datetime"
            className="form-control mt-1"
            placeholder="dd/mm/aa"
            />
          </div>
          
          <div className="d-grid gap-2 mt-3">
            <button onClick={addInfracoesHandler} type="button" className="btn btn-primary">
             Cadastrar
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}