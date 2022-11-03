import React from 'react';


import './components/App/App.css';
import { BrowserRouter, Route, Routes} from 'react-router-dom';

import Dashboard from './components/Dashboard/Dashboard';
import Login from './components/Login/Login';
import Preferences from './components/Preferences/Preferences';
import useToken from './components/App/useToken';
import ConsultaPorPlaca from './components/ConsultaPorPlaca/ConsultaPorPlaca';
import NewUser from './components/NewUser/NewUser';
import Menu from './components/Menu/Menu';
import Cadastrar from './components/CadastrarMulta/Cadastrar';
import "bootstrap/dist/css/bootstrap.min.css"




function App() {

/*
  const { token, setToken } = useToken();

  if(!token) {
    return <Login setToken={setToken} />
  }
*/

  return (
      <div className="wrapper">
      <h1></h1>
      <BrowserRouter>
        <Routes>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/menu" element={<Menu />}></Route>
        <Route path="/newuser" element={<NewUser />}></Route>
        <Route path="/consultaporplaca" element={<ConsultaPorPlaca />}></Route>
        <Route path="/cadastrodemulta" element={<Cadastrar />}></Route>
        </Routes>
      </BrowserRouter>
    </div>

  );
}

export default App;




