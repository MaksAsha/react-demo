import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from "./components/navbar/Navbar";
import {Route} from "react-router-dom";
import UsersContainer from "./components/users/UsersContainer";
import Reports from "./components/reports/Reports";

function App() {
  return (
      <div className='app-wrapper'>
        <Navbar/>

        <div className='app-wrapper-content'>
          <Route path='/users' render={
            () => <UsersContainer />}
          />
          <Route path='/reports' render={
            () => <Reports/>}
          />
        </div>
      </div>
  );
}

export default App;
