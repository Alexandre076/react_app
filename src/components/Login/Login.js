import React, { useState} from 'react';
import PropTypes from 'prop-types';
//import background from "./public/img/backgroundImage.jpg";


import './Login.css';



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

export default function Login({setToken}) {
  const [username, setUserName] = useState();
  const [password, setPassword] = useState();

  const handleSubmit = async e => {
    e.preventDefault();
    const token = await loginUser({
      username,
      password
    });
    setToken(token);
  }

  return(
    
    <div className="Auth-form-container">
      <form className="Auth-form" onSubmit={handleSubmit}>
        <div className="Auth-form-content">
          <h3 className="Auth-form-title">CNH Digital</h3>
          <div className="form-group mt-3">
            <label>Email</label>
            <input
              type="email"
              className="form-control mt-1"
              placeholder="Digite seu email"
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
            <button type="submit" className="btn btn-primary">
              Login
            </button>
          </div>
          <p className="forgot-password text-right mt-2">
            Esqueceu sua <a href="#">senha?</a>
          </p>
          <p className="create-account text-right mt-2">
            Eu não tenho uma conta? <a href="#">Criar conta</a>
          </p>
        </div>
      </form>
    </div>

    /*
    <div className="float-container">

      <div className='left'>

        <div className='login-wrapper'>
          
          <form onSubmit={handleSubmit}>
          <h1>CNH Digital</h1>
            <label>
              <p>Email</p>
              <input type="text" onChange={e => setUserName(e.target.value)}/>
            </label>
            <label>
              <p>Senha</p>
              <input type="password" onChange={e => setPassword(e.target.value)}/>
            </label>
            <div>
              <button type="submit">Login</button>
            </div>
            <div>
              <button type="submit">Novo Usuário</button>
            </div>
          </form>
        </div>
      </div>
    </div>
    */
  )
}

Login.propTypes = {
  setToken: PropTypes.func.isRequired
}

