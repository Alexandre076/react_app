import React from 'react';
import TextField from '@mui/material/TextField';
import './ConsultaPorPlaca.css';

export default function ConsultaPorPlaca() {
  return(
    
    <div className="Auth-form-container">
      <form className="Auth-form">
      <div className="Auth-form-content">
      <h3 className="Auth-form-title">Consulta por placa</h3>
        <form>     
        <div className="form-group mt-3">
            <label>Placa</label>
            <input
              type="email"
              className="form-control mt-1"
              placeholder="Digite a placa"
            />
          </div>
        <div className="d-grid gap-2 mt-3">
          <div>
            <button type="submit" className="btn btn-primary">Consultar</button>
          </div>
        </div>
            
        </form>
        <div className="d-grid gap-2 mt-3">
        <table class="table">
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
            <tr>
              <td>1</td>
              <td>XXX-9999</td>
              <td>Variant</td>
              <td>Av Beira Mar</td>
              <td>01/01/2023</td>
              <td>Pane seca em via pública</td>
            </tr>
            <tr>
              <td>2</td>
              <td>UUU-9877</td>
              <td>Gol</td>
              <td>Av Brasil</td>
              <td>01/01/2023</td>
              <td>Estacionar em local proibido</td>
            </tr>
            <tr>
              <td>3</td>
              <td>ABC-1234</td>
              <td>Fusca</td>
              <td>Av. Paulista</td>
              <td>01/01/2023</td>
              <td>Andar na contramão</td>
            </tr>
          </tbody>
        </table>
        </div>
        
       </div>
        </form>
    </div>
  );
}