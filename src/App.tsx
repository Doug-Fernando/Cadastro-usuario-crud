import React from 'react';
import { Routes, Route } from 'react-router-dom';

import './App.css';

import Home from './pages/Home';
import AddUser from './pages/AddUser';
import EditUser from './pages/EditUser';

const App = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/cadastrar" element={<AddUser />} />
    <Route path="/editar/:id" element={<EditUser />} />
  </Routes>
);

export default App;
