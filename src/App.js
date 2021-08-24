import React from 'react';
import { Switch, BrowserRouter } from 'react-router-dom';
import './style/App.css';
import   Main  from './components/main';
import   Login  from './components/login';
import   Register  from './components/register';
import  Config  from './components/config';
import Route from './Auth/authenticate';
import Recover from './components/recoverUser';


function App() {
  return (
    <BrowserRouter>
        <Switch>
            <Route path="/" exact={true} component={Main}/>
            <Route path="/register" component={Register} />
            <Route path="/login" component={Login} />
            <Route path="/pageUser" component={Config} isPrivate />
            <Route path="/recoverUser" component={Recover}/>
        </Switch>
    </BrowserRouter>
  );
}

export default App;
