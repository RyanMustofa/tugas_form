import React from 'react';
import Login from './login/Login';
import Fetching from './fetching/Fetching';
import { BrowserRouter , Route } from 'react-router-dom';
function App() {
  return (
    <div>
        <BrowserRouter>
        <Route path="/" exact component={Login}/>
        <Route path="/home" exact component={Fetching}/>
        </BrowserRouter>
    </div>
  );
}

export default App;
