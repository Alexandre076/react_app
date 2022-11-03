import React from 'react';

import './NewUser.css';

export default function NewUser() {
  return(
    <div className="Auth-form-container">
      <form className="Auth  -form">
        <div className="Auth-form-content">
          <h3 className="Auth-form-title">Cadastre-se</h3>
          <div className="text-center">
  Já Cadastrado?{" "} 
            <span className="link-primary" >  
            <a href="/login">Login</a>
            </span>
          </div>
          <div className="form-group mt-3">
            <label>Nome Completo</label>
            <input
              type="email"
              className="form-control mt-1"
              placeholder="Digite seu nome"
            />
          </div>
          <div className="form-group mt-3">
            <label>Email</label>
            <input
              type="email"
              className="form-control mt-1"
              placeholder="Digite seu email"
            />
          </div>
          <div className="form-group mt-3">
            <label>Senha</label>
            <input
              type="password"
              className="form-control mt-1"
              placeholder="Crie uma senha"
            />
          </div>
          <div className="d-grid gap-2 mt-3">
            <button type="submit" className="btn btn-primary">
                Cadastrar
            </button>
          </div>
          <p className="text-center mt-2">
            Esqueceu sua <a href="/#/">senha?</a>
          </p>
        </div>
      </form>
    </div>
  );
}