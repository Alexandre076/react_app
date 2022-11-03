import React, { useState} from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from "react-router-dom";
import './Login.css';



/*
async function loginUser(credentials) {
  
 
  return fetch('http://localhost:8080/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(credentials)
  })
    .then(data => data.json())
 }
*/

export default function Login({ setToken }) {

  const navigate = useNavigate();
  const [username, setUserName] = useState();
  const [password, setPassword] = useState();

  /*
  const handleSubmit = async e => {
    e.preventDefault();
    const token = await loginUser({
      username,
      password
    });
    //setToken(token);
  }*/

  return(
    
    <div className="Auth-form-container">
      <form className="Auth-form" >
        <div className="Auth-form-content">
          <h3 className="Auth-form-title">CNH Digital</h3>
          <div className="form-group mt-3">
            <label>Email</label>
            <input
              type="text"
              className="form-control mt-1"
              placeholder="admin@admin.com.br"
              onChange={e => setUserName(e.target.value)}
            />
          </div>
          <div className="form-group mt-3">
            <label>Senha</label>
            <input
              type="password"
              className="form-control mt-1"
              placeholder="Digite sua senha"
              onChange={e => setPassword(e.target.value)}
            />
          </div>
          <div className="d-grid gap-2 mt-3">
            <button type="submit" className="btn btn-primary" onClick={() => navigate("/menu")}>
              Login
            </button>
          </div>
          <p className="forgot-password text-right mt-2">
            Esqueceu sua <a href="/#/">senha?</a>
          </p>
          <p className="create-account text-right mt-2">
            Eu não tenho uma conta? 
            <a href="/newuser"
            >Criar conta</a>
          </p>
        </div>
      </form>
      
    </div>
    
  )
}

/*
Login.propTypes = {
  setToken: PropTypes.func.isRequired
};*/