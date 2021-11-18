import React from 'react';
import { Routes, Route } from 'react-router-dom';

import './App.css';

import Home from './pages/Home';
import AddUser from './pages/AddUser';

const App = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/novo" element={<AddUser />} />
  </Routes>
);

export default App;
