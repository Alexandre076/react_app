import React from 'react';
import './Cadastrar.css';

export default function Cadastrar() {
  return(
    <div className="Auth-form-container">
      <form className="Auth-form">
        <div className="Auth-form-content">
          <h3 className="Auth-form-title">Cadastro de Infrações</h3>
          <div className="text-center">
            Preencha os campos a seguir:{" "}
          </div>
          <div className="form-group mt-3">
            <label>Placa</label>
            <input
              type="text"
              className="form-control mt-1"
              placeholder="Digite a placa"
            />
          </div>
          <div className="form-group mt-3">
            <label>Veículo</label>
            <input
              type="text"
              className="form-control mt-1"
              placeholder="Marca e modelo do veículo"
            />
          </div>
          <div className="form-group mt-3">
            <label>Local</label>
            <input
              type="text"
              className="form-control mt-1"
              placeholder="Local da infração"
            />
          </div>
          <div className="form-group mt-3">
            <label>Data</label>
            <input
              type="text"
              className="form-control mt-1"
              placeholder="dd/mm/aa"
            />
          </div>
          <div className="form-group mt-3">
            <label>Observação</label>
            <input
              type="text"
              className="form-control mt-1"
              placeholder="Descrição da infração"
            />
          </div>
          <div className="d-grid gap-2 mt-3">
            <button type="submit" className="btn btn-primary">
             Submeter
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}