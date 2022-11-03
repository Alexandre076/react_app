import React from 'react';
import { useNavigate } from "react-router-dom";
import './Menu.css';

export default function Menu() {
    const navigate = useNavigate();

  return(
    <div className="Auth-form-container">
      <form className="Auth-form">
        <div className="Auth-form-content">
          <h3 className="Auth-form-title">Escolha uma opção</h3>

          <div className="d-grid gap-2 mt-3">
            <button type="submit" className="btn btn-primary" onClick={() => navigate("/cadastrodemulta")}>
                Cadastrar Multa
            </button>
          </div>

          <div className="d-grid gap-2 mt-3">
            <button type="submit" className="btn btn-primary" onClick={() => navigate("/consultaporplaca")}>
                Consultar Multa
            </button>
          </div>
          
        </div>
      </form>
    </div>
  );
}