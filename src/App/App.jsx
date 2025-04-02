import React from 'react';
import './App.css';
import Login from './Views/Login/Login';
import {Profile} from './Views/Profile/Profile';
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path='/' element={<Login/>}/>
          <Route exact path='/profile' element={<Profile/>}/>
        </Routes>

      </BrowserRouter>
    </div>
  );
}

export default App;
