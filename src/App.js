import React from 'react';


import './components/App/App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Dashboard from './components/Dashboard/Dashboard';
import Login from './components/Login/Login';
import Preferences from './components/Preferences/Preferences';
import useToken from './components/App/useToken';
import ConsultaPorPlaca from './components/ConsultaPorPlaca/ConsultaPorPlaca';
import NewUser from './components/NewUser/NewUser';
import "bootstrap/dist/css/bootstrap.min.css"




function App() {
  //const token = getToken();
  const { token, setToken } = useToken();

  if(!token) {
    return <Login setToken={setToken} />
  }

  return (
   

      <div className="wrapper">
      <h1>CNH Digital</h1>
      <BrowserRouter>
        <Switch>
          <Route path="/dashboard" >
            <Dashboard />
          </Route>
          <Route path="/preferences" >
            <Preferences />
          </Route>
          <Route path="/consultaporplaca" >
            <ConsultaPorPlaca />
          </Route>
          <Route path="/newuser" >
            <NewUser />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>

  );
}

export default App;




