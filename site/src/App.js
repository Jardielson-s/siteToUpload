import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import './style/App.css';
import   Main  from './components/main';
import   Login  from './components/login';
import   Register  from './components/register';
import   PageUser  from './components/pageUser';

function App() {
  return (
    <BrowserRouter>
        <Switch>
            <Route path="/" exact={true} component={Main}/>
            <Route path="/register" component={Register} />
            <Route path="/login" component={Login} />
            <Route path="/pageUser" component={PageUser} />
        </Switch>
    </BrowserRouter>
  );
}

export default App;
